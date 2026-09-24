
function Projects(){

    const projects = [
  {
    title: 'Ember & Origin',
    description: 'A landing page built with clean, responsive layout and modern styling.',
    tech: 'HTML, CSS, JavaScript',
    link: '#',
  },

  {
    title: 'Movie Streaming Platform',
    description: 'A movie streaming platform with a searchable catalog, powered by the TMDB API for movie data and Appwrite for the backend database.',
    tech: 'React, Appwrite, TMDB API',
    link: 'https://github.com/Victor9001/My-React-App',
  },
]

    return(
        <section id="projects" className="py-24 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    
                </div>
            </div>
        </section>
    )

}

export default Projects