import { motion } from 'framer-motion'

function Contact(){

    return(
        <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
            <motion.div className="max-w-2xl mx-auto text-center"
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             >

                <h2 className="text-3xl text-gray-900 dark:text-white mb-4 font-bold">
                    Get In Touch
                </h2>
                <p className="text-xl text-gray-600 mb-12 dark:text-gray-300">
                    Have a project in mind? I'd love to hear about it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                     href="mailto:oluwaseunsamuel996@gmail.com"
                    className="bg-gray-900 rounded-lg text-white dark:border-white px-6 py-3 font-medium hover:bg-gray-700
                     transition-colors"
                    >
                        Email Me
                    </a>

                    <a 
                    href="https://wa.me/2348032067238"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 rounded-lg text-white px-6 py-3 font-medium
                     hover:bg-green-700 transition-colors"
                    >
                        WhatsApp
                    </a>

                    <a
                     href="https://www.fiverr.com/users/code_withsamuel/manage_gigs"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="border border-gray-900 dark:border-white text-gray-900
                      dark:text-white dark:hover:bg-white dark:hover:text-gray-900 px-6 py-3
                      rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
                     >
                     View My Fiverr
                      </a>
                </div>
            </motion.div>
        </section>
    )

}

export default Contact