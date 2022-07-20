import React, { useState, useContext } from "react";
import FlightContext from "../../context/flights";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Form, Formik } from "formik";

import { useSpring, animated } from "react-spring";
import "../InitParalal/paralal.css";

import moment from "moment";

let defaultDate = new Date();

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 2 + 20}px,${y / 2 - 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 50 - 1000}px,${y / 10 - 700}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 100 - 10}px,${y / 20 - 10}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 1 + 20}px,${y / 2 - 10}px,0)`;

// }
export default function FormDeparture() {
  // const formik = useFormikContext();

  const [formSend, setFormSend] = useState(false);

  const [propss, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState("");
  const [childrens, setChildrens] = useState("");

  const [fechaSeleccionada, setFechaSeleccionada] = useState(defaultDate);
  const { getFlighTOnlydeparture, isLoading } = useContext(FlightContext);

  const [failure, setFailure] = useState(false);
  const [failureOrigin, setFailureOrigin] = useState(false);
  const [failureDestination, setFailureDestination] = useState(false);
  const [failureDepartureDate, setFailureDepartureDate] = useState(false);
  const [failureMessageOrigin, setFailureMessageOrigin] = useState("");
  const [failureMessageDestination, setFailureMessageDestination] =
    useState("");
  const [failureMessageDepartureDate, setFailureMessageDepartureDate] =
    useState("");

  const [failureMessage, setFailureMessage] = useState("");

  const HandleSubmit = (e, valores) => {
    console.log(valores);
    e.preventDefault();
    setFormSend(true);
    console.log(valores);
    setTimeout(() => setFormSend(false), 5000);
    console.log("Formulario enviado");

    const origin = e.target.origin.value;
    const destination = e.target.destination.value;
    const adults = e.target.adults.value;
    let childrens = e.target.childrens.value;

    if (!origin.trim()) {
      setFailureOrigin(true);
      setFailureMessageOrigin("Origen es obligatorio");
      setTimeout(() => setFailureOrigin(false), 5000);
      setTimeout(() => setFailureMessageOrigin(false), 5000);
      return;
    }
    if (origin === destination) {
      setFailureOrigin(true);
      setFailureMessageOrigin("Origen y destino deben ser diferentes");
      setTimeout(() => setFailureOrigin(false), 5000);
      setTimeout(() => setFailureMessageOrigin(false), 5000);
      return;
    }

    if (!destination.trim()) {
      setFailureDestination(true);
      setFailureMessageDestination("Destino es obligatorio");
      setTimeout(() => setFailureDestination(false), 5000);
      setTimeout(() => setFailureMessageDestination(false), 5000);
      return;
    }

    if (!departureDate.trim()) {
      setFailureDepartureDate(true);
      setFailureMessageDepartureDate("Fecha de Salida es obligatorio");
      setTimeout(() => setFailureDepartureDate(false), 5000);
      setTimeout(() => setFailureMessageDepartureDate(false), 5000);

      return;
    }
    const compareDate = moment(new Date()).format("YYYY-MM-DD");
    if (compareDate >= departureDate) {
      setFailureDepartureDate(true);
      setFailureMessageDepartureDate(
        "La fecha de salida no puede ser menor a la actual"
      );
      setTimeout(() => setFailureDepartureDate(false), 5000);
      setTimeout(() => setFailureMessageDepartureDate(false), 5000);
      return;
    }

    if (!adults.trim()) {
      setFailure(true);
      setFailureMessage("Numero de adultos es obligatorio");
      setTimeout(() => setFailure(false), 5000);
      setTimeout(() => setFailureMessage(false), 5000);
      return;
    }
    if (!childrens.trim()) {
      childrens = "0";
    }

    console.log(`Origin: ${origin}`);
    // console.log(`ReturnDate: ${returnDate}`);
    console.log(`Destination: ${destination}`);
    console.log(`DepartureDate: ${departureDate}`);
    console.log(`Adults: ${adults}`);
    console.log(`Children: ${childrens}`);
    navigate("/list");
    getFlighTOnlydeparture(
      origin,
      destination,
      departureDate,
      adults,
      childrens
    ).catch(null);
    navigate("/list/departure");
  };

  // const [title, setTitle] = useState("");
  // const [leyend, setLeyend] = useState("");
  // const [errorTitle, setErrorTitle] = useState("");

  return (
    <>
      <div className="container-full-body">
        <div
          className="container"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <animated.div
            className="card8"
            style={{ transform: propss.xy.interpolate(trans8) }}
          />

          <animated.div
            className="card7"
            style={{ transform: propss.xy.interpolate(trans7) }}
          />
          <animated.div
            className="card6"
            style={{ transform: propss.xy.interpolate(trans6) }}
          />
          <animated.div
            className="card5"
            style={{ transform: propss.xy.interpolate(trans5) }}
          />
          <animated.div
            className="card4"
            style={{ transform: propss.xy.interpolate(trans4) }}
          />
          <animated.div
            className="card3"
            style={{ transform: propss.xy.interpolate(trans3) }}
          />
          <animated.div
            className="card2"
            style={{ transform: propss.xy.interpolate(trans2) }}
          />
          <animated.div
            className="card1"
            style={{ transform: propss.xy.interpolate(trans1) }}
          />

          <div className="container container-cards ">
            <div className="card  card-init">
              <div className="card">
                <h2 className="text-center pt-2">Busca Vuelos de Ida</h2>
                <div className="card-content">
                  <Formik
                    // initialValues={{
                    //   origin: "BOS",
                    //   destination: "AL",
                    //   departureDate: "",
                    //   adults: "1",
                    //   childrens: "1",
                    // }}
                    onSubmit={HandleSubmit}
                  >
                    {({ values, handleChange, handleSubmit, handleBlur }) => (
                      <Form onSubmit={HandleSubmit} className="formulario">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <Autocomplete
                                id="origin"
                                sx={{ width: 300 }}
                                options={codeIsoAirport}
                                autoHighlight
                                onChange={(ev) => setOrigin(ev.target.value)}
                                getOptionLabel={(option) => option.code}
                                renderOption={(props, option) => (
                                  <Box
                                    component="li"
                                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                    {...props}
                                  >
                                    {option.label}
                                  </Box>
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    error={failureOrigin}
                                    helperText={failureMessageOrigin}
                                    {...params}
                                    label="Origen"
                                    inputProps={{
                                      ...params.inputProps,
                                      autoComplete: "new-password", // disable autocomplete and autofill
                                    }}
                                  />
                                )}
                              />
                            </div>

                            <div className="col">
                              <Autocomplete
                                // error={failure}
                                // helperText={failureMessage}
                                id="destination"
                                sx={{ width: 300 }}
                                options={codeIsoAirport}
                                autoHighlight
                                onChange={(ev) => {
                                  setDestination(ev.target.value);
                                }}
                                getOptionLabel={(option) => option.code}
                                renderOption={(props, option) => (
                                  <Box component="li" {...props}>
                                    {option.label} ({option.code})
                                  </Box>
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    helperText={failureMessageDestination}
                                    error={failureDestination}
                                    variant="filled"
                                    {...params}
                                    label="Destino"
                                    inputProps={{
                                      ...params.inputProps,
                                      autoComplete: "Hola", // disable autocomplete and autofill
                                    }}
                                  />
                                )}
                              />
                            </div>

                            <div className="col">
                              <TextField
                                helperText={failureMessageDepartureDate}
                                error={failureDepartureDate}
                                sx={{ width: 300 }}
                                id="departureDate"
                                label="Salida"
                                onChange={(ev) =>
                                  setDepartureDate(ev.target.value)
                                }
                                value={fechaSeleccionada
                                  .toISOString()
                                  .slice(0, 10)}
                                type="date"
                                defaultValue={defaultDate
                                  .toISOString()
                                  .slice(0, 10)}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <div className="col-6">
                              <Autocomplete
                                id="adults"
                                sx={{ width: 300 }}
                                options={numbersPassengers}
                                autoHighlight
                                onChange={(ev) => setAdults(ev.target.value)}
                                getOptionLabel={(option) => option.value}
                                renderOption={(props, option) => (
                                  <Box component="li" {...props}>
                                    {option.label}
                                  </Box>
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    error={failure}
                                    helperText={failureMessage}
                                    {...params}
                                    label="Adultos"
                                    inputProps={{
                                      ...params.inputProps,
                                      autoComplete: "Hola", // disable autocomplete and autofill
                                    }}
                                  />
                                )}
                              />
                            </div>
                            <div className="col-6">
                              <Autocomplete
                                id="childrens"
                                sx={{ width: 300 }}
                                options={numbersPassengers}
                                autoHighlight
                                onChange={(ev) => setChildrens(ev.target.value)}
                                getOptionLabel={(option) => option.value}
                                renderOption={(props, option) => (
                                  <Box component="li" {...props}>
                                    {option.label}
                                  </Box>
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label="Niños"
                                    inputProps={{
                                      ...params.inputProps,
                                      autoComplete: "Hola", // disable autocomplete and autofill
                                    }}
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          // onClick={navigate}
                          type="submit"
                          className="btn btn-primary"
                        >
                          Buscar Vuelos
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const numbersPassengers = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];

export const codeIsoAirport = [
  { code: "ATL", label: "Atlanta" },
  { code: "BOS", label: "Boston" },
  { code: "CHI", label: "Chicago" },
  { code: "DAL", label: "Dallas" },
  { code: "DEN", label: "Denver" },
  { code: "LAX", label: "Los Angeles" },
  { code: "NYC", label: "New York City" },
  { code: "PHX", label: "Phoenix" },
  { code: "SAN", label: "San Diego" },
  { code: "SEA", label: "Seattle" },
  { code: "WAS", label: "Washington" },
];
