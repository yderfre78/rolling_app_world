import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import FlightContext from "../../context/flights";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Form, Formik } from "formik";
let defaultDate = new Date();

export default function FormFull() {
  // const { origin, destination, departureDate, returnDate, adults, children  } = useParams();
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState("");
  const [childrens, setChildrens] = useState("");
  const [fechaSeleccionada,] = useState(defaultDate);

  const { getFlightFull, flightFull, isLoading } = useContext(FlightContext);

  const handleChange = (event) => {
    setAdults(event.target.value);
  };
  const handleChangeChild = (event) => {
    setChildrens(event.target.value);
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const origin = e.target.origin.value;
    const destination = e.target.destination.value;

    console.log(`Origin: ${origin}`);
    console.log(`ReturnDate: ${returnDate}`);
    console.log(`Destination: ${destination}`);
    console.log(`DepartureDate: ${departureDate}`);
    console.log(`Adults: ${adults}`);
    console.log(`Children: ${childrens}`);
    
    getFlightFull(
      origin,
      destination,
      departureDate,
      returnDate,
      adults,
      childrens
    ).catch(null);
    navigate("/list");
  };
  //   useEffect(() => {
  //    .catch(null);
  //   }, []);

  return (
    <>
      <div spacing={1} sx={{ width: 300 }} className="container mt-5">
        <Formik>
          <Form onSubmit={HandleSubmit}>
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
                      {option.label} ({option.code})
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Origen"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />

                <TextField
                  sx={{ width: 300 }}
                  id="ReturnDate"
                  label="Regreso"
                  type="date"
                  onChange={(ev) => setReturnDate(ev.target.value)}
                  value={fechaSeleccionada.toISOString().slice(0, 10)}
                  defaultValue={defaultDate.toISOString().slice(0, 16)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="col">
                <Autocomplete
                  id="destination"
                  sx={{ width: 300 }}
                  options={codeIsoAirport}
                  autoHighlight
                  onChange={(ev) => setDestination(ev.target.value)}
                  getOptionLabel={(option) => option.code}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      {option.label} ({option.code})
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Destino"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "Hola", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />

                <Select
                  sx={{ width: 300 }}
                  labelId="adults"
                  id="adults"
                  value={adults}
                  label="Adultos"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </div>
              <div className="col">
                <TextField
                  sx={{ width: 300 }}
                  id="departureDate"
                  label="Salida"
                  onChange={(ev) => setDepartureDate(ev.target.value)}
                  value={fechaSeleccionada.toISOString().slice(0, 10)}
                  type="date"
                  defaultValue={defaultDate.toISOString().slice(0, 10)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <Select
                  sx={{ width: 300 }}
                  labelId="childs"
                  id="childs"
                  value={childrens}
                  label="niños"
                  onChange={handleChangeChild}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </div>
            </div>
            <button
              onClick={navigate}
              type="submit"
              className="btn btn-primary"
            >
              Buscar Vuelos
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
const codeIsoAirport = [
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
