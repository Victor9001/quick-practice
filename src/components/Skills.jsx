import { Code2, Palette, FileCode, Layers } from 'lucide-react'

function Skills() {

    const skills = [
        {name: 'HTML', icon: FileCode, description: 'Semantic, Accessible MarkUp'},
        { name: 'CSS', icon: Palette, description: 'Responsive Layouts and Styling'},
        { name: 'JavaScript', icon: Code2, description: 'Interactive, Dynamic Functionality'},
        { name: 'Bootstrap & Tailwind', icon: Layers, description: 'Fast, Consistent UI frameworks'},
    ]

    return(
        <section id='skills' className='py-24 px-6 bg-white'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl text-gray-900 text-center font-bold mb-12'>
                    Skills
                </h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {skills.map((skill) => {
                        const Icon = skill.icon
                        return(
                            <div
                            key={skill.name}
                            className='flex flex-col items-center text-center p-6 rounded-xl border border-gray-900 hover:-transition-y-1 transition-all'>
                                <div className='w-14 h-14 flex items-center justify-center bg-gray-900 rounded-full text-white mb-4'>
                                    <Icon size={24} />
                                </div>
                                <h3 className='font-semibold text-gray-900 mb-1'>
                                    {skill.name}
                                </h3>
                                <p className='text-sm text-gray-500'>
                                    {skill.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}

export default Skills