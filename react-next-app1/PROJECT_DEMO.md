# IoT Weather Monitoring Dashboard - Project Demo Document

## 1. Project Title
IoT Weather Monitoring Dashboard using Next.js

## 2. Project Overview
This project is a web-based IoT dashboard that displays live weather conditions and device status in a single interface. It is designed to simulate a monitoring panel where users can track environment metrics and manage IoT devices.

The app fetches weather data from the Open-Meteo API and presents it through KPI cards and charts. It also includes a sidebar-based navigation flow with account actions and alert feedback.

## 3. Problem Statement
In real-world IoT systems, data is often spread across different tools. This project solves that by providing:
- Real-time weather visibility
- Quick trend analysis with charts
- Basic device management in one dashboard

## 4. Objectives
- Build a responsive dashboard UI with Next.js App Router
- Integrate live weather API data
- Visualize hourly trends using charts
- Add device management features (add/manage)
- Provide user-friendly sidebar interactions with alerts

## 5. Tech Stack
- Next.js 16 (App Router)
- React + TypeScript
- Recharts (data visualization)
- Tailwind CSS + Bootstrap utility classes
- LocalStorage (device persistence)
- Open-Meteo API (weather data source)

## 6. Key Features
1. Dashboard View
- Shows current temperature, humidity, wind speed, and feels-like temperature
- Displays chart-based weather trends

2. Device Management
- Add new devices
- View/manage devices list
- Toggle online/offline status

3. Sidebar Navigation
- Section-wise expandable navigation
- Account and Sign out interactions show inline warning/danger alerts
- Prevents unwanted navigation to unavailable account routes

4. About Page
- Explains project purpose, modules, and tech stack
- Works as presentation-friendly documentation inside the app

## 7. Application Flow (Demo Script)
Use this exact flow while presenting:

1. Open Home Page
- Introduce project goal: centralized monitoring dashboard

2. Go to Dashboard
- Explain KPI cards and real-time weather data
- Show trend chart and mention hourly processing

3. Go to Devices
- Show list of registered devices
- Toggle device status

4. Go to Add Device
- Add a sample device
- Return to device list and confirm update

5. Use Sidebar > Account
- Click Account section -> warning alert appears
- Click Sign out -> danger alert appears
- Explain this avoids 404 and gives clear feedback

6. Open About Page
- Summarize project architecture and future scope

## 8. Folder Highlights
- app/: routes and page components
- components/: reusable UI components (Sidebar, Navbar)
- utils/: API fetch logic, shared types, helper functions

## 9. Challenges Faced and Fixes
1. Hydration mismatch warning
- Cause: server/client HTML differences
- Fix: stable rendering behavior and layout adjustments

2. CSS build error in globals
- Cause: invalid Tailwind CSS config syntax in stylesheet
- Fix: reverted to valid CSS/Tailwind-compatible structure

3. 404 on account/signout
- Cause: navigation to routes not implemented
- Fix: intercept click and show inline Bootstrap-style alerts

## 10. Future Enhancements
- Add authentication for Account/Profile/Settings routes
- Connect devices to backend database
- Add role-based access (Admin/User)
- Export reports (PDF/CSV)
- Add notifications and threshold alerts

## 11. Conclusion
This project demonstrates a practical IoT monitoring front-end using modern web technologies. It combines API integration, chart visualization, and interactive UI behavior in a clean App Router structure. The current version is a strong foundation that can be extended into a production-level monitoring platform.

## 12. Quick Run Commands
```bash
npm install
npm run dev
npm run build
```
