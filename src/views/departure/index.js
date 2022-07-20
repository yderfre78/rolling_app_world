import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";
import FlightListDeparture from "./components/FlightListDeparture";
export default function Departure() {
  const { FlighTOnlydeparture, isLoading } = useContext(FlightContext);

  if (isLoading) {
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>;
  }

  // console.log(`Desde Listas ${flights}`);
  return (
    <div>
      <FlightListDeparture FlighTOnlydeparture={FlighTOnlydeparture} />
    </div>
  );
}
