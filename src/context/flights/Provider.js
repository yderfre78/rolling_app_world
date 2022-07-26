import FlightContext from "./index";
import { useState } from "react";

import apiCall from "../../api";

console.log(`DesdeFunction: ${localStorage.getItem("token")}`);

const accessToken = localStorage.getItem("token");

export default function FlightProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const [flightFull, setFlightFull] = useState([]);
  const [FlightDetail, setFlightDetail] = useState({});
  const [FlightFullDetail, setFlightFullDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [FlighTOnlydeparture, setFlighTOnlydeparture] = useState({});

  const getFlights = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const getFlightDetail = async (id) => {
    if (!id) Promise.reject("Id es Reqerido");
    try {
      setIsLoading(true);
      const response = await apiCall({
        method: "get",
        url: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=CHI&departureDate=2022-08-08&returnDate=2022-12-06&adults=2&children=2",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setFlightDetail(response.data[id - 1].itineraries);
      console.log(response.data[id - 1].itineraries);
      return response.data[id - 1].itineraries;
    } catch (error) {
      setFlights({});
    } finally {
      setIsLoading(false);
    }
  };

  const getFlightFullDetail = async (
    id,
    origin,
    destination,
    departureDate,
    returnDate,
    adults,
    childrens
  ) => {
    if (
      !origin ||
      !destination ||
      !departureDate ||
      !returnDate ||
      !adults ||
      !childrens
    )
      Promise.reject("faltan datos");
    try {
      setIsLoading(true);
      const response = await apiCall({
        method: "get",
        url:
          "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=" +
          origin +
          "&destinationLocationCode=" +
          destination +
          "&departureDate=" +
          departureDate +
          "&returnDate=" +
          returnDate +
          "&adults=" +
          adults +
          "&children=" +
          childrens,

        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setFlightFullDetail(response.data[id - 1].itineraries);
      console.log(response.data[id - 1].itineraries);
      return response.data[id - 1].itineraries;
    } catch (error) {
      setFlightFullDetail({});
    } finally {
      setIsLoading(false);
    }
  };

  const getFlightFull = async (
    origin,
    destination,
    departureDate,
    returnDate,
    adults,
    childrens
  ) => {
    if (
      !origin ||
      !destination ||
      !departureDate ||
      !returnDate ||
      !adults ||
      !childrens
    )
      Promise.reject("faltan datos");
    try {
      setIsLoading(true);
      const response = await apiCall({
        method: "get",
        url:
          "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=" +
          origin +
          "&destinationLocationCode=" +
          destination +
          "&departureDate=" +
          departureDate +
          "&returnDate=" +
          returnDate +
          "&adults=" +
          adults +
          "&children=" +
          childrens,

        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setFlightFull(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setFlightFull({});
    } finally {
      setIsLoading(false);
    }
  };

  const getFlighTOnlydeparture = async (
    origin,
    destination,
    departureDate,
    adults,
    childrens
  ) => {
    if (!origin || !destination || !departureDate || !adults || !childrens)
      Promise.reject("faltan datos");
    try {
      setIsLoading(true);
      const response = await apiCall({
        method: "get",
        url:
          "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=" +
          origin +
          "&destinationLocationCode=" +
          destination +
          "&departureDate=" +
          departureDate +
          "&adults=" +
          adults +
          "&children=" +
          childrens,

        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setFlighTOnlydeparture(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setFlighTOnlydeparture({});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FlightContext.Provider
      value={{
        isLoading,
        getFlights,
        flights,
        getFlightDetail,
        FlightDetail,
        getFlightFull,
        flightFull,
        getFlightFullDetail,
        FlightFullDetail,
        getFlighTOnlydeparture,
        FlighTOnlydeparture,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
}
