import React from "react";
import Navbar from "@/components/Navbar/Navbar"
import Pagination from "@/components/Pagination/Pagination"
import { useEffect, useState } from "react";
import axios from "axios";
import { apiData } from "@/config/text";


function index() {
  const [data, setData] = useState("") ;
 
  
  const recordsPerPage = 6;

  const fetchData = async () => {
    try {
      // const options = {
      //   method: "GET",
      //   url: "https://newsapi.org/v2/top-headlines?country=in&apiKey=4cc17d846e224155b46bbe916654df47",
        
      // };
  
      // const response =  await axios.request(options);
      // console.log(response.data)
      
      setData(apiData);
    
   
    } catch (error) {
      console.log(error);
    }

    
  };

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
    <Navbar/>
   {(data !== "") && <Pagination data ={data} setData= {setData} recordsPerPage={recordsPerPage}/>}
    </>
  )
}

export default index