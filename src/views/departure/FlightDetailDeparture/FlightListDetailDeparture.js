import FlightListItemDetailDeparture from "./FlightListItemDetailDeparture";

export default function FlightListDetail({ flight }) {
  console.log(`Desde Fligth list item detail: ${flight}`);
  return (
    <>
      <div className="container-details">
        <h1 className=" mt-5 mb-1 mr-2 text-center ">ITINERARIOS</h1>

        {flight?.map((flightDetaiL, index) => (
          <FlightListItemDetailDeparture key={index} {...flightDetaiL} />
        ))}
      </div>
    </>
  );
}
