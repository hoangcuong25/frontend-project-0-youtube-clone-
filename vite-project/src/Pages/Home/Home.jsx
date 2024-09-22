/* eslint-disable react/prop-types */
import Feed from '../../Components/Feed/Feed'
import SideBar from '../../Components/SideBar/SideBar'
import './Home.css'

const Home = ({sidebar}) => {
    return (
        <>
            <SideBar sidebar={sidebar}/>
            <div className={`container ${sidebar? '' : 'large-container'}`}>
                <Feed />
            </div>
        </>
    )
}

export default Home