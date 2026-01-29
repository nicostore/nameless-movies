import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // Import Navbar yang baru dibuat
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nameless Movies",
  description: "Streaming Film Gratis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, background: '#141414', color: 'white' }}>
        <Navbar /> {/* Navbar akan selalu muncul di atas semua halaman */}
        {children}
      </body>
    </html>
  );
}