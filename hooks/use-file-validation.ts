export function useFileValidation(maxSize: number, acceptedFormats: string[]) {
  const validateFile = (file: File) => {
    const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`
    
    if (!acceptedFormats.includes(fileExtension)) {
      return { isValid: false, error: "Invalid file format" }
    }

    if (file.size > maxSize) {
      return { isValid: false, error: "File too large" }
    }

    return { isValid: true }
  }

  return { validateFile }
}

