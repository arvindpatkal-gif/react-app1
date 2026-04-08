import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className="vh-100 d-flex flex-column">

    <Navbar />

    <div className="d-flex flex-grow-1 overflow-hidden">
      <div style={{ width: "250px" }} className="bg-dark text-white">
        <Sidebar />
      </div>
      <main className="flex-grow-1 overflow-auto p-4 bg-light">
        {children}
      </main>

    </div>

    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      strategy="afterInteractive"
    />
  </body>
    </html>
  );
}