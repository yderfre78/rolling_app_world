import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";
import FlightList from "./components/FlightList";

export default function Home() {
  const { flightFull, isLoading } = useContext(FlightContext);

  if (isLoading) {
    return (
      <div>
        <div className="loader-background">
          <div className="loader"></div>
        </div>
        <div className="text-center">
          <h1 className="text-white">Cargando Vuelos...</h1>
        </div>
      </div>
    );
  }
  // console.log(`Desde Listas ${flights}`);
  return (
    <div>
      <FlightList flightFull={flightFull} />
    </div>
  );
}
