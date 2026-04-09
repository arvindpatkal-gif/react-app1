"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const styles: any = {
  page: {
    height: "100vh",
    background:
      "linear-gradient(to right, #0f172a, #1e293b)",
    color: "white",
    fontFamily: "sans-serif",
  },
};

export default function AddDevice() {
  const router = useRouter();

  const [device, setDevice] = useState({
    name: "",
    location: "",
    type: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Saved:", device);
    const existing = JSON.parse(localStorage.getItem("devices") || "[]");

    localStorage.setItem(
      "devices",
      JSON.stringify([...existing, device])
    );

    router.push("/devices");
  };

  return (
    <div style={styles.page}>
      <h2 className="mb-2 ml-4 text-white">Add Device</h2>
      <div className="card m-4 p-4">

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Device Name"
              value={device.name}
              onChange={(e) =>
                setDevice({ ...device, name: e.target.value })
              }
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Location"
              value={device.location}
              onChange={(e) =>
                setDevice({ ...device, location: e.target.value })
              }
            />
          </div>

          <div className="col-md-6">
            <select
              className="form-select"
              value={device.type}
              onChange={(e) =>
                setDevice({ ...device, type: e.target.value })
              }
            >
              <option value="">Select Type</option>
              <option value="Temperature">Temperature</option>
              <option value="Humidity">Humidity</option>
            </select>
          </div>

          <div className="col-12">
            <button className="btn btn-success">Save Device</button>
          </div>
        </form>
      </div>
    </div>
  );
}