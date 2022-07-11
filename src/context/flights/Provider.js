import FlightContext from "./index";
import { useState } from "react";

import apiCall from "../../api";

export default function FlightProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const getFlights = async () => {
    const accessToken = "G8RXAXyCjwyOFgri1cEnHVAxDl3G";
    try {
      const flightsResult = await apiCall({
        method: "get",
        url: "https://test.api.amadeus.com/v2/shopping/flight-offers?children=2&originLocationCode=ATL&destinationLocationCode=CHI&departureDate=2022-08-08&returnDate=2022-12-06&adults=2",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFlights(flightsResult);
    } catch (error) {
      setFlights([]);
    }
  };
  return (
    <FlightContext.Provider value={{ getFlights }}>
      {children}
    </FlightContext.Provider>
  );
}
