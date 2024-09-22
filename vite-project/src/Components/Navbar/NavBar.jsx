/* eslint-disable react/prop-types */
import './NavBar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

const NavBar = ({setSidebar}) => {
    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img src={menu_icon} className='menu-icon'onClick={() => setSidebar(prev => prev ===false? true: false)} alt="" />
                <img src={logo} className='logo' alt="" />
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div" >
                    <input type='text' placeholder='Search'></input>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="nav-right">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={profile_icon} className='user-icon' alt="" />
            </div>
        </nav>
    )
}

export default NavBar