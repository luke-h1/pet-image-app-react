import React, { useEffect, useState } from 'react';
import './Search.scss';

const Search = () => {
  const [dog, setDog] = useState([]);

  useEffect(() => { 
    getAnimals(); 
  },[])

  const getAnimals = async () => { 
    const API_URL = `http://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true`;
    const res = await fetch(API_URL);
    const data = await res.json();
    setDog(data);
  }

  return (
    <>
      <div className="search-container">
        <h1>hello</h1>
        <img src={dog && dog} alt=""/>
      </div>
    </>
  );
};
export default Search;
