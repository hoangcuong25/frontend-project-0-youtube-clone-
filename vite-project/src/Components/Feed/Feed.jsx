import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'
import { useEffect, useState } from 'react'

const Feed = ({ category }) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&videoCategoryId=${category}&key=${API_KEY}`
        //await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
    }

    useEffect(() => {
        fetchData();
    }, [category])

    console.log(data)
    return (
        <div className="feed">
            {/* {data.map((item, index) => {
                return (
                    <Link to={`video/20/4521`} className='card'>
                        <img src={thumbnail1} alt="" />
                        <h2>Best Channel to learn coding that help you to be a web developer</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2days ago</p>
                    </Link>
                )
            })} */}
        </div>
    )
}

export default Feed