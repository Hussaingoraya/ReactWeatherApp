// import React, { useEffect, useState } from "react";

// export default function WeatherCard() {
//   const [city, setCity] = useState(null);
//   const [search, setSearch] = useState("Murree");
//   const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3a312b2892d01da2ffff6a83d3bd0f9f`;

//   useEffect(() => {
//     const fetchApi = async () => {
//       try {
//         const apiData = await fetch(baseUrl);
//         const res = await apiData.json();
//         console.log(res);
//         setCity(res);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchApi();
//   }, [search]);

//   return (
//     <>
//       <div className="card mb-3">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img src=""className="img-fluid rounded-start" alt="..." />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <input
//                 type="search"
//                 value={search}
//                 onChange={(event) => {
//                   setSearch(event.target.value);
//                 }}
//               />
//               <h5 className="card-title">{search}</h5>

//               {
//                 !city ? (
//                   <h1>No DATA fOUND</h1>
//                 ) : (
//                   <>
//                   <p className="card-text">
//                  {city.weather[0].description}
//                 </p>
//                 <p className="card-text">
//                   <small className="text-body-secondary">
//                   Humidity: {city.main.humidity}%
//                   </small>
//                 </p>
//                 </>

//                 )
//               }

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import "./Card.css";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";

export default function WeatherCard() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Murree");
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3a312b2892d01da2ffff6a83d3bd0f9f&units=metric`;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const apiData = await fetch(baseUrl);
        const res = await apiData.json();
        console.log(res);
        setCity(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            {city && city.weather && city.weather[0] && (
              <img
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}
                className="img-fluid rounded-start"
                alt={city.weather[0].description}
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <input
                className="search form-control"
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <div className="location-icon">
                <div>
                  {" "}
                  <WhereToVoteIcon style={{ marginRight: "8px" }} />
                </div>
                <div>
                  <h2 className="card-title mt-2"> {search}</h2>
                </div>
              </div>
            </div>
            <div>
              {!city || city.cod !== 200 ? (
                <h1>No DATA FOUND</h1>
              ) : (
                <>
                  <p className="card-text">
                    Condition: {city.weather[0].description}
                  </p>

                  <p className="card-text">
                    <h5 className="text-body-secondary">
                      Temp: {city.main.temp}°C
                    </h5>
                  </p>
                  <p className="card-text">
                    <h5 className="text-body-secondary">
                      Humidity: {city.main.humidity}%
                    </h5>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
