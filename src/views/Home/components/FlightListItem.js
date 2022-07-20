import { Link } from "react-router-dom";

export default function FlightListItem({
  index,
  id,
  numberOfBookableSeats,
  lastTicketingDate,
  price,
}) {
  return (
    <>
      <div className="container">
        <div className="row mt-5 card2-fligt card-block p-3 text-center p-5 ">
          <div>{id}</div>
          <div>Index: {index}</div>

          <h1>Sillas Disponibles: {numberOfBookableSeats}</h1>
          <h1>Ultimo dia para reservar: {lastTicketingDate}</h1>
          <h1>
            Precio: {price.currency}
            {price.base}
          </h1>
          <div className="row w-100 align-items-center">
            <div className="col text-center">
                <Link className="btn button-g  px-5 w-50 align-center" to={`/flight/${id}`}>Ver Detalle</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
