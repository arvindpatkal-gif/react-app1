"use client";

import { useEffect, useState, useCallback } from "react";
import {
  LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { THEME, COORD, fetchWeather, processHourlyData } from "../../utils/weather";

const C = THEME;

function StatusDot({ online }: { online: boolean }) {
  return (
    <span style={{ color: online ? C.green : "#ef4444" }}>
      ● {online ? "Online" : "Offline"}
    </span>
  );
}

function KpiCard({ label, value, unit }: any) {
  return (
    <div style={{
      background: C.panel,
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      padding: 15
    }}>
      <div style={{ fontSize: 12, color: C.muted }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: "bold" }}>
        {value ?? "--"} {unit}
      </div>
    </div>
  );
}

function DeviceRow({ name, location, status }: any) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      background: "#111827",
      padding: 10,
      borderRadius: 6,
      marginBottom: 5
    }}>
      <div>
        <div>{name}</div>
        <small style={{ color: C.muted }}>{location}</small>
      </div>
      <StatusDot online={status} />
    </div>
  );
}

export default function Dashboard() {
  const [current, setCurrent] = useState<any>(null);
  const [hourly, setHourly] = useState<any[]>([]);
  const [devices, setDevices] = useState<any[]>([]);
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  const load = useCallback(async () => {
    try {
      const data = await fetchWeather();
      setCurrent(data.current);

      const rows = processHourlyData(data, 12);
      setHourly(rows);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, [load]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("devices") || "[]");
      setDevices(Array.isArray(stored) ? stored : []);
    } catch {
      setDevices([]);
    }
  }, []);

  if (loading || !hydrated) return <div style={{ padding: 50 }}>Loading...</div>;

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <div style={{
        padding: 20,
        background: C.bg,
        color: C.text,
        minHeight: "100vh"
      }}>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>IoT Dashboard</h2>
          <div>{time}</div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 10,
          marginTop: 20
        }}>
          <KpiCard label="Temperature" value={current?.temperature_2m} unit="°C" />
          <KpiCard label="Humidity" value={current?.relative_humidity_2m} unit="%" />
          <KpiCard label="Wind" value={current?.wind_speed_10m} unit="km/h" />
          <KpiCard label="Feels Like" value={current?.apparent_temperature} unit="°C" />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 30
        }}>

          <div style={{ background: C.panel, padding: 10 }}>
            <h6>Temperature Trend</h6>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={hourly}>
                <CartesianGrid stroke="#333" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area dataKey="temp" stroke={C.orange} fill={C.orange} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div style={{ background: C.panel, padding: 10 }}>
            <h6>Humidity</h6>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={hourly}>
                <CartesianGrid stroke="#333" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line dataKey="humidity" stroke={C.accent} />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

        <div style={{ marginTop: 30 }}>
          <h5>Devices</h5>

          {devices.length === 0 && <p>No devices added</p>}

          {devices.map((d) => (
            <DeviceRow
              key={d.id ?? Math.random()}
              name={d.name}
              location={d.location}
              status={d.status === "Online"}
            />
          ))}
        </div>

      </div>
    </div>
  );
}