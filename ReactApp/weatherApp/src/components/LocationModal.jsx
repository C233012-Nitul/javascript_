import { X } from "lucide-react";
import { useState } from "react";
const LocationModal = ({ onClose }) => {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = city.trim();
    console.log(value);
  };

  const handleGeoLocation = () =>{
    navigator.geolocation.getCurrentPosition((position) =>{
    const {latitude, longitude} = position.coords
    console.log({latitude, longitude})
    }, (error) => {
      console.log(error)
    }, {
      timeout : 10000
    })
  }

  return (
    <div className="bg-gray-950/60 fixed flex justify-center items-center inset-0">
      <div className="p-5 rounded-2xl h-95 w-md bg-gray-100 shadow-2xl ">
        <div className="flex items-center justify-between">
          <h2 className="text-xl py-2">Where Are you Today?</h2>
          <button
            onClick={onClose}
            type="button"
            className="cursor-pointer hover:scale-105 w-10 h-10 rounded-full p-2 bg-gray-400 "
          >
            <X />
          </button>
        </div>
        <div className="pt-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded-2xl w-full border p-2"
              placeholder="Enter City Name"
            />
            <div className="">
              <button
                type="submit"
                className="w-full cursor-pointer text-gray-300 px-5 py-1 hover:scale-105 transition-all  rounded-4xl text-lg font-medium bg-blue-500"
              >
                Get Weather
              </button>
            </div>
          </form>
        </div>
        <div className="py-2 text-center">Or</div>
        <div className="">
          <button
            type="button"
            className="w-full cursor-pointer text-gray-300 px-5 py-1 hover:scale-105 transition-all  rounded-4xl text-lg font-medium bg-blue-500"
            onClick={handleGeoLocation}
          >
            Use My Location
          </button>
        </div>
      </div>
    </div>
  );
};
export default LocationModal;
