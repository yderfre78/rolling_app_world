import FlightListItemDeparture from "./FlightListItemDeparture";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function FlightListDeparture({ FlighTOnlydeparture }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="row w-arrown-rigth">
        <div className="col text-align-left col">
          <IconButton
            className="icon_button_back col"
            color="primary"
            onClick={() => navigate(-1)}
            aria-label="delete"
            size="large"
          >
            <FaArrowAltCircleLeft fontSize="inherit" />
            <h4 className="m-3">Volver</h4>
          </IconButton>
        </div>
        <div className="align-arrow-right col ">
          <IconButton
            className="icon_button_back"
            color="primary"
            onClick={() => navigate(+1)}
            aria-label="delete"
            size="large"
          >
            <h4 className="m-3">Volver</h4>
            <FaArrowAltCircleRight fontSize="inherit" />
          </IconButton>
        </div>
      </div>

      {FlighTOnlydeparture?.map((flight, index) => (
        <FlightListItemDeparture key={index} {...flight} />
      ))}
    </>
  );
}
