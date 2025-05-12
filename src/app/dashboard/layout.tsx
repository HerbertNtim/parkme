import SidebarLayout from "./_component/SidebarLayout"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarLayout>{children}</SidebarLayout>
  )
}

export default DashboardLayout
