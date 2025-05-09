import Navbar from "@/components/Navbar"

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default GuestLayout
