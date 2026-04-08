# Utils Folder

This folder contains reusable utilities and common functions used across the application.

## Files

### `weather.ts`
Contains weather-related utilities:
- `THEME`: Color scheme constants for the application
- `COORD`: Location coordinates (currently set to Pune, Maharashtra)
- `fetchWeather()`: Function to fetch weather data from Open-Meteo API
- `processHourlyData()`: Function to process and filter hourly weather data

### `background.ts`
Contains background styling utilities:
- `BACKGROUND_PRESETS`: Predefined background configurations (weather, dark, nature, city)
- `getBackgroundStyles()`: Function to generate CSS background styles
- `Background`: React component for easy background application
- `getBackgroundClasses()`: Utility for Tailwind background classes

### `types.ts`
TypeScript type definitions:
- `WeatherData`: Interface for weather API response
- `HourlyData`: Interface for processed hourly weather data
- `BackgroundOptions`: Interface for background configuration

## Usage

### Weather Utilities
```typescript
import { THEME, COORD, fetchWeather, processHourlyData } from '../utils/weather';
import type { WeatherData, HourlyData } from '../utils/types';

// Use in components
const data = await fetchWeather();
const hourlyData = processHourlyData(data);
```

### Background Utilities
```typescript
import { Background, BACKGROUND_PRESETS } from '../utils/background';

// Using preset
<Background preset="weather">
  <YourContent />
</Background>

// Using custom options
<Background customOptions={BACKGROUND_PRESETS.nature}>
  <YourContent />
</Background>

// Using inline styles
const styles = getBackgroundStyles(BACKGROUND_PRESETS.city);
```

## Configuration

### Weather Location
To change the location, update the `COORD` object in `weather.ts`:
```typescript
export const COORD = { lat: 18.5204, lon: 73.8567, tz: "Asia/Kolkata" };
```

### Background Images
To add background images, place them in the `public/images/` folder and update the presets in `background.ts`:
```typescript
nature: {
  type: 'image',
  image: {
    url: '/images/your-image.jpg',
    position: 'center',
    size: 'cover'
  }
}
```