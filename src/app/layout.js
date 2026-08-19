import Header from "@/components/Header";

import "./globals.css";

export const metadata = {
  title: "jasNext1",
  description: "jashpur walo ke liye",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Header />

        {children}
      </body>
    </html>
  );
}
