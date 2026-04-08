"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>("home");

  const menu = [
    {
      id: "home",
      name: "Home",
      items: [
        { name: "Overview", path: "/" },
        { name: "Updates", path: "/updates" },
        { name: "Reports", path: "/reports" },
      ],
    },
    {
      id: "dashboard",
      name: "Dashboard",
      items: [
        { name: "Overview", path: "/dashboard" },
        { name: "Weekly", path: "/dashboard/weekly" },
        { name: "Monthly", path: "/dashboard/monthly" },
        { name: "Annually", path: "/dashboard/annually" },
      ],
    },
    {
      id: "devices",
      name: "Devices",
      items: [
        { name: "Add Device", path: "/devices/add" },
        { name: "Manage Devices", path: "/devices" },
      ],
    },
    // {
    //   id: "orders",
    //   name: "Orders",
    //   items: [
    //     { name: "New", path: "/orders/new" },
    //     { name: "Processed", path: "/orders/processed" },
    //     { name: "Shipped", path: "/orders/shipped" },
    //     { name: "Returned", path: "/orders/returned" },
    //   ],
    // },
    {
      id: "account",
      name: "Account",
      items: [
        { name: "New...", path: "/account/new" },
        { name: "Profile", path: "/account/profile" },
        { name: "Settings", path: "/account/settings" },
        { name: "Sign out", path: "/account/signout" },
      ],
    },
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const handleSectionClick = (id: string) => {
    if (id === "account") {
      //alert("Account clicked");
    }
    toggleSection(id);
  };

  const handleItemClick = (path: string) => {
    if (path === "/account/signout") {
      alert("Sign out clicked");
    }
  };

  return (
    <div className="w-64 vh-100 text-white p-5 overflow-y-auto" style={{ backgroundColor: '#1a3a3a' }}>
      <ul className="space-y-1">
        {menu.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleSectionClick(section.id)}
              className="w-full flex items-center justify-start gap-2 p-2 rounded font-semibold hover:bg-gray-800 transition-colors"
            >
              <span
                className={`text-lg transform transition-transform ${
                  expandedSection === section.id ? "rotate-0" : "-rotate-90"
                }`}
              >
                ▼
              </span>
              <span>{section.name}</span>
            </button>

            {expandedSection === section.id && (
              <ul className="ml-4 mt-1 space-y-1 pl-2 border-l border-gray-700">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={() => handleItemClick(item.path)}
                      className={`block p-2 rounded text-sm transition-colors text-decoration-none ${
                        pathname === item.path
                          ? "bg-teal-600 text-white font-medium"
                          : "text-teal-400 hover:text-teal-300"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}