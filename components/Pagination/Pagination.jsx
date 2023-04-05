import { useEffect, useState } from "react";
import Card from "../Card/Card";
import index from "@/pages";
import Spinner from "../Spinner/Spinner";

export default function Pagination({ data, setData, recordsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true)

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.articles.slice(firstIndex, lastIndex);

  const pageNum = Math.ceil(data.articles.length / recordsPerPage);
  const numbers = [...Array(pageNum + 1).keys()].slice(1);


  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[loading])

  const prePage = ()=>{
    if(currentPage !== 1){
      setLoading(true);
      setCurrentPage(currentPage -1)
    }
  }

  const clickPage = (num)=>{
  
      setLoading(true);
      setCurrentPage(num)
   
  }
  const nextPage = ()=>{
    if(currentPage !== numbers.length ){
      setLoading(true);
      setCurrentPage(currentPage +1)
    }
  }


  return (
    <>
    {loading && <Spinner/>}
   {!loading &&  <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center md:gap-2 m-1 md:m-2 relative">
    {records.map((record, index) => (
         <Card record = {record} key={(record.author) ? record.author : `unknown${index}`}/>
        ))}
     
    </div>}

      
      <div className="flex justify-center items-center my-[50px] w-full">

      <button  className=" border-[1px] border-gray-400 px-3 py-1 rounded-sm " onClick={prePage} > <div className="w-full h-full hover:translate-x-[-5px]">«</div> </button>
      {numbers.map((num) => (
        <li className={`pagination_btn list-none px-3 py-1 bg-[#e9ecef] border-[1px] border-gray-400 cursor-pointer rounded-sm  ${(currentPage === num) ? "bg-[#007bff]" : "bg-[#e9ecef] hover:bg-[#b7cadf]"} `} key={num} onClick={()=>clickPage(num)}>{num}</li>
        ))}
      <button className=" border-[1px] border-gray-400 px-3 py-1 rounded-sm" onClick={nextPage}> <div className="w-full h-full hover:translate-x-[5px]">»</div> </button>
        </div>
    </>
  );
}
