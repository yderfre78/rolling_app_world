import FlightListItemDetail from "./FlightListItemDetail";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function FlightListDetail({ fligth2, flight }) {
  const navigate = useNavigate();
  console.log(`Desde Fligth list item detail: ${flight}  ${fligth2.base}`);
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
        <div className="row ">
          <div className="mt-5 mb-5 card-item-deta ">
            <h1 className=" p-3 text-center  ">
              Precio: {fligth2.currency} ${fligth2.base}
            </h1>
            <h1 className=" p-3 text-center  ">ITINERARIOS</h1>
          </div>
        </div>

        <div>
          <div className="container mt-4 mb-3 ">
            <div className="row">
              <div className="col-md-6 ">
                <h1 className="text-light marigin-sali">Salida</h1>
              </div>
              <div className="col-md-6">
                <div className="">
                  <FaArrowRight className="h1 text-light text-center fa-left  " />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fligth-list">
            {flight?.map((flightDetaiL, index) => (
              <FlightListItemDetail key={index} {...flightDetaiL} />
            ))}
          </div>
        </div>
        <div className="container mt-4 ">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <FaArrowLeft className="h1  text-light text-center fa-left" />
              </div>
            </div>
            <div className="col-md-6 ">
              <h1 className="text-light marigin-ret ">Retorno</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
