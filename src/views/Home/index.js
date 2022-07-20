import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";
import FlightList from "./components/FlightList";

export default function Home() {
  const { flightFull, isLoading } = useContext(FlightContext);


  if (isLoading) {
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Cargando...</span>
  </div>
</div>
  }

  // console.log(`Desde Listas ${flights}`);
  return (
    <div>
      <FlightList flightFull={flightFull} />
    </div>
  );
}
