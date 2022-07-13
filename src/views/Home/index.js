import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";
import FlightList from "./components/FlightList";

export default function Home() {
  const { getFlights, flights, isLoading } = useContext(FlightContext);
  useEffect(() => {
    getFlights().catch(null);
  }, []);
  if (isLoading) {
    return <div>Cargando Vuelos...</div>;
  }

  // console.log(`Desde Listas ${flights}`);
  return (
    <div>
      <FlightList flights={flights} />
    </div>
  );
}
