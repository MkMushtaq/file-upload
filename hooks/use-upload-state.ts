import { useState } from 'react'
import type { UploadState } from '../types/upload'

export function useUploadState() {
  const [state, setState] = useState<UploadState>({
    file: null,
    status: "idle",
  })

  const resetState = () => setState({ file: null, status: "idle" })
  
  const setLoading = () => setState(prev => ({ ...prev, status: "loading" }))
  
  const setSuccess = (file: File) => setState({ file, status: "success" })
  
  const setError = (error: string) => setState({ file: null, status: "error", error })

  return {
    state,
    resetState,
    setLoading,
    setSuccess,
    setError
  }
}

