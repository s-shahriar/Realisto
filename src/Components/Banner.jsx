import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaBuilding } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";

const Banner = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-blue-100" data-aos="fade-up" data-aos-duration="600">
      <div className="container flex-col md:flex-row lg:flex">
        <div className="left flex-1 flex-col items-center justify-center py-12 px-6">
          <h1 className="text-3xl font-bold">
            Find a perfect property <br></br>Where you'll love to grow your
            businesses
          </h1>
          <p className="text-xl my-6">
            We helps businesses customize, automate and scale up their advertise
            production and delivery.
          </p>

          <div className="form space-y-6">
            <label className="input input-bordered flex items-center gap-2">
              <CiLocationOn />
              <input
                type="text"
                className="grow border-0"
                placeholder="City/Street"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">      
            <FaBuilding />     
              <input
                type="text"
                className="grow border-0"
                placeholder="Property Type"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <IoPricetagOutline />
              <input
                type="number"
                className="grow border-0 border-transparent"
                placeholder="Price Range"
              />
            </label>
            <button className="btn btn-neutral w-full">Search</button>
          </div>
        </div>

        <div className="right flex-1">
          <div className="carousel w-full h-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/GJXmZ5K/image.png"
                className="w-full bg-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/mvW4DD0/image.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/yWxDFgm/image.png"
                className="w-full bg-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/5jmybrB/image.png"
                className="w-full bg-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
