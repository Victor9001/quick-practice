import { useState, useEffect } from 'react'


function Footer(){

    const [time, setTime] = useState(new Date())

     useEffect(() => {
    const timer = setInterval(() => {
        setTime(new Date())
    }, 1000)

    return()=> clearInterval(timer)
    }, [])



    return(
        <footer className='bg-gray-900 text-gray-400 py-8 px-6 text-center'>
            <p>
                © {new Date().getFullYear()} Victor Shelby. All right reserved
            </p>

            <p className='text-sm mt-2'>
                {time.toLocaleTimeString()}
            </p>
        </footer>
    )

}

export default Footer