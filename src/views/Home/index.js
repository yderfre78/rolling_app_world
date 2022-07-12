import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";
import FlightList from "./components/FlightList";

export default function Home() {
  const { getFlights, flights } = useContext(FlightContext);
  useEffect(() => {
    getFlights().catch(null);
  }, []);

  console.log(flights);
  return (
    <div>
      <FlightList flights={flights} />
    </div>
  );
}
