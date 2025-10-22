'use client'

import { useEffect, useState, useRef } from 'react'

export default function About() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const values = [
        {
            title: 'Innovation First',
            description: 'We stay at the forefront of AI and technology, constantly pushing boundaries to create groundbreaking products.'
        },
        {
            title: 'User-Centric Design',
            description: 'Every product we build is designed with the user in mind, focusing on intuitive experiences and real-world impact.'
        },
        {
            title: 'Quality Excellence',
            description: 'We maintain the highest standards in product development, from code quality to user experience.'
        },
        {
            title: 'Open Innovation',
            description: 'We believe in building products that integrate seamlessly with existing workflows and enhance productivity.'
        }
    ]

    return (
        <section id="about" className="section-padding bg-white" ref={sectionRef}>
            <div className="container-max">
                <div className="text-center mb-16">
                    <h2
                        className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        About Samshodan
                    </h2>
                    <p
                        className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '0.4s' }}
                    >
                        At Samshodan, we&apos;re building the future with AI-powered products and developer tools.
                        We create innovative technology solutions that enhance productivity, streamline workflows,
                        and unlock new possibilities for businesses and developers.
                    </p>
                </div>



                {/* Mission & Vision */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div
                        className={`bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl transition-all duration-1000 ease-out hover:scale-105 hover:shadow-lg ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}
                        style={{ transitionDelay: '0.6s' }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To build the future by creating innovative AI-powered products and developer tools 
                            that accelerate innovation and enhance productivity. We focus on delivering exceptional 
                            technology solutions that drive measurable impact and competitive advantage.
                        </p>
                    </div>

                    <div
                        className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl transition-all duration-1000 ease-out hover:scale-105 hover:shadow-lg ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                        style={{ transitionDelay: '0.8s' }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be the leading creator of AI-powered products and developer tools,
                            recognized for our innovation in artificial intelligence and our
                            commitment to building technology that transforms how people work and interact with AI.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <h3
                        className={`text-2xl font-bold text-gray-900 text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '1.0s' }}
                    >
                        Our Values
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`text-center transition-all duration-1000 ease-out hover:scale-105 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${1.2 + index * 0.1}s` }}
                            >
                                <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 h-full">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                                        {value.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}