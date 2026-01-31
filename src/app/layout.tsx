// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haugen Betongservice",
  description: "Alt innen betong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body>
        <Header />               {/* Navigasjon her – gjenbrukes overalt */}
        <main style={{ minHeight: "calc(100vh - 200px)" }}>
          {children}             {/* Her kommer sidene inn automatisk */}
        </main>
      </body>
    </html>
  );
}