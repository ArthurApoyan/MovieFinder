import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import YTSearch from "youtube-api-search";
import {YTAPIkey} from "../../utils/APIs/Api keys";
import YouTube from "react-youtube";

import "./videoTrailer.css";

const VideoTrailer = () => {


    const [videos, setVideos] = useState()
    const {movieTitle} = useParams()

    useEffect(() => {
        YTSearch({key: YTAPIkey, term: movieTitle + "Official Trailer"}, (videos) => {
            setVideos(videos)
        })
    }, [])

    return (
        videos && <div className="playerContainer">
                      <div className="playerDiv">
                        <YouTube iframeClassName="player" videoId={videos[0].id.videoId}/>
                      </div>
                  </div>
    );
};

export default VideoTrailer;