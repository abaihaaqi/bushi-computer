import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
