import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
const API_KEY=import.meta.env.VITE_APP_API_KEY

const HomePage = () => {
 const[state,setState]=useState({})
    useEffect(() => {
        const getApiData=async()=>{
         try {
           const res=await axios.get('http://newsapi.org/v2/top-headlines', {
             params: {
               apiKey: API_KEY,
               country: 'in', 
             },})
             console.log(res)
             setState(res.data.articles)
         } catch (error) {
           console.log(error)
         }
        }
        getApiData()
       }, []);
     

       console.log(state)
  return (
    <div style={{width:'100%',height:'100%'}}>

        {
            state.length && state.map((item,index)=>{
                return(
                 <div key={index} style={{width:'70%',height:'40vh'}}>
                    <h4>{item.title}</h4>
                 </div>
                )
            })
        }
  
    </div>
  )
}

export default HomePage