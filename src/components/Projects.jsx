import { motion } from 'framer-motion'
import Movie from '../assets/Movie.png'
import moviecard from '../assets/moviecard.png'
import landingPage from '../assets/landingPage.png'

function Projects(){

    const projects = [
  {
    title: 'Ember & Origin',
    description: 'A landing page built with clean, responsive layout and modern styling.',
    tech: 'HTML, CSS, JavaScript',
    link: '#',
    image: landingPage,
  },
  {
    title: 'Movie Streaming Platform',
    description: 'A movie streaming platform with a searchable catalog, powered by the TMDB API for movie data and Appwrite for the backend database.',
    tech: 'React, Appwrite, TMDB API',
    link: 'https://my-react-app-eight-woad.vercel.app/',
    images: [moviecard, Movie],
  },

  {
    title: 'FUTA-NAV',
    description: 'A navigation app for FUTA students, providing easy access to campus information and resources.',
    tech: ' React',
    link: 'https://futa-nav-map.vercel.app/',
    image: FutaNav,
  },

]


    return(
        <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
            <motion.div 
            className="max-w-6xl mx-auto"
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Projects
                </h2>
                <motion.div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                    <motion.div key={project.title}
                    className="bg-white  dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.3 }}
                    >

                        {project.images ? (
                      <div className="grid grid-cols-2 gap-1">
                         {project.images.map((img, i) => (
                     <img
                           key={i}
                           src={img}
                           alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-32 object-cover"
                     />
                ))}
                     </div>
                       ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                           className="w-full h-48 object-cover"
                       />
                   )}

                        <div className="px-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                {project.tech}
                            </p>
                            <a href={project.link}
                            target="_blank"
                            rel="noopener  noreferral"
                            className="text-gray-900 dark:text-white font-medium hover:underline"
                            >
                                View Project →
                            </a>
                        </div>
                    </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )

}

export default Projects