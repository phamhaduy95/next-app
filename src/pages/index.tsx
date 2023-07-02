import Head from "next/head";
import { Inter } from "next/font/google";
import { useUUID } from "@/utils/useUUID";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const items = ["orange","apple","grape"]

export default function Home() {
  const id = useUUID();
  function renderLinks(){
    return items.map((e)=><Link href={"orange"}/>)
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="TestPage__Container">
            
        </div>
      </main>
    </>
  );
}
