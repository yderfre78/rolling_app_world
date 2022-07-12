import { Link } from "react-router-dom";

export default function FlightListItem({
  index,
  id,
  numberOfBookableSeats,
  lastTicketingDate,
  price,
}) {
  return (
    <div>
      <>
        <div>{id}</div>
        <div>Index: {index}</div>

        <h1>Sillas Disponibles: {numberOfBookableSeats}</h1>
        <h1>Ultimo dia para reservar: {lastTicketingDate}</h1>
        <h1>
          Precio: {price.currency}
          {price.base}
        </h1>
        <button>
          <Link to={`/flight/${id}`}>Ver Detalle</Link>
        </button>
      </>
    </div>
  );
}
