// Weather utilities for the application
// Contains common weather-related functions, constants, and types

export interface WeatherData {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    apparent_temperature: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    wind_speed_10m: number[];
  };
}

export interface HourlyData {
  time: string;
  temp: number;
  humidity: number;
  wind: number;
  _ts: Date;
}

export interface BackgroundOptions {
  type: 'gradient' | 'image' | 'solid';
  gradient?: {
    colors: string[];
    direction?: 'to right' | 'to bottom' | 'to left' | 'to top' | '45deg' | '135deg';
  };
  image?: {
    url: string;
    position?: string;
    size?: string;
    repeat?: string;
    opacity?: number;
  };
  solid?: string;
  overlay?: {
    color: string;
    opacity: number;
  };
}