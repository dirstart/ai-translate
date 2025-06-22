"use client";

import { useState } from "react";
import "@/styles/globals.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div>
          <Link href="/dashboard/about">About</Link>
          <br />
          <Link href="/dashboard/settings">Settings</Link>
          <br />
          <Link href="/exam">Exam</Link>
          <br />
          <Link href="/exam/tree">Exam Tree</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
