import Navbar from "./Navbar"


const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-200 h-screen">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout