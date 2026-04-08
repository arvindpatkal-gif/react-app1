"use client";

import { useEffect, useState } from "react";
import { fetchWeather } from "../utils/weather";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadWeather() {
      try {
        const data = await fetchWeather();
        setWeather(data.current);
        setData(data);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    }

    loadWeather();
  }, []);

  if (!weather) return <p style={{ padding: 50, color: "white" }}>Loading...</p>;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        
        <div style={styles.left}>
          <h2 style={{ marginBottom: 10 }}>Pune, MH</h2>
          <h1 style={styles.temp}>{weather.temperature_2m}°</h1>
          <p>Humidity: {weather.relative_humidity_2m}%</p>
          <p>Wind: {weather.wind_speed_10m} km/h</p>
          <p>Latitude: {data.latitude}</p>
          <p>Longitude: {data.longitude}</p>
        </div>

        <div style={styles.right}>
          <h2>Weather Forecast</h2>
          <h1 style={{ fontWeight: 300 }}>Cloudy ☁️</h1>
          <p style={{ opacity: 0.7 }}>Live Data</p>

          <div style={styles.graph}></div>
        </div>

      </div>
    </div>
  );
}

const styles: any = {
  page: {
    height: "100vh",
    background:
      "linear-gradient(to right, #0f172a, #1e293b)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "sans-serif",
  },

  card: {
    width: "900px",
    height: "400px",
    display: "flex",
    borderRadius: "20px",
    overflow: "hidden",
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  left: {
    width: "35%",
    padding: "30px",
    borderRight: "1px solid rgba(255,255,255,0.1)",
  },

  right: {
    flex: 1,
    padding: "30px",
  },

  temp: {
    fontSize: "80px",
    fontWeight: "bold",
  },

  graph: {
    marginTop: "40px",
    height: "100px",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, transparent, #38bdf8, transparent)",
    opacity: 0.5,
  },
};