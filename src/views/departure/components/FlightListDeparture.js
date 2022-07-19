import FlightListItemDeparture from './FlightListItemDeparture';

export default function FlightListDeparture({ FlighTOnlydeparture }) {
  return (
    <>
      {FlighTOnlydeparture?.map((flight, index) => (
        <FlightListItemDeparture key={index} {...flight} />
      ))}
    </>
  );
}
