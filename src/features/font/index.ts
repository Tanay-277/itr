import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const gilroy = localFont({
  src: "./fonts/gilroy.woff2",
  variable: "--font-gilroy-sans",
  weight: "700",
});

const inter = localFont({
  src: [
    {
      path: "./fonts/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  weight: "500",
});

const aeonik = localFont({
  src: "./fonts/Aeonik.woff2",
  variable: "--font-aeonik",
  weight: "500",
});

export { aeonik, geistMono, geistSans, gilroy, inter };
