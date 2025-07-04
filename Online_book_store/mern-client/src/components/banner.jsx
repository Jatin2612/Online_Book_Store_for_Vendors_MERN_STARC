import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="flex flex-col md:flex-row justify-between  intems-center gap-12 py-40 w-full">
                {/* left side  */}
                <div className="space-y-8 md:w-1/2 h-full">
                    <h2 className="text-5xl font-bold leading-snug text-black">Buy and Sell Your Books <span className="text-blue-700">for the Best Pricies</span></h2>
                    <p className="md:w-4/5">Welcome to our online bookstore!
                        We are a digital platform dedicated to providing a vast selection of books to readers around the worldOur online bookstore offers a wide range of genres, from fiction and non-fiction to academic texts and bestsellers
                        Our user-friendly website makes it easy to find the books you're looking for. </p>
                    <div>
                        <input type="search" name="search" id="search" placeholder="Search a book" className="py-2 px-4 rounded-s-sm outline-none" />
                        <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-300">Search</button>
                    </div>
                </div>

                {/* right side  */}
                <div>
                    <BannerCard></BannerCard>

                </div>
            </div>
        </div>
    )
}

export default Banner