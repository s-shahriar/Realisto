import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const isSale = data.status.includes("Sale");
  const priceColor = isSale ? "bg-green-500" : "bg-red-500";

  return (
    <div className="w-auto rounded shadow-lg m-4" data-aos="fade-up" data-aos-duration="600">
      <img
        className="w-full h-64 object-cover"
        src={data.image}
        alt={data.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <hr className="my-4" />
        <div className="flex justify-between mb-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {data.segment_name}
          </span>
          <span
            className={`${priceColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}
          >
            {data.status}
          </span>
        </div>
        <p className="text-gray-700 text-base mb-2">{data.description}</p>
        <hr className="my-4" />
        <p className="text-gray-700 text-base mb-2 flex items-center">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
            Price:
          </span>
          <span className="text-green-500 font-semibold">{data.price}</span>
        </p>
        <p className="text-gray-700 text-base mb-2 flex items-center">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
            Area:
          </span>
          <span className="text-green-500 font-semibold">{data.area}</span>
        </p>
        <p className="text-gray-700 text-base mb-2 flex items-center">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
            Location:
          </span>
          <span className="text-green-500 font-semibold">{data.location}</span>
        </p>
        <div className="flex flex-wrap">
          {data.facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2"
            >
              {facility}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-2" />
      <div className="px-6 py-4">
        <Link to={`/estate-details/${data.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          View Property
        </Link>
      </div>
    </div>
  );
};

export default Cards;
