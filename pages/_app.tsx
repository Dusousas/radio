import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsappButton from "@/components/subc/Whatsapp";
import "@/styles/globals.css";
import type { AppProps } from "next/app";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WhatsappButton />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}