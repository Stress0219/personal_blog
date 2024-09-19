import Image from "next/image";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Linear from '@/components/Linear'


export default function Home() {
  return (
    <div>
      <Linear/>
      <Navbar/>
      <Banner/>
      <Body/>
      <Footer/>   
    </div>
  );
}
