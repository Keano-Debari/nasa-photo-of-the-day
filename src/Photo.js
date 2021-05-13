import React, {useState, useEffect} from "react";
import axios from 'axios'
import Date from './Date';
import Title from './Title';
import Explanation from './Content';

const Photo = () => {

const [photo, setPhoto] = useState({});    
useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(function (res) {
      console.log(res);
      setPhoto(res.data);
    })
    .catch(function (error) {
        console.log(error);
    })
  
  }, [])

  return (

    <div>
    <img src = {photo.url} alt = '' />
    <Title title = {photo.title}/>
    <Date date = {photo.date}/>
    <Explanation content = {photo.explanation}/> 
    </div>
  )
} 


export default Photo