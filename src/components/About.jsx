import { motion } from 'framer-motion'

function About(){
  return(
    <section id="#about" className="py-24 px-6 bg-white">
        <motion.div
                  className="max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 >

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                I'm a self-taught frontend developer who started with the fundamentals 
                 HTML, CSS, and JavaScript 
                 and built up from there with Bootstrap and hands-on projects.
                  I care about getting the details right:
                  layouts that actually hold up across screen sizes, clean code,
                   and sites that feel fast and intentional rather than templated.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
                Right now I'm expanding into React and Tailwind CSS to build faster,
                 more scalable frontends — while also taking on client work through my Fiverr gig,
                 delivering custom responsive websites from start to finish.
            </p>
        </motion.div>
    </section>
  )
}

export default About