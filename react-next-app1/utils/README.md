# Utils Folder

This folder contains reusable utilities and common functions used across the application.

## Files

### `weather.ts`
Contains weather-related utilities:
- `THEME`: Color scheme constants for the application
- `COORD`: Location coordinates (currently set to Pune, Maharashtra)
- `fetchWeather()`: Function to fetch weather data from Open-Meteo API
- `processHourlyData()`: Function to process and filter hourly weather data

### `types.ts`
TypeScript type definitions:
- `WeatherData`: Interface for weather API response
- `HourlyData`: Interface for processed hourly weather data

## Usage

### Weather Utilities
```typescript
import { THEME, COORD, fetchWeather, processHourlyData } from '../utils/weather';
import type { WeatherData, HourlyData } from '../utils/types';

// Use in components
const data = await fetchWeather();
const hourlyData = processHourlyData(data);
```

## Configuration

### Weather Location
To change the location, update the `COORD` object in `weather.ts`:
```typescript
export const COORD = { lat: 18.5204, lon: 73.8567, tz: "Asia/Kolkata" };
```
