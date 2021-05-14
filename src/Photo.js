import React, {useState, useEffect} from "react";
import axios from 'axios'
import Date from './Date';
import Title from './Title';
import Explanation from './Content';



const StyledPhoto = styled.div`
  text-align: center;

  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.white};
`
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

    <StyledPhoto>
    <img src = {photo.url} alt = '' />
    <Title title = {photo.title}/>
    <Date date = {photo.date}/>
    <Explanation content = {photo.explanation}/> 
    </StyledPhoto>
  )
} 


export default Photo