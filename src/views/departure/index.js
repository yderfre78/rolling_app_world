import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";
import FlightListDeparture from "./components/FlightListDeparture";
export default function Departure() {
  const { FlighTOnlydeparture, isLoading } = useContext(FlightContext);


  if (isLoading) {
    return <div>Cargando Vuelos...</div>;
  }

  // console.log(`Desde Listas ${flights}`);
  return (
    <div>
      <FlightListDeparture FlighTOnlydeparture={FlighTOnlydeparture} />
    </div>
  );
}
