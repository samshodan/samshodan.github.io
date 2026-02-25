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
            description: 'We stay at the forefront of technology, leveraging modern tools and practices to deliver cutting-edge solutions.'
        },
        {
            title: 'Client-Centric',
            description: 'Every solution we build is tailored to your unique business needs, focusing on real-world impact and measurable results.'
        },
        {
            title: 'Quality Excellence',
            description: 'We maintain the highest standards in software development, from architecture design to code quality and security.'
        },
        {
            title: 'Strategic Partnership',
            description: 'We work as your technology partner, providing strategic guidance and solutions that align with your business goals.'
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
                        Samshodan delivers innovative AI-powered products and expert IT consulting services.
                        We help businesses transform through cutting-edge technology solutions, strategic guidance,
                        and modern development practices.
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
                            To empower businesses through innovative AI-powered products and expert IT consulting.
                            We deliver cutting-edge technology solutions that accelerate digital transformation,
                            enhance operational efficiency, and drive measurable business impact.
                        </p>
                    </div>

                    <div
                        className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl transition-all duration-1000 ease-out hover:scale-105 hover:shadow-lg ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                        style={{ transitionDelay: '0.8s' }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be a trusted technology partner recognized for excellence in AI innovation,
                            product development, and IT consulting. We strive to help businesses navigate digital 
                            transformation through innovative products and strategic guidance.
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