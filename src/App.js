import "./App.css";
import Routes from "./routes";
import  FlightProvider  from "./context/flights/Provider";
function App() {
  return (
    <FlightProvider>
      <Routes />
    </FlightProvider>
  );
}

export default App;
