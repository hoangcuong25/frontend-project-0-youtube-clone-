import { useState } from 'react'
import Feed from '../../Components/Feed/Feed'
import SideBar from '../../Components/SideBar/SideBar'
import './Home.css'

const Home = ({sidebar}) => {

    const[category, setCategory] = useState(0)
    return (
        <>
            <SideBar sidebar={sidebar} category={category} setCategory={setCategory}/>
            <div className={`container ${sidebar? '' : 'large-container'}`}>
                <Feed category={category}/>
            </div>
        </>
    )
}

export default Home