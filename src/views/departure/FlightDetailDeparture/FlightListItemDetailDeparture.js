import moment from "moment";
import "moment/locale/es";
import { FaPlane } from "react-icons/fa";
export default function FlightListItemDetail({ duration, segments }) {
  console.log(duration);

  return (
    <>
      {segments?.map((segment, index) => {
        const minutes = moment.duration(duration).minutes();
        const hours = moment.duration(duration).hours();
        moment.locale("es");
        const arrival = moment(segment.arrival.at).format("LLLL");
        const departure = moment(segment.departure.at).format(" LLLL");
        console.log(`departure: ${departure}`);

        const durationHoursDeparture = moment(segment.departure.at).hour();
        const durationHoursArrival = moment(segment.arrival.at).hour();
        const durationMinutesDeparture = moment(segment.departure.at).minute();
        const durationMinutesArrival = moment(segment.arrival.at).minute();
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
          <div className="row" key={index}>
            <div className="row mt-5 m-5">
              <div className="col-md-12 col-sm-12 ">
                <div className="card card-block p-3">
                  <div className="row p-lg-5">
                    <div className="col-9">
                      <h5 className="text-right mb-4">
                        Duracion: {hours}Hrs {minutes}Mins
                      </h5>
                      <div className="row">
                        <div className="col">
                          <h2 className="   ">{segment.arrival.iataCode}</h2>
                          <h5 className="   ">{departure}</h5>
                          <h5>Terminal: {segment.arrival.terminal}</h5>
                        </div>
                        <div className="col text-center  primary ">
                          <FaPlane className="h1 text-primary plane-icon" />
                        </div>
                        <div className="col">
                          <h2 className="  ">{segment.departure.iataCode}</h2>
                          <h5 className="   ">{arrival}</h5>
                          <h5>Terminal: {segment.departure.terminal}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <h2 className=" mt-5 mb-1 mr-2 text-center ">Vuelo:</h2>
                      <h2 className=" mb-3 mr-2 text-center">
                        {segment.aircraft.code}
                      </h2>
                      <h3 className=" mb-3 mr-2 text-center">
                        {totalHoursRounded}hrs {totalMinutes2}mins
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
