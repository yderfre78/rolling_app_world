import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";

export default function Home() {
  const { getFlights } = useContext(FlightContext);
  useEffect(() => {
    getFlights();
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
