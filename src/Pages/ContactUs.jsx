import AOS from "aos";
import "aos/dist/aos.css";
import "leaflet/dist/leaflet.css";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us - Realisto";
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const position = [23.8103, 90.4125];

  return (
    <div className="container mx-auto mb-5">
      <section
        className="p-6 bg-blue-50 text-gray-900"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-blue-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-extrabold text-[25px]">
                Query for your Industry
              </p>
              <p className="text-[20px] py-2">
                If you cannot find a specific industry-related resource you're
                looking for, please feel free to submit a request to add it to
                our library. We highly value your input, and your request will
                help us enhance our collection to better serve your needs.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm font-bold">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm font-bold">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm font-bold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm font-bold">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm font-bold">
                  Industry Category
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm font-bold">
                  Segment Name
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm font-bold">
                  Preferrable Area Size
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-4 py-2 border rounded-md  font-bold w-1/3 sm:w-1/6 bg-green-500 text-white hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </form>
      </section>

      <h1 className="text-3xl font-bold my-4 text-center">WE ARE LOCATED AT</h1>
      <div data-aos="fade-left" data-aos-duration="600">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-96 w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Dhaka, Bangladesh</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactUs;
