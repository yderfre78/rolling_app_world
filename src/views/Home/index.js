import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";
import FlightList from "./components/FlightList";

export default function Home() {
  const { flightFull, isLoading } = useContext(FlightContext);


  if (isLoading) {
    return <div>Cargando Vuelos...</div>;
  }

  // console.log(`Desde Listas ${flights}`);
  return (
    <div>
      <FlightList flightFull={flightFull} />
    </div>
  );
}
