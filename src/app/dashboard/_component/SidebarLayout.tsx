'use client'

import { Menu } from "lucide-react"
import { useState } from "react"
import DesktopSidebar from "./DesktopSidebar"
import MobileSidebar from "./MobileSidebar"

function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center w-full bg-blue-500 h-12 lg:hidden p-4">
        <Menu onClick={() => setOpen(!open)} className="cursor-pointer"/>
        <h1 className="text-2xl pl-4">Parkme</h1>
      </div>

      <div className="flex h-screen">
        <DesktopSidebar />
        <MobileSidebar open={open} setOpen={setOpen } />
        <main className="flex-1 bg-gray-300">
          {children}
        </main>
      </div>
    </div>
  )
}

export default SidebarLayout
