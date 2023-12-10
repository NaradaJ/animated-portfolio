import Togglebutton from "./Togglebutton"
import "/sidebar.scss"
import Links from "./Links" 


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="bg">
            <Links/>
            <Togglebutton/>
            </div>            
    </div>
  )
  }
export default Sidebar
