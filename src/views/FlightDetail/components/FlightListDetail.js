


import FlightListItemDetail from "./FlightListItemDetail";

export default function FlightListDetail({ flightDetails }) {
  console.log(`Desde Fligth list item detail: ${flightDetails}`);
  return (
    <>
      {flightDetails?.map((flightDetail, index) => (
        <FlightListItemDetail key={index} {...flightDetail} />
      ))}
    </>
  );
}
