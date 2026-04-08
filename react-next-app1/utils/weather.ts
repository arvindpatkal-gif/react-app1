import { WeatherData, HourlyData } from './types';

// 🎨 Theme
export const THEME = {
  bg: "#0a0f1e",
  panel: "#0f1829",
  border: "#1a2744",
  accent: "#00d4ff",
  green: "#00ff9d",
  orange: "#ff7d3b",
  purple: "#a855f7",
  yellow: "#fbbf24",
  text: "#e2e8f0",
  muted: "#64748b",
};

// Default location used for weather API requests.
export const COORD = { lat: 18.5204, lon: 73.8567, tz: "Asia/Kolkata" };

export async function fetchWeather(): Promise<WeatherData> {
  // Request current conditions + today's hourly data in the configured timezone.
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${COORD.lat}&longitude=${COORD.lon}` +
    `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature` +
    `&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m` +
    `&timezone=${encodeURIComponent(COORD.tz)}&forecast_days=1`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("API failed");
  return res.json();
}

export function processHourlyData(data: WeatherData, hours: number = 12): HourlyData[] {
  const now = new Date();

  return data.hourly.time
    .map((t: string, i: number) => ({
      time: t.slice(11, 16),
      temp: data.hourly.temperature_2m[i],
      humidity: data.hourly.relative_humidity_2m[i],
      wind: data.hourly.wind_speed_10m[i],
      _ts: new Date(t),
    }))
    .filter((r: any) => r._ts >= now)
    .slice(0, hours);
}