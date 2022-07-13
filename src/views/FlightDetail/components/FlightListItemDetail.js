export default function FlightListItemDetail({ index, duration }) {
  console.log(`desde Itinerarios: ${index} ${duration}`);
  return (
    <div>
      <>
        <h1>{duration}</h1>
      </>
    </div>
  );
}
