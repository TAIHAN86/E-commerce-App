"use client";
import React, { useEffect, useState } from 'react';
import Product from '../components/product'; // Make sure the import is correct

// Api call from fakestore Api
async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
        throw new Error("Failed to fetch the data");
    }
    return res.json();
}

function ProductFeed() {
    const [products, setProducts] = useState([]); // Changed product to products for clarity
    
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getData();
                setProducts(data); // Set the fetched data to products
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
        
        fetchData();
    }, []);

    console.log(products);

    return (
        // grid system for product components
        <div className='mx-6 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            {products?.map((item, index) => (
                <Product item={item} key={index} /> // Ensure Product is correctly used
            ))}
        </div>
    );
}

export default ProductFeed;
