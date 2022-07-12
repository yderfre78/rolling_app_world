import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import FlightContext from "../../context/flights";

export default function FlightDetail2() {
  const { id } = useParams();
  const { getFlightDetail, FlightDetail, isLoading } =
    useContext(FlightContext);

  useEffect(() => {
    getFlightDetail(id).catch(null);
  }, []);
  console.log();
  console.log(`Detalle : ${FlightDetail}`);
  if (isLoading) {
    return <div>Cargando Vuelos...</div>;
  }
  return (
    <>
      <h1>Informacion de la busqueda hecha por la pantalla 1</h1>
      <div>
        <h2>
          Duracion: {FlightDetail.itineraries[0].duration.slice(2, 3)}Horas
          {FlightDetail.itineraries[0].duration.slice(4, 6)} Minutos
        </h2>
        <h2>{FlightDetail.itineraries[0].segments[0].arrival.iataCode}</h2>
        <p> {FlightDetail.itineraries[0].segments[0].arrival.at.slice(0,10)}</p>
        <p>
          Terminal: {FlightDetail.itineraries[0].segments[0].arrival.terminal}
        </p>
      </div>
      <div>
        <p> {FlightDetail.itineraries[0].segments[0].arrival.at}</p>
      </div>
      <div>--------------------------------------</div>
      <div>
        <h2>{FlightDetail.itineraries[0].segments[0].departure.iataCode}</h2>
        <p> {FlightDetail.itineraries[0].segments[0].departure.at}</p>
        <p>
          Terminal: {FlightDetail.itineraries[0].segments[0].departure.terminal}
        </p>
      </div>

      <div>
         <h1>Vuelo: {FlightDetail.itineraries[0].segments[0].aircraft.code}</h1> 
      </div>
    </>
  );
}

{
  /* <p>
{" "}

</p>
<p> {`Sillas Disponibles: ${FlightDetail?.numberOfBookableSeats}`}</p> */
}

{
  /* <p> {`Ultimo dia para reservar: ${FlightDetail?.lastTicketingDate}`}</p> */
}
