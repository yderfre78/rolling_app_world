import { Link } from "react-router-dom";
import "moment/locale/es";
import moment from "moment";
moment.locale("es");

export default function FlightListItem({
  index,
  id,
  numberOfBookableSeats,
  lastTicketingDate,
  price,
}) {
  const date = moment(lastTicketingDate).format("LLLL");
  return (
    <>
      <div className="container">
        <div className="row mt-5 card2-fligt card-block p-3 text-center p-5 ">

          <div>
            <h2>ID: {id}</h2>{" "}
          </div>

          <h1>Sillas Disponibles: {numberOfBookableSeats}</h1>
          <h1>Ultimo dia para reservar: {date}</h1>
          <h1>
            Precio: {price.currency} ${price.base}
          </h1>
          <div className="row w-100 align-items-center">
            <div className="col text-center">
              <Link
                className="btn button-g  px-5 w-50 align-center"
                to={`/flight/${id}`}
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
