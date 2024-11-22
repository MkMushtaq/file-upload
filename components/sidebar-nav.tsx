import { Home, Star, FileText, HelpCircle, Settings, LogOut, Image } from 'lucide-react'
import Link from "next/link"

export function SidebarNav() {
    return (
        <nav className="fixed left-0 top-0 h-full w-16 bg-white border-r flex flex-col items-center py-4 space-y-4">
            <div className="w-8 h-8 mb-4">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-black"
                >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
            </div>
            <Link
                href="#"
                className="p-2 rounded-lg transition-colors"
                style={{ backgroundColor: '#A399FF', borderRadius: '10px' }}
            >
                <Star className="w-6 h-6 text-white" />
            </Link>
            <Link
                href="#"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
                <Home className="w-6 h-6 text-gray-600" />
            </Link>
            <Link
                href="#"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
                <FileText className="w-6 h-6 text-gray-600" />
            </Link>
            <div className="flex-1" />
            <div>
                <Link
                    href="#"
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <HelpCircle className="w-6 h-6 text-gray-600" />
                </Link>
                <Link
                    href="#"
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <Settings className="w-6 h-6 text-gray-600" />
                </Link>
            </div>
            <div className="w-full" />
            <Link
                href="#"
                className="p-2 hover:bg-gray-100transition-colors mt-auto bg-[#dbdbdb] rounded-[50px]"
            >
                <Image className="w-6 h-6 text-gray-600" />
            </Link>
        </nav>
    )
}

