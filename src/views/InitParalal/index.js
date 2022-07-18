import React from "react";
import { Link } from "react-router-dom";

import { useSpring, animated } from "react-spring";
import "./paralal.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 2 + 20}px,${y / 2 - 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 50 - 1000}px,${y / 10 - 700}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 100 - 10}px,${y / 20 - 10}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 1 + 20}px,${y / 2 - 10}px,0)`;

export default function InitParalal() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <>
    <div className="container-full-body">
    <div
      className="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="card8"
        style={{ transform: props.xy.interpolate(trans8) }}
      />

      <animated.div
        className="card7"
        style={{ transform: props.xy.interpolate(trans7) }}
      />
      <animated.div
        className="card6"
        style={{ transform: props.xy.interpolate(trans6) }}
      />
      <animated.div
        className="card5"
        style={{ transform: props.xy.interpolate(trans5) }}
      />
      <animated.div
        className="card4"
        style={{ transform: props.xy.interpolate(trans4) }}
      />
      <animated.div
        className="card3"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className="card2"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />

      <div className="container container-cards ">
        <div className="row">
          <div className="col">
            <div className="card  card-init">
              <div className="card-image">
                <img
                  className=" w-100 h-25"
                  src="https://yderfre.xyz/assets/paral-react/ida3-min.jpg"
                />
                <h2 className="text-center pt-2">Busca Vuelos de Ida</h2>
                <div className="card-content">
                  <p className="text-center">
                    Vuelos de ida selecciona fecha y numero de pasajeros
                  </p>
                </div>
                <div className="card-action text-center pb-3">
                <Link className="btn btn-secondary px-5" to={`/search/departure`}>
                    Buscar
                  </Link>
                </div>
           
              </div>
            </div>
          </div>
          {/* <div className="w-25"></div> */}
          <div className="col">
            <div className="card  card-init">
              <h1 className="text-center pt-2">Rolling the world</h1>
              <p className="text-center">
                En un Solo Lugar Busca Increibles Ofertas de Vuelos
              </p>
              <p className="text-center">Destinos a todo el mundo</p>
            </div>
          </div>
          {/* <div className="w-25"></div> */}
          <div className="col mr-10">
            <div className="card  card-init">
              <div className="card-image">
                <img
                  className=" w-100 h-25"
                  src="https://yderfre.xyz/assets/paral-react/ida-regreso3-min.jpg"
                />
                <h3 className="text-center pt-2">
                  Busca Vuelos de Ida y regreso
                </h3>
                <div className="card-content">
                  <p className="text-center">
                    Vuelos de ida-regreso: selecciona fecha y numero de
                    pasajeros
                  </p>
                </div>
                <div className="card-action text-center pb-3">
                  <Link className="btn btn-secondary px-5" to={`/search/departure/return`}>
                    Buscar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
