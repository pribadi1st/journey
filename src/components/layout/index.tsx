import Navbar from '@/components/navbar'

interface LayoutProps {
    children: React.ReactNode
}
export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <Navbar />
      <main className='base-container'>{children}</main>
    </>
  )
}
  