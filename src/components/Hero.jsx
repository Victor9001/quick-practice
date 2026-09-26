import { motion } from 'framer-motion'

function Hero (){

    return(
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
            <motion.div 
               className="text-center max-w-2xl"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                       >

                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Hi!, I am Victor Shelby
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Frontend Developer building fast, responsive websites for small businesses.
                </p>
                <a href="#projects"
                   className="inline-block bg-gray-900 px-8 py-3 text-white rounded-lg font-medium
                    hover:bg-gray-700 transition-colors"
                     >
                        View my work
                     </a>
            </motion.div>
        </section>
    )
}

export default Hero