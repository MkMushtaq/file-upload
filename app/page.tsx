'use client'
import { FileUpload } from "@/components/file-upload"
import { SidebarNav } from "@/components/sidebar-nav"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SidebarNav />
      <div
        className="ml-16 min-h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(to right, #F7F7F7 2px, transparent 2px),
                           linear-gradient(to bottom, #F7F7F7 2px, transparent 2px)`,
          backgroundSize: '206px 206px'
        }}
      >
        <FileUpload
          onUpload={async (file) => {
            // Simulate upload delay
            await new Promise((resolve) => setTimeout(resolve, 1500))
          }}
        />
      </div>
    </div>
  )
}

