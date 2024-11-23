import { Inter, Raleway } from "next/font/google";
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/app.css";
import "~/assets/css/main.css";
import "~/assets/css/react-adjustment.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "Wizebot - Plataforma Completa de WhatsApp Oficial",
  description: "Com a Wizebot, você automatiza toda a sua operação no WhatsApp sem riscos de banimentos! Utilize a API Oficial para um atendimento seguro e eficiente...",
  icons: {
    icon: ["/favicon.png"],
    apple: ["/favicon.png"],
    shortcut: ["/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
