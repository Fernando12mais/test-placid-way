import Header from "@/components/header/header";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import { Metadata } from "next";
import Footer from "@/components/footer/footer";
import FavoritesContextProvider from "@/context/favorites-context";

export const metadata: Metadata = {
  title: "Trip with security and comfort | Trip",
  description: "The best way to have a good trip.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FavoritesContextProvider>
          <Header />
          <div className="d-flex flex-column justify-content-center align-items-center">
            {children}
          </div>
          <Footer />
        </FavoritesContextProvider>
      </body>
    </html>
  );
}
