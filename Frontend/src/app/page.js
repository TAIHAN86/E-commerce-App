"use client"
import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Deals from "./components/Deals"
import  ProductFeed from "./components/ProductFeed"
import Product from "./components/product";
import { useSelector } from "react-redux";

export default function Home() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
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
