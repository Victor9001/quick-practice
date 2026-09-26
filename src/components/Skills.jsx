import { Code2, Palette, FileCode, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

function Skills() {

    const skills = [
        {name: 'HTML', icon: FileCode, description: 'Semantic, Accessible MarkUp'},
        { name: 'CSS', icon: Palette, description: 'Responsive Layouts and Styling'},
        { name: 'JavaScript', icon: Code2, description: 'Interactive, Dynamic Functionality'},
        { name: 'Bootstrap & Tailwind', icon: Layers, description: 'Fast, Consistent UI frameworks'},
    ]

    return(
        <section id='skills' className='py-24 px-6 bg-white dark:bg-gray-900'>
            <motion.div 
            className='max-w-6xl mx-auto'
            initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

                <h2 className='text-3xl text-gray-900 dark:text-white text-center font-bold mb-12'>
                    Skills
                </h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {skills.map((skill, index) => {
                        const Icon = skill.icon
                        return(
                            <motion.div
                            key={skill.name}
                            className='flex flex-col items-center text-center p-6 rounded-xl border border-gray-900
                             dark:border-gray-700 dark:hover:border-white hover:-transition-y-1 transition-all'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            >

                                <div className='w-14 h-14 flex items-center justify-center bg-gray-900 rounded-full text-white mb-4'>
                                    <Icon size={24} />
                                </div>
                                <h3 className='font-semibold text-gray-900 dark:text-white mb-1'>
                                    {skill.name}
                                </h3>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>
                                    {skill.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </section>
    )

}

export default Skills