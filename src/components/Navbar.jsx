import { useState, useRef, useEffect } from "react";
import { Sun, Moon } from 'lucide-react'

function Navbar (){
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [darkMode, setDarkMode] = useState(false)

    const menuRef = useRef(null)

    useEffect(()=> {
        function HandleClicksOutside(event){
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', HandleClicksOutside)
        return() => document.removeEventListener('mousedown', HandleClicksOutside)
    }, [])

    useEffect(() => {
        function handleScrolls(){
            const sections = navLinks.map((link) => link.href.replace('#', ''))

            for(const section of sections){
                const element = document.getElementById(section)
                if(element){
                    const rect = element.getBoundingClientRect()
                    if(rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScrolls)
        return () =>  window.removeEventListener('scroll', handleScrolls)
    }, [])

    useEffect(() =>{
        if(darkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const navLinks = [
        {name: "Home", href:"#home"},
        {name: "About", href:"#about"},
        {name: "Projects", href:"#projects"},
        {name: "Skills", href:"#skills"},
        {name: "Contact", href:"#contact"}
    ]

    return(
        <nav className="fixed top-0 w-full left-0 bg-white dark:bg-gray-900 shadow-md z-50">

            <div className="max-w-6xl flex items-center justify-between mx-auto px-6 py-4">

                <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white">
                    Victor Shelby.
                </a>

                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>

                            <a href={link.href}
                            className={`transition-colors ${
                                       activeSection === link.href.replace('#', '')
                                             ? 'text-gray-900 font-semibold'
                                            : 'text-gray-600 hover:text-gray-900'
                                        }`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                         onClick={() => setDarkMode(!darkMode)}
                         className="hidden md:block text-gray-600 hover:text-gray-900
                          dark:text-gray-300 dark:hover:text-white transition-colors"
                        >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button className="md:hidden text-gray-800 dark:text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {isOpen && (

                <ul ref={menuRef} className="md:hidden flex flex-col gap-4 px-6 pb-4">

                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}
                             className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                             onClick={()=> setIsOpen(false)}
                             >
                                {link.name}
                             </a>
                        </li>
                    ))}
                </ul>
            )}

        </nav>
    )

}

export default Navbar