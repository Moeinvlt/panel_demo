import { useState } from "react"
import Content from "./layout/content"
import Header from "./layout/header"
import Sidebar from "./layout/sidebar"

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // console.log(isSidebarOpen)

  return (
    <div>
     <Sidebar isOpen={isSidebarOpen} closeSidebar={() => {setIsSidebarOpen(false)}} />
      <div className="w-full xl:pr-64">
        <Header toggleSidebar={() => {setIsSidebarOpen(prev => !prev)}} />
        <Content/>
      </div>
    </div>
  )
}

export default App