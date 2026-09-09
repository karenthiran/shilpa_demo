import { Kumbh_Sans } from "next/font/google";
import localFont from "next/font/local";

// Bootstrap + Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Slick – keep simple (NO preload!)
import "slick-carousel/slick/slick.css";

// PrimeReact – merged imports
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "./global.css";

import Script from "next/script";
import CalendlyBadge from "./Components/CalendlyBadge/CalendlyBadge";
import BackgroundMusic from "./Components/BackgroundMusic/BackgroundMusic";

const kumbh_sans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-color-font",
});

const clashdisplay = localFont({
  src: "./assets/fonts/ClashDisplay.ttf",
  variable: "--heading-font",
});

export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.shilpaadvisors.com"
          key="canonical"
        />

        {/* Organisation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shilpa Advisors",
            }),
          }}
        />
      </head>

      <body className={`${kumbh_sans.variable} ${clashdisplay.variable}`}>
        {/* GTM */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NMS2R6PR');
          `}
        </Script>

        {/* Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tqepv622yu");
          `}
        </Script>

        {children}
        <CalendlyBadge />
        <BackgroundMusic />
      </body>
    </html>
  );
}
