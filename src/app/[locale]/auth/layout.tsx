import { Metadata } from "next";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>???</h1>
        </header>
        {children}
        <footer>
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Next Base Source",
  description: "Using Internal",
};

export default Layout;
