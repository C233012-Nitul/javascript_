import { X } from "lucide-react";
const LocationModal = ({onClose}) => {
  return (
    <div className="bg-gray-950/60 fixed flex justify-center items-center inset-0">
      <div className="p-5 rounded-2xl h-95 w-md bg-gray-100 shadow-2xl ">
        <div className="flex items-center justify-between">
            <h2 className="text-xl py-2">Where Are you Today?</h2>
        <button
        onClick={onClose}
          type="button"
          className="cursor-pointer hover:scale-105 w-10 h-10 rounded-full p-2 bg-gray-400 bg-red-400"
        >
          <X />
        </button>
        </div>
      </div>
    </div>
  );
}
export default LocationModal;