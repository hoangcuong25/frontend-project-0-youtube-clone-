/* eslint-disable react/prop-types */

import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = ({ videoId }) => {
    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allowfullscreen></iframe>
            <h3>Best Channel to learn coding that help you to be a web developer</h3>
            <div className="play-video-info">
                <p>123 views &bull; 2 day ago</p>
                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />15</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>GreatStack</p>
                    <span>1M Subcribers</span>
                </div>
                <button>Subcribe</button>
            </div>
            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subcribe GreatStack to watch More Tutorials on web development</p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>The element is positioned according to the Normal Flow of the document.
                            The top, right, bottom, left, and z-index properties have no effect. This is the default value.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>The element is positioned according to the Normal Flow of the document.
                            The top, right, bottom, left, and z-index properties have no effect. This is the default value.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>The element is positioned according to the Normal Flow of the document.
                            The top, right, bottom, left, and z-index properties have no effect. This is the default value.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo