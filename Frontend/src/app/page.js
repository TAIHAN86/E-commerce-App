import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Deals from "./components/Deals"
import  ProductFeed from "./components/ProductFeed"
import Product from "./components/product";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Banner/>
      <Deals/>
      <ProductFeed/>
      <Product/>
    </main>
  );
}
