import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type || 'movie';

  const [apiData, setApidata] = useState({
    name: 'No Name Available',
    key: null,
    published_at: 'N/A',
    type: 'Unknown',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjAzMWNkZWI1NTc0MjkxMTNkZGRhMDdmMTg5NGJjYSIsIm5iZiI6MTczNDk1MDk0My41ODcwMDAxLCJzdWIiOiI2NzY5NDAxZjczZGE1YmNjYzVjNGRlY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JK8YQH-MoQTK-lqc4B18Jc4QpiKrhGZj9ljDCiEU1ng',
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => {
        const videoData = data.results?.find((video) => video.type === 'Trailer');
        if (videoData) {
          setApidata({
            name: videoData.name,
            key: videoData.key,
            published_at: videoData.published_at || 'N/A',
            type: videoData.type,
          });
        } else {
          setApidata((prev) => ({ ...prev, key: null })); // No video found
        }
      })
      .catch((err) => console.error(err));
  }, [id, type]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-1)} />
      {apiData.key ? (
        <iframe
          width='90%'
          height='90%'
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title='trailer'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      ) : (
        <p className="no-video">No video available for this title.</p>
      )}
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
