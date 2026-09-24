import { useState } from "react";

function Navbar (){
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        {name: "Home", href:"#home"},
        {name: "About", href:"#about"},
        {name: "Projects", href:"#projects"},
        {name: "Skills", href:"#skills"},
        {name: "Contact", href:"#contact"}
    ]

    return(
        <nav className="fixed top-0 w-full left-0 bg-white shadow-md z-50">
            <div className="max-w-6xl flex items-center justify-between mx-auto px-6 py-4">
                <a href="#home" className="text-xl font-bold text-gray-800">
                    Victor Shelby.
                </a>

                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>

                            <a href={link.href}
                            className="text-gray-600 hover:text-gray-900 transition-colors">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="md:hidden text-gray-800"
                            onClick={()=> setIsOpen(!isOpen)}
                            >
                                {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {isOpen && (
                <ul className="md:hidden flex flex-col gap-4 px-6 pb-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}
                             className="text-gray-600 hover:text-gray-900"
                             onClick={()=> setIsOpen(false)}
                             >{link.name}
                             </a>
                        </li>
                    ))}
                </ul>
            )}

        </nav>
    )

}

export default Navbar