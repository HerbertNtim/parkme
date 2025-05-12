import Sidebar from "@/components/Sidebar"
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"


const MobileSidebar = ({ open, setOpen }: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="p-0 w-[256px]">
      <SheetTitle className="hidden">
          Sidebar Navigation
        </SheetTitle>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
