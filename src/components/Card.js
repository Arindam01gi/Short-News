import React from "react";

const Card = ({ props }) => {
  return (
    <>
      <div className="max-w-lg rounded overflow-hidden shadow-lg mt-24 grid md:grid-flow-col grid-flow-row">
        <div className=" m-2  ">
          <img src={props.urlToImage} alt="news-photo" className="object-fill h-fit w-fit rounded"/>
        </div>

        <div >
          <h2 className="m-4 text-xl font-thin ">{props.title} </h2>
          <p className="m-4 text-lg font-thin ">{props.content}</p>

          <p className="m-2  text-sm">
            read more <strong> Hindusthan Times</strong>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
