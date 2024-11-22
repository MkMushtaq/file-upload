export type FileStatus = 'idle' | 'loading' | 'success' | 'error'

export interface UploadState {
  file: File | null
  status: FileStatus
  error?: string
}

export interface FileUploadProps {
  maxSize?: number // in bytes
  acceptedFormats?: string[]
  onUpload?: (file: File) => Promise<void>
}

