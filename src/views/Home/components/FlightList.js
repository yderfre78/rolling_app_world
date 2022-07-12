import FlightListItem from "./FlightListItem";

export default function FlightList({ flights }) {
  return (
    <>
      {flights?.map((flight, index) => 
        <FlightListItem key={index} {...flight} />
      )}
    </>
  );
}
