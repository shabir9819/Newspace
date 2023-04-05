import no__img from "@/src/assets/no__img.png"
import Image from "next/image";

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
      <div className="card1 flex flex-col w-[90vw] h-[auto] md:flex-row justify-center  p-2 mt-12 box-border ">
        <div className="left relative flex-[1.2]">
          {(record.urlToImage)?
          <img src={ record.urlToImage}
          alt={record.author} className=" image object-cover"/>
          :<Image
            src={ no__img}
            alt={record.author}
            width="350px"
            height="230px"
            className="image "
          />}
          <div className="date__published   ">
            <div className=" mr-4 ">
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
        <div className="right relative flex-[0.8]">
          <h2 className="heading">{record.title}</h2>
          {(record.author) && <div className="author">{record.author}</div>}
          <p className="para">{record.description}</p>
        </div>
        <div className="flex md:hidden justify-center w-full mb-2">
        <button className="px-5 py-3 bg-[#007fff] w-full rounded-full hover:bg-[#8aa2b9] duration-200 "><a href={record.url} target="_blank" className="text-white no-underline hover:font-medium hover:underline capitalize duration-300">read more..</a></button>
        </div>
      </div>

      {/* mobile view */}
      <div className="card1 hidden flex-col w-[90vw] h-[auto] md:flex-row p-2 mt-12 box-border ">
        <div className="left relative flex-[1.2]">
          {(record.urlToImage)?
          <img src={ record.urlToImage}
          alt={record.author} className=" image object-cover"/>
          :<Image
            src={ no__img}
            alt={record.author}
            width="350px"
            height="230px"
            className="image "
            priority="false"
          />}
          <div className="date__published hidden md:inline  ">
            <div className="date__published1 mr-4 inline-block md:flex">
              <p className="day">{new Date(record.publishedAt).getDay()}</p>
              <p className="month">
                {monthNames[new Date(record.publishedAt).getMonth()]}
              </p>
            </div>
            <div className="hidden md:inline">
              <p className="year">
                {new Date(record.publishedAt).getFullYear()}
              </p>
              <button className="read_btn"><a href={record.url} target="_blank">read more..</a></button>
            </div>
          </div>
        </div>
        <div className="right relative flex-[0.8]">
          <h2 className="heading">{record.title}</h2>
          {(record.author) && <div className="author">{record.author}</div>}
          <p className="para">{record.description}</p>
        </div>
      </div>
    </>
  );
}
