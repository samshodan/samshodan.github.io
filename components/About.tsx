'use client'

import { Target, Users, Award, TrendingUp } from 'lucide-react'
import { useEffect, useState, useRef, useMemo } from 'react'

export default function About() {
    const [isVisible, setIsVisible] = useState(false)
    const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])
    const statsRef = useRef<HTMLDivElement>(null)

    const finalStats = useMemo(() => [10, 100, 20, 15], []) // Final values for animation

    useEffect(() => {
        const animateCounters = () => {
            const duration = 2000 // 2 seconds
            const steps = 60 // 60 steps for smooth animation
            const stepDuration = duration / steps

            let currentStep = 0

            const timer = setInterval(() => {
                currentStep++
                const progress = currentStep / steps

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4)

                setAnimatedStats([
                    Math.floor(finalStats[0] * easeOutQuart),
                    Math.floor(finalStats[1] * easeOutQuart),
                    Math.floor(finalStats[2] * easeOutQuart),
                    Math.floor(finalStats[3] * easeOutQuart),
                ])

                if (currentStep >= steps) {
                    clearInterval(timer)
                    setAnimatedStats(finalStats) // Ensure final values
                }
            }, stepDuration)
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Start counter animations
                    animateCounters()
                }
            },
            { threshold: 0.3 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }

        return () => observer.disconnect()
    }, [finalStats])
    const stats = [
        { label: 'Years of Experience', value: '10+', icon: Award, animatedValue: animatedStats[0] },
        { label: 'Successful Projects', value: '100+', icon: TrendingUp, animatedValue: animatedStats[1] },
        { label: 'Happy Clients', value: '20+', icon: Users, animatedValue: animatedStats[2] },
        { label: 'Team Members', value: '15+', icon: Target, animatedValue: animatedStats[3] }
    ]

    const values = [
        {
            title: 'Innovation First',
            description: 'We stay at the forefront of technology, constantly exploring new solutions to solve complex business challenges.'
        },
        {
            title: 'Client-Centric Approach',
            description: 'Your success is our success. We work closely with clients to understand their unique needs and deliver tailored solutions.'
        },
        {
            title: 'Quality Excellence',
            description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
        },
        {
            title: 'Domain Expertise',
            description: 'Deep knowledge across multiple industries, with specialized expertise in retail, helps us create solutions that truly understand your business.'
        }
    ]

    return (
        <section id="about" className="section-padding bg-white">
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
                        At Samshodan, we&apos;re building the future with AI and developer experience at the core.
                        From idea to impact, we accelerate innovation across every industry, delivering intelligent solutions
                        with deep expertise in retail and other key domains.
                    </p>
                </div>

                {/* Stats */}
                <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center transition-all duration-1000 ease-out hover:scale-110 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-200 transition-all duration-300 hover:rotate-12 transform animate-float group">
                                <stat.icon className="text-primary-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2 relative overflow-hidden">
                                <span className="inline-block">
                                    {isVisible ? (
                                        <>
                                            <span className="tabular-nums">{stat.animatedValue}</span>
                                            <span className="text-primary-600">+</span>
                                        </>
                                    ) : (
                                        '0+'
                                    )}
                                </span>
                            </div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Mission & Vision */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div
                        className={`bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl transition-all duration-1000 ease-out hover:scale-105 hover:shadow-lg ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}
                        style={{ transitionDelay: '0.8s' }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To build the future by putting AI and developer experience at the core of innovation,
                            accelerating the journey from idea to impact across every industry through intelligent technology,
                            exceptional tools, and strategic consulting that drives measurable growth and competitive advantage.
                        </p>
                    </div>

                    <div
                        className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl transition-all duration-1000 ease-out hover:scale-105 hover:shadow-lg ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                        style={{ transitionDelay: '1.0s' }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be the leading technology partner for businesses worldwide,
                            recognized for our expertise in AI, developer experience, and our
                            commitment to delivering solutions that transform how organizations operate across all industries.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <h3
                        className={`text-2xl font-bold text-gray-900 text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '1.2s' }}
                    >
                        Our Values
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`text-center transition-all duration-1000 ease-out hover:scale-105 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${1.4 + index * 0.1}s` }}
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