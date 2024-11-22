import { motion } from "framer-motion"
import { Check, AlertCircle } from 'lucide-react'
import type { UploadState } from "../types/upload"

export function UploadStatus({ status, error }: UploadState) {
    if (status === "loading") {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
            >
                <div className="mx-auto w-12 h-12 rounded-full border-4 border-gray-200 border-t-[#574EB6] animate-spin" />
                <div className="text-center font-medium">Uploading...</div>
            </motion.div>
        )
    }

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
            >
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-center font-medium text-green-600">Upload successful!</div>
            </motion.div>
        )
    }

    if (status === "error") {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
            >
                <div className="mx-auto w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-red-600">{error}</div>
            </motion.div>
        )
    }

    return null
}

