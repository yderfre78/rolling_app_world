import moment from "moment";

import { FaPlane } from "react-icons/fa";
export default function FlightListItemDetail({ index, duration, segments }) {
  console.log(duration);
  
  const minutes = moment.duration(duration).minutes();
  const hours = moment.duration(duration).hours();

  const arrival = moment(segments[0].arrival.at).format("LLLL");
  const departure = moment(segments[0].departure.at).format(" LLLL");

  const durationHoursDeparture = moment(segments[0].departure.at).hour();
  const durationHoursArrival = moment(segments[0].arrival.at).hour();
  const durationMinutesDeparture = moment(segments[0].departure.at).minute();
  const durationMinutesArrival = moment(segments[0].arrival.at).minute();
  moment.locale("es");
  const hoursTotal = durationHoursArrival - durationHoursDeparture;
  const hourstMultiplier = hoursTotal * 60;
  const minutesTotal = durationMinutesArrival - durationMinutesDeparture;

  const totalMinutes = hourstMultiplier + minutesTotal;

  const totalHours = totalMinutes / 60;
  const totalHoursRounded = Math.round(totalHours);
  const totalMinutes2 = totalMinutes % 60;
  console.log(`Horas: ${totalHoursRounded} Minutos: ${totalMinutes2}`);

 

  return (
    <>
      
        <div className="row mt-5">
          <div className="col-md-12 col-sm-12">
            <div className="card card-block p-3">
              <div className="row">
                <div className="col">
                  <h5 className="text-right mb-4">
                    Duracion: {hours}Hrs {minutes}Mins
                  </h5>
                  <div className="row">
                    <div className="col">
                      <h2 className="   ">{segments[0].arrival.iataCode}</h2>
                      <h5 className="   ">{departure}</h5>
                      <h5>Terminal: {segments[0].arrival.terminal}</h5>
                    </div>
                    <div className="col ">
                      <FaPlane className="h1 " />
                    </div>
                    <div className="col">
                      <h2 className="  ">{segments[0].departure.iataCode}</h2>
                      <h5 className="   ">{arrival}</h5>
                      <h5>Terminal: {segments[0].departure.terminal}</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h2 className=" mt-5 mb-1 mr-2 text-center ">Vuelo:</h2>
                  <h2 className=" mb-3 mr-2 text-center">
                    {segments[0].aircraft.code}
                  </h2>
                  <h3 className=" mb-3 mr-2 text-center">{totalHoursRounded}hrs {totalMinutes2}mins</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
