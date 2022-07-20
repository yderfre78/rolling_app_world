import FlightListItemDetail from "./FlightListItemDetail";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
export default function FlightListDetail({ flight }) {
  console.log(`Desde Fligth list item detail: ${flight}`);
  return (
    <>
      <div className="container-details">
        <div className="mt-5 mb-5">
          <h1 className=" p-3 text-center text-bg-light ">ITINERARIOS</h1>
        </div>

        <div className="">
          <div className="row">
            <div className="col-md-6">
              <h1 className="  p-2 text-center text-primary  ">Salida</h1>
            </div>
            <div className="col-md-6">
              <div className="p-2">
                <FaArrowRight className="h1 text-primary text-center fa-right" />
              </div>
            </div>
          </div>
        </div>
        <div>
          {flight?.map((flightDetaiL, index) => (
            <FlightListItemDetail key={index} {...flightDetaiL} />
          ))}
        </div>
        <div className=" ">
          <div className="row">
            <div className="col-md-6">
              <h1 className="  p-2 text-center text-primary  ">Regreso</h1>
            </div>
            <div className="col-md-6">
              <div className="p-2">
                <FaArrowLeft className="h1 text-primary text-center fa-left" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
