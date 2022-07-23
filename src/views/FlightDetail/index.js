import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import FlightContext from "../../context/flights";

import FlightListDetail from "./components/FlightListDetail";

export default function FlightDetail2() {
  const { id } = useParams();
  const { flightFull, isLoading } = useContext(FlightContext);

  if (isLoading) {
    return (
      <div>
        <h1 className="text-white"></h1> Cargando Vuelos...
      </div>
    );
  }
  console.log(`Detalle : ${flightFull[id - 1].itineraries}`);
  console.log(`Detalle : ${flightFull[id - 1].price.total}`);
  const flight = flightFull[id - 1].itineraries;
  const fligth2 = flightFull[id - 1].price.total;

  return (
    <>
      <div>
        <div className="card">{fligth2}</div>
        <FlightListDetail flight={flight}   />
      </div>
    </>
  );
}
