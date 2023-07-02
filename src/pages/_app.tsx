import "@/styles/globals.scss";
import "@/components/styles.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isShowed, setShowed] = useState(false);

  // useEffect(()=>{
  //   setShowed(true);
  // },[isShowed])

  // if (!isShowed) return null;

  return <Component {...pageProps} />;
}
