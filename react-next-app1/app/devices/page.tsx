"use client";

import { useEffect, useState } from "react";

export default function ManageDevices() {
  const [devices, setDevices] = useState([
    { id: 1, name: "Sensor 1", location: "Room 101", status: "Online" },
    { id: 2, name: "Sensor 2", location: "Room 202", status: "Offline" },
  ]);

    useEffect(() => {
        const existing = localStorage.getItem("devices");

        if (!existing) {
            const defaultDevices = [
                { id: 1, name: "Sensor 1", location: "Room 101", status: "Online" },
                { id: 2, name: "Sensor 2", location: "Room 202", status: "Offline" },
            ];

            localStorage.setItem("devices", JSON.stringify(defaultDevices));
            setDevices(defaultDevices);
        } else {
            setDevices(JSON.parse(existing));
        }
    }, []);

  const deleteDevice = (id: number) => {
    setDevices(devices.filter((d) => d.id !== id));
  };

  const toggleStatus = (id: number) => {
    setDevices(
      devices.map((d) =>
        d.id === id
          ? {
              ...d,
              status: d.status === "Online" ? "Offline" : "Online",
            }
          : d
      )
    );
  };

  return (
    <div>
      <h2 className="mb-4">Manage Devices</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search devices..."
        />
      </div>

      <div className="card p-3 shadow-sm">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {devices.map((device) => (
              <tr key={device.id ?? Math.random()}>
                <td>{device.name}</td>
                <td>{device.location}</td>

                <td>
                  <span
                    className={
                      device.status === "Online"
                        ? "badge bg-success"
                        : "badge bg-danger"
                    }
                  >
                    {device.status ?? "Offline"}
                  </span>
                </td>

                <td className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => toggleStatus(device.id)}
                  >
                    Toggle
                  </button>

                  <button className="btn btn-sm btn-primary">
                    Edit
                  </button>

                  <button className="btn btn-sm btn-danger" onClick={() => deleteDevice(device.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}