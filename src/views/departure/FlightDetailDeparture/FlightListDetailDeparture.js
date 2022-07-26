import FlightListItemDetailDeparture from "./FlightListItemDetailDeparture";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function FlightListDetail({ flight, fligth2 }) {
  const navigate = useNavigate();
  console.log(`Desde Fligth list item detail: ${flight}`);
  return (
    <>
      <div className="text-align-left ">
        <IconButton
          className="icon_button_back"
          color="primary"
          onClick={() => navigate(-1)}
          aria-label="delete"
          size="large"
        >
          <FaArrowAltCircleLeft fontSize="inherit" />
          <h4 className="m-3">Volver</h4>
        </IconButton>
      </div>
      <div className="container-details">
        <div className="mt-5 mb-5">
          <div className="mt-5 mb-5 card-item-deta ">
            <h1 className=" p-3 text-center  ">
              Precio: {fligth2.currency} ${fligth2.base}
            </h1>
            <h1 className=" p-3 text-center text-bg-light ">ITINERARIOS</h1>
          </div>
        </div>

        {flight?.map((flightDetaiL, index) => (
          <FlightListItemDetailDeparture key={index} {...flightDetaiL} />
        ))}
      </div>
    </>
  );
}
