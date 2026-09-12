import { useState } from "react";
import LocationModal from "../components/LocationModal";

export default function Home() {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div >
      <div className="text-center">
        <h1 className="text-6xl text-blue-400 font-extrabold">
        MY <span className="text-blue-600">WEATHERAPP</span>
      </h1>
      <p className="py-4 text-md text-gray-500">Check Your Weather</p>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setClick(true)}
          className="cursor-pointer text-gray-300 px-5 py-1 hover:scale-105 transition-all  rounded-4xl text-lg font-medium bg-blue-500"
        >
          Check Weather
        </button>
      </div>
      {click && <LocationModal onClose = {() => setClick(false)}/>}
    </div>
  );
}
