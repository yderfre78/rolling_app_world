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
  const flight = flightFull[id - 1].itineraries;

  return (
    <>
      <FlightListDetail flight={flight} />
    </>
  );
}
