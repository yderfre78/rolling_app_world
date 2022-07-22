import { useContext, useEffect } from "react";
import FlightContext from "../../context/flights";
import FlightList from "./components/FlightList";
import IconButton from "@mui/material/IconButton";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  const { flightFull, isLoading } = useContext(FlightContext);

  if (isLoading) {
    return (
      <div>
        <div className="loader-background">
          <div className="loader"></div>
        </div>
        <div className="text-center">
          <h1 className="text-white">Cargando Vuelos...</h1>
        </div>
      </div>
    );
  }
  // console.log(`Desde Listas ${flights}`);
  return (
    <div>
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
      <FlightList flightFull={flightFull} />
    </div>
  );
}
