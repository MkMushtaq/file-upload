import { useRef } from "react"
import { motion } from "framer-motion"
import { Upload } from 'lucide-react'
import type { UploadState } from "../types/upload"

interface UploadZoneProps {
    onFileSelect: (file: File) => void
    state: UploadState
}

export function UploadZone({ onFileSelect, state }: UploadZoneProps) {
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = async (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        const file = e.dataTransfer.files[0]
        if (file) onFileSelect(file)
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) onFileSelect(file)
    }

    return (
        <div
            className="relative border-2 border-dashed rounded-[15px] bg-[#f6f6f6] p-8 text-center hover:border-gray-400 transition-colors"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileSelect}
                disabled={state.status === "loading"}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
            >
                <div className="mx-auto w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                    <Upload className="w-6 h-6" style={{ color: '#574EB6' }} />
                </div>
                <div>
                    <span className="italic" style={{ color: '#909090' }}>
                        Drag and drop or{" "}
                    </span>
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
                        style={{ color: '#574EB6' }}
                    >
                        Choose a file
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
