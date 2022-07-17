import FlightListItem from "./FlightListItem";

export default function FlightList({ flightFull }) {
  return (
    <>
      {flightFull?.map((flight, index) => (
        <FlightListItem key={index} {...flight} />
      ))}
    </>
  );
}
