import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const estate = {
  title: {
    fontSize: "clamp(1.25rem, 1.912vw + 0.868rem, 2rem)",
  },
  tag: {
    fontSize: "clamp(0.05rem, 0.382vw + 0.549rem, 0.875rem)",
  },
  saleStatus: {
    color: "green",
  },
  rentStatus: {
    color: "red",
  },
};

const EstateDetail = () => {

  const { Id } = useParams();
  const currentId = parseInt(Id);
  const [data] = useLoaderData();

  useEffect(() => {
    document.title = `${data.estate_title}`;
  }, [data]);

  const nextId = Math.min(currentId + 1, 6);
  const prevId = Math.max(currentId - 1, 1);

  return (
    <div className="container card lg:card-side shadow-2xl flex flex-col lg:flex !items-start mb-10 rounded-lg border-2 bg-blue-50">
      <figure className="w-full lg:w-1/2 p-4 md:p-8 lg:p-8">
        <img src={data.image} alt={data.estate_title} className="rounded-lg" />
      </figure>
      <div className="card-body w-full lg:w-1/2 ">
        <h2 style={estate.title} className="card-title">
          {data.estate_title}
        </h2>
        <div className="flex gap-2  mt-3">
          <p className="font-bold grow-0">Segment:</p>
          <p>{data.segment_name}</p>
        </div>
        <hr className="my-4" />
        <div className="">
          <p className="font-bold grow-0">Description:</p>
          <p>{data.big_desc}</p>
        </div>
        <hr className="my-4" />
        <div className="flex gap-2">
          <p className="font-bold grow-0">Price:</p>
          <p>{data.price}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold grow-0">Status:</p>
          {data.status.includes("Sale") ? (
            <div className="badge badge-success text-white">
              {data.status.join(", ")}
            </div>
          ) : (
            <div className="badge badge-error text-white">
              {data.status.join(", ")}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <p className="font-bold grow-0">Area:</p>
          <p>{data.area}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold grow-0">Location:</p>
          <p>{data.location}</p>
        </div>
        <div className="flex gap-2 items-center mt">
          <p className="font-bold grow-0">Facilities:</p>
          <div className="gap-2 flex">
            {data.facilities.map((facility, index) => (
              <div
                key={index}
                style={estate.tag}
                className="badge badge-outline badge-success"
              >
                {facility}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-4" />

        <div className="card-actions flex justify-start gap-8 mt-5">
          {currentId > 1 && (
            <Link
              to={`/estate-details/${prevId}`}
              className="btn bg-green-500 hover:bg-green-700 text-white"
            >
              Previous Site
            </Link>
          )}
          {currentId < 6 && (
            <Link
              to={`/estate-details/${nextId}`}
              className="btn bg-blue-500 hover:bg-blue-700 text-white"
            >
              Next Site
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstateDetail;
