import Link from "next/link";

const section: React.CSSProperties = {
  background: "rgba(15, 24, 41, 0.9)",
  border: "1px solid #1a2744",
  borderRadius: 14,
  padding: "20px 22px",
};

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px 16px",
        background: "linear-gradient(160deg, #0a0f1e 0%, #111b34 55%, #0c152b 100%)",
        color: "#e2e8f0",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <header style={{ marginBottom: 20 }}>
          <p style={{ color: "#00d4ff", margin: 0, fontWeight: 700, letterSpacing: 0.5 }}>
            ABOUT THIS PROJECT
          </p>
          <h1 style={{ margin: "8px 0 10px", fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}>
            IoT Weather Monitoring Dashboard
          </h1>
          <p style={{ color: "#94a3b8", margin: 0, maxWidth: 800, lineHeight: 1.7 }}>
            This project is a Next.js application that monitors weather conditions and visualizes
            live readings in an IoT-style dashboard. It combines current metrics, hourly trends,
            and local device management in one interface.
          </p>
        </header>

        <section style={{ ...section, marginBottom: 14 }}>
          <h2 style={{ marginTop: 0, fontSize: 22 }}>What It Does</h2>
          <ul style={{ marginBottom: 0, lineHeight: 1.8, color: "#cbd5e1" }}>
            <li>Fetches real-time weather data from Open-Meteo.</li>
            <li>Shows key KPIs like temperature, humidity, wind speed, and feels-like temperature.</li>
            <li>Plots hourly trends with charts for quick visual analysis.</li>
            <li>Supports device listing and simple add/manage workflows with localStorage.</li>
          </ul>
        </section>

        <section style={{ ...section, marginBottom: 14 }}>
          <h2 style={{ marginTop: 0, fontSize: 22 }}>Tech Stack</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Next.js App Router",
              "React + TypeScript",
              "Recharts",
              "Tailwind CSS",
              "Open-Meteo API",
              "LocalStorage",
            ].map((item) => (
              <span
                key={item}
                style={{
                  border: "1px solid #27406e",
                  background: "#0b1428",
                  color: "#bcd2f1",
                  padding: "6px 10px",
                  borderRadius: 999,
                  fontSize: 14,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section style={section}>
          <h2 style={{ marginTop: 0, fontSize: 22 }}>Navigation</h2>
          <p style={{ color: "#cbd5e1", marginTop: 6 }}>
            Use these links to jump directly into the app modules.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Link href="/" style={navBtn}>Home</Link>
            <Link href="/dashboard" style={navBtn}>Dashboard</Link>
            <Link href="/devices" style={navBtn}>Devices</Link>
            <Link href="/devices/add" style={navBtn}>Add Device</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

const navBtn: React.CSSProperties = {
  textDecoration: "none",
  color: "#e5efff",
  border: "1px solid #365892",
  background: "#12213d",
  padding: "10px 14px",
  borderRadius: 10,
  fontWeight: 600,
};
