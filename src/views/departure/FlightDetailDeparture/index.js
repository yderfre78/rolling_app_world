import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import FlightContext from "../../../context/flights";

import FlightListDetailDeparture from "./FlightListDetailDeparture"; 

export default function FlightListDetailDepartures() {
  const { id } = useParams();
  const { FlighTOnlydeparture, isLoading } = useContext(FlightContext);



  if (isLoading) {
    return <div> <h1 className="text-white"></h1> Cargando Vuelos...</div>;
  }
  console.log(`Detalle : ${FlighTOnlydeparture[id - 1].itineraries}`);
  const flight = FlighTOnlydeparture[id - 1].itineraries;

  return (
    <>
      <FlightListDetailDeparture flight={flight} />
    </>
  );
}

