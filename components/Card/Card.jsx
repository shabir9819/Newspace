import no__img from "@/src/assets/no__img.png"
import Image from "next/image";
import styles from "@/styles/Card.module.css"

export default function Card({ record }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className={`card1 ${styles.card1}`}>
        <div className={`left ${styles.left}`}>
          {(record.urlToImage)?
          <img src={ record.urlToImage}
          alt={record.author} className=" image "/>
          :<Image
            src={ no__img}
            alt={record.author}
            width="350px"
            height="230px"
            className="image "
          />}
          <div className="date__published">
            <div className="day__container" >
              <p className="day">{new Date(record.publishedAt).getDay()}</p>
              <p className="month">
                {monthNames[new Date(record.publishedAt).getMonth()]}
              </p>
            </div>
            <div >
              <p className="year ">
                {new Date(record.publishedAt).getFullYear()}
              </p>
              <button className="read_btn"><a href={record.url} target="_blank">read more..</a></button>
            </div>
          </div>
        </div>
        <div className="right">
          <h2 className="heading">{record.title}</h2>
          {(record.author) && <div className="author">{record.author}</div>}
          <p className="para">{record.description}</p>
        </div>
        <div className="card__btn">
        <button><a href={record.url} target="_blank" >read more..</a></button>
        </div>
      </div>

     
    </>
  );
}
