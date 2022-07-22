import FlightListItemDetailDeparture from "./FlightListItemDetailDeparture";

export default function FlightListDetail({ flight }) {
  console.log(`Desde Fligth list item detail: ${flight}`);
  return (
    <>
      <div className="container-details">
        <div className="mt-5 mb-5">
          <h1 className=" p-3 text-center text-bg-light ">ITINERARIOS</h1>
        </div>

        {flight?.map((flightDetaiL, index) => (
          <FlightListItemDetailDeparture key={index} {...flightDetaiL} />
        ))}
      </div>
    </>
  );
}
