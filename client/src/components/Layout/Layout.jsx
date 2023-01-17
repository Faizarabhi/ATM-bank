import Navbar from "./Navbar"


const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-200 h-screen">
      <Navbar />
      <div className="flex justify-center items-center m-auto">
      {children}
    </div></div>
  )
}

export default Layout