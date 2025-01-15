import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title, category,type='movie'}) => {

  const[apiData,setApidata]=useState([]);
  /*This code implements horizontal scrolling for a container (.card-list */
  const cardsref=useRef( );
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjAzMWNkZWI1NTc0MjkxMTNkZGRhMDdmMTg5NGJjYSIsIm5iZiI6MTczNDk1MDk0My41ODcwMDAxLCJzdWIiOiI2NzY5NDAxZjczZGE1YmNjYzVjNGRlY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JK8YQH-MoQTK-lqc4B18Jc4QpiKrhGZj9ljDCiEU1ng'
    }
  };
  
 
  const handlewheel=(event)=>{
    event.preventDefault();
    cardsref.current.scrollLeft+=event.deltaY;
  }
  useEffect(() => {
    const url =
      category === 'day' || category === 'week'
        ? `https://api.themoviedb.org/3/trending/${type}/${category}`
        : `https://api.themoviedb.org/3/${type}/${category ||'top_rated'}?language=en-US&page=1`;

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setApidata(data.results))
      .catch((err) => console.error(err));
    
    const currentRef = cardsref.current;
    currentRef.addEventListener('wheel', handlewheel);
    return () => {
      currentRef.removeEventListener('wheel', handlewheel);
    };
  }, [category]); 
       
  return (
    <div className='titlecards'>
      <h2> {title||"Popular on netflix"}</h2>
      <div className="card-list"
      ref={cardsref}>
       { apiData.map((card,index)=>{ return <Link to={`/player/${card.id}`}  state={{ type }} className='card' key={index}>
       <img
              src={
                card.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                  : 'https://via.placeholder.com/500x281?text=No+Image+Available'
              }
              alt={card.name || card.original_title || 'No Title Available'}
              />
              <p>{card.name || card.original_title|| card.original_name || 'No Title Available'}</p>
            </Link>
            
        })}
      </div>
    </div>
  )
}

export default TitleCards
