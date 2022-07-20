import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";
import FlightListDeparture from "./components/FlightListDeparture";
export default function Departure() {
  const { FlighTOnlydeparture, isLoading } = useContext(FlightContext);

  if (isLoading) {
    return (
      <div>
        <div className="loader-background">
          <div className="loader"></div>
        </div>
        <div className="text-center" >
        <h1 className="text-white">Cargando Vuelos...</h1>
        </div>
      </div>
    );
  }


  return (
    <div>
      <FlightListDeparture FlighTOnlydeparture={FlighTOnlydeparture} />
    </div>
  );
}
