import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6'
import { AuthContext } from "../contects/AuthProvider";

const Navbar = () => {
    const [isMenuOpen,setisMenuOpen] = useState(false)
    const [isSticky,setisSticky] = useState(false)

    const {user} = useContext(AuthContext)
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.screenY > 100){
                setisSticky(true)
            } else {
                setisSticky(false)
            }
        }

        window.addEventListener("scroll",handleScroll)

        return () => {
            window.addEventListener("scroll",handleScroll)
        }
    },[])

    //NavItems here

    const NavItems = [
        {link: 'Home',path: '/'},
        // {link: 'About',path: '/about'},
        {link: 'Shop',path: '/shop'},
        {link: 'Sell Your Book',path: '/admin/dashboard'},
        // {link: 'Blog',path: '/blog'},
    ]

    return (
        <header className="w-full fixed top-0 left-0 rigth-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? " " : "sticky top-0 left-0 right-0 bg-blue-800 bg-teal-100"}`}>
            {/* bg-teal-100 */}
                <div className="flex justify-between item-center text-base gap-8">
                    {/*  logo  */}
                    <Link to='/' className="text-2xl font-bold text-blue-700 flex items-center gap-2"><FaBlog className="inline-block"/>Bookly</Link>

                    {/* nav items for large devices */}
                    <ul className="md:flex space-x-12 hidden">
                        {
                            NavItems.map( ({link,path}) => <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">{link }</Link> )
                        }
                    </ul>

                    {/* button for lg devices  */}
                    <div className="space-x-12 hidden lg:flex item-center">
                        <button><FaBarsStaggered className="w-5 hover:text-blue-700"/>
                        {/* {
                            user? user.email : ""
                        } */}
                        </button>
                    </div>

                    {/* menu for mobile devices  */}
                    <div className="md:hidden ">
                        <button onClick={toggleMenu} className="text-black focus:outline-none ">
                            { 
                                isMenuOpen ? <FaXmark className="h-5 w-5 text-black"/> : <FaBarsStaggered className="h-5 w-5 text-black"/>
                            }

                        </button>
                    </div>
                </div>

                {/* nav items for sm devices  */}
                <div className= {`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"} `}>
                    {
                        NavItems.map( ({link,path}) => <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer ">{link }</Link> )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;