import Link from 'next/link';
import { client } from '../../../y/sanity';
import { groq } from 'next-sanity';
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Importing next/image

async function getData() {
  return client.fetch(groq`*[_type == "deal"]`);
}

function Deals() {
  const offers = [
    // ... your offers array
  ];

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getData()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  }, []);

  console.log(posts);

  return (
    <div className='ml-4 mx-10 md:mt-32'>
    <h1 className='text-xl font-bold mb-3'>Today&apos;s Deals</h1>


      <div className="flex flex-col md:flex md:flex-row md:space-x-3">
        {posts?.map((item) => (
          <Link key={item?._id} href={`/product/${item?._id}`}>
            <div className="p-2 bg-white cursor-pointer shadow-md flex flex-col space-y-2 items-center justify-center">
              <Image
                className="w-32 h-32 object-contain"
                src={item?.image}
                alt={item?.title} //
                width={128} // 
                height={128} // Set a height
              />
              <div>
                <p>
                  Upto {item?.offer}%{" "}
                  <span className="text-rose-600 font-normal text-sm ml-1">
                    Deal of the day
                  </span>
                </p>
                <p className="truncate font-normal text-sm mt-1">
                  {item?.title.substring(0, 30)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Deals;
