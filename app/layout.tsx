"use client";

import { useState } from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div>
          <Link href="/dashboard/about">About</Link>
          <br />
          <Link href="/dashboard/settings">Settings</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
