import React, { useEffect, useState } from "react";

export default function WeatherCard() {
  const [city, setCity] = useState("Gujranwala");
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a312b2892d01da2ffff6a83d3bd0f9f`;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const apiData = await fetch(baseUrl);
        const res = await apiData.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
