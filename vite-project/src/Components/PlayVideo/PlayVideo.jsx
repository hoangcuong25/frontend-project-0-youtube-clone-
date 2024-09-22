import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { useEffect, useState } from 'react'
import { API_KEY, valueConverter } from '../../data'
import moment from 'moment'

const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null)
    const [channelData, setChannelData] = useState(null)
    const [commentData, setCommentData] = useState([])

    const fetchVideoData = async () => {
        // Fetching videos Data
        //const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}key=${API_KEY}`

        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
    }

    const fetchOtherData = async () => {
        // Fetching Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

        //Fetching comment data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchVideoData()
    }, [])

    useEffect(() => {
        fetchOtherData()
    }, [apiData])

    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? valueConverter(apiData.statistics.viewCount) : "16k"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2 day ago"}</p>
                <div>
                    <span><img src={like} alt="" />{apiData ? valueConverter(apiData.statistics.likeCount) : "100"}</span>
                    <span><img src={dislike} alt="" />15</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "19k"}</p>
                    <span>{channelData ? valueConverter(channelData.statistics.subscriberCount) : "10k"} Subcribers</span>
                </div>
                <button>Subcribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description"}</p>
                <p>Subcribe GreatStack to watch More Tutorials on web development</p>
                <hr />
                <h4>{apiData ? valueConverter(apiData.statistics.commentCount) : "137"} Comments</h4>
                {commentData.map((item, index) => {
                    return (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default PlayVideo