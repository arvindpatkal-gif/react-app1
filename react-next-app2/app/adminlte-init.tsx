"use client";

import { useEffect } from "react";

export default function AdminLteInit() {
  useEffect(() => {
    // Load AdminLTE only in the browser to avoid SSR window/document issues.
    void import("admin-lte/dist/js/adminlte.min.js");
  }, []);

  return null;
}
