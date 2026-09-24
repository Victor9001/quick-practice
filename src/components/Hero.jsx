
function Hero (){

    return(
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    Hi!, I am Victor Shelby
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Frontend Developer building fast, responsive websites for small businesses.
                </p>
                <a href="#projects"
                   className="inline-block bg-gray-900 px-8 py-3 text-white rounded-lg font-medium
                    hover:bg-gray-700 transition-colors"
                     >
                        View my work
                     </a>
            </div>
        </section>
    )
}

export default Hero