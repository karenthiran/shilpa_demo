import Sidebar from "../Components/SidebarComponents/Sidebar";


export default function Layout({ children }) {
  return (
    <>
      {/* <AdminNav /> */}
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  )
}