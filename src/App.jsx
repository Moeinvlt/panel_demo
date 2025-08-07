import Content from "./layout/content"
import Header from "./layout/header"
import Sidebar from "./layout/sidebar"

const App = () => {
  return (
    <div>
     <Sidebar/>
      <div className="w-full pr-64">
        <Header/>
        <Content/>
      </div>
    </div>
  )
}

export default App