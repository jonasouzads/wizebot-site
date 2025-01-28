import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/app.css";
import "~/assets/css/main.css";
import "~/assets/css/react-adjustment.css";
import "~/assets/css/payment-integrations.css";
import WhatsAppButton from "~/components/Ui/WhatsAppButton/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Wizebot - Plataforma Completa de WhatsApp Oficial",
  description: "Com a Wizebot, você automatiza toda a sua operação no WhatsApp sem riscos de banimentos! Utilize a API Oficial para um atendimento seguro e eficiente...",
  icons: {
    icon: ["/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "679848f5d7de2a3706b1c65e";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
      </head>
      <body className={inter.className} style={{ scrollBehavior: 'smooth' }}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}