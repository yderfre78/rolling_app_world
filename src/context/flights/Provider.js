import FlightContext from "./index";
import { useState } from "react";

import apiCall from "../../api";

export default function FlightProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const getFlights = async () => {
    const accessToken = "6aDL9AKu5FCUB5BumRopNAEWWAhq";
    try {
      const response = await apiCall({
        method: "get",
        url: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=CHI&departureDate=2022-08-08&returnDate=2022-12-06&adults=2&children=2",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setFlights(response.data);
      console.log(response.data);
      console.log(`DATA.ID2: ${response.data[3].id}`);
      return response.data;
    } catch (error) {
      setFlights([]);
    }
  };
  return (
    <FlightContext.Provider value={{ getFlights, flights }}>
      {children}
    </FlightContext.Provider>
  );
}
