import { Outlet } from 'react-router-dom'
import Sidebar from '../SideBar/'
import ChatBot from '../ChatBot'
import './index.scss'

const Layout = () => {
  return (
    
    <div className="App">
      
      <Sidebar />
      
      <div className="page">
      <div className="chatbot-container">
          <ChatBot />
        </div>
        <span className="tags top-tags">
          &lt;html&gt;
          <br />
          <span className="top-tag-html">&lt;body&gt;</span>
        </span>

        <Outlet />
        
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
