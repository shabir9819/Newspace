import { useEffect, useState } from "react";
import Card from "../Card/Card";

import Spinner from "../Spinner/Spinner";
import styles from "@/styles/Pagination.module.css"

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
   {!loading &&  <div className={`${styles.card__container} `}>
    {records.map((record, index) => (
         <Card record = {record} key={(record.author) ? record.author : `unknown${index}`}/>
        ))}
     
    </div>}

      
      <div className={styles.btn__list} >

      <button  className={styles.pre__btn} onClick={prePage} > <div >«</div> </button>
      {numbers.map((num) => (
        <li className={`${styles.pagination__btn}   ${(currentPage === num) ? styles.active : styles.inactive} `} key={num} onClick={()=>clickPage(num)}>{num}</li>
        ))}
      <button className={styles.next__btn} onClick={nextPage}> <div >»</div> </button>
        </div>
    </>
  );
}
