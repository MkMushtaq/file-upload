"use client"

import { AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UploadZone } from "./upload-zone"
import { UploadStatus } from "./upload-status"
import { useUploadState } from "../hooks/use-upload-state"
import { useFileValidation } from "../hooks/use-file-validation"
import type { FileUploadProps } from "../types/upload"
import { BookText } from "lucide-react"

export function FileUpload({
    maxSize = 10 * 1024 * 1024,
    acceptedFormats = [".pdf", ".doc", ".docx"],
    onUpload,
}: FileUploadProps) {
    const { state, setLoading, setSuccess, setError, resetState } = useUploadState()
    const { validateFile } = useFileValidation(maxSize, acceptedFormats)

    const handleFileUpload = async (file: File) => {
        const validation = validateFile(file)
        if (!validation.isValid) {
            setError(validation.error!)
            return
        }

        setLoading()

        try {
            if (onUpload) {
                await onUpload(file)
            }
            setSuccess(file)

            // Reset after 2 seconds
            setTimeout(resetState, 2000)
        } catch (error) {
            setError("Upload failed. Please try again.")
        }
    }

    return (
        <Card className="w-full max-w-2xl mx-auto rounded-[15px] shadow-lg bg-white">
            <CardHeader>
                <CardTitle className="text-center">UPLOAD RESUME</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <AnimatePresence mode="wait">
                    {state.status === "idle" ? (
                        <UploadZone onFileSelect={handleFileUpload} state={state} />
                    ) : (
                        <UploadStatus {...state} />
                    )}
                </AnimatePresence>
                <div className="flex justify-between text-sm" style={{ fontSize: '14px', color: '#7F7F7F' }}>
                    <span>Supported formats: PDF, DOCS</span>
                    <span>Maximum size supported: 10MB</span>
                </div>
                <div className="relative">
                    <div className=" flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-800">OR</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-center mb-4">Fill a form</h2>
                    <Button
                        variant="outline"
                        className="w-full rounded-[5px] border-0 bg-[#f6f6f6] shadow-md"
                        onClick={() => {
                            // Handle form navigation
                        }}
                    >
                        <BookText className="mr-2 h-4 w-4" />
                        Fill a short 7 step form
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

