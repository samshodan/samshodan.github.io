import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Palette, Users, Smartphone, Eye, Zap, Shield, CheckCircle, ArrowRight, TrendingUp, Clock } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Experience Transformation Services - UX/UI Design & Development | Samshodan',
    description: 'Transform user experiences with modern design thinking, accessibility-first development, and cutting-edge frontend technologies. Create engaging digital experiences that drive results.',
    keywords: 'experience transformation, UX design, UI development, user experience, design systems, accessibility, frontend development, digital experience',
    openGraph: {
        title: 'Experience Transformation Services - UX/UI Design & Development | Samshodan',
        description: 'Transform user experiences with modern design thinking and cutting-edge frontend technologies.',
        type: 'website',
    },
    alternates: {
        canonical: '/services/experience-transformation',
    },
}

export default function ExperienceTransformationPage() {
    const services = [
        {
            icon: Eye,
            title: 'User Experience (UX) Design',
            description: 'Research-driven UX design that puts users at the center of every decision, creating intuitive and engaging experiences.'
        },
        {
            icon: Palette,
            title: 'User Interface (UI) Development',
            description: 'Beautiful, responsive interfaces built with modern frameworks and design systems for consistency and scalability.'
        },
        {
            icon: Users,
            title: 'Design System Creation',
            description: 'Comprehensive design systems that ensure consistency across all touchpoints and accelerate development.'
        },
        {
            icon: Shield,
            title: 'Accessibility Compliance',
            description: 'WCAG-compliant designs that ensure your digital experiences are accessible to all users.'
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Lightning-fast experiences optimized for speed, SEO, and user engagement across all devices.'
        },
        {
            icon: Smartphone,
            title: 'Cross-Platform Experiences',
            description: 'Consistent, high-quality experiences across web, mobile, and emerging platforms.'
        }
    ]

    const designProcess = [
        {
            step: '01',
            title: 'Research & Discovery',
            description: 'User research, competitive analysis, and stakeholder interviews to understand needs and opportunities.'
        },
        {
            step: '02',
            title: 'Strategy & Planning',
            description: 'Define user personas, journey maps, and experience strategy aligned with business objectives.'
        },
        {
            step: '03',
            title: 'Design & Prototype',
            description: 'Create wireframes, prototypes, and high-fidelity designs with user testing and iteration.'
        },
        {
            step: '04',
            title: 'Development & Launch',
            description: 'Build responsive, accessible interfaces with ongoing optimization and performance monitoring.'
        }
    ]

    const benefits = [
        'Increased user engagement by up to 200%',
        'Improved conversion rates and business metrics',
        'Enhanced brand perception and loyalty',
        'Reduced support costs through better usability',
        'Faster time-to-market with design systems',
        'Improved accessibility and compliance',
        'Cross-platform consistency',
        'Data-driven design decisions'
    ]

    const technologies = [
        { name: 'React', category: 'Frontend' },
        { name: 'Next.js', category: 'Framework' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Figma', category: 'Design' },
        { name: 'Storybook', category: 'Design System' },
        { name: 'Framer Motion', category: 'Animation' },
        { name: 'Testing Library', category: 'Testing' }
    ]

    return (
        <main>
            <Header />

            {/* Hero Section */}
            <section className="section-padding pt-32 bg-gradient-to-br from-purple-50 to-white">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Experience Transformation
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Transform user experiences with research-driven design, modern development practices,
                                and accessibility-first approaches that drive engagement and business results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="btn-primary">
                                    Start Transformation
                                </Link>
                                <a href="#services" className="btn-secondary">
                                    Explore Services
                                </a>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">200%</div>
                                    <div className="text-purple-100">Engagement Increase</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">50+</div>
                                    <div className="text-purple-100">Experiences Transformed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">98%</div>
                                    <div className="text-purple-100">User Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">WCAG</div>
                                    <div className="text-purple-100">Accessibility Compliant</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section-padding bg-white">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Experience Transformation Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive UX/UI services that transform how users interact with your digital products and services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <service.icon className="text-purple-600" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Process */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Design Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A human-centered design approach that ensures every experience is intuitive, accessible, and impactful.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {designProcess.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Technologies & Tools
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We use the latest design and development tools to create exceptional user experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {technologies.map((tech, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                                <div className="font-semibold text-gray-900">{tech.name}</div>
                                <div className="text-sm text-gray-500">{tech.category}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Transform Your Digital Experience
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Great user experiences drive business success. Our experience transformation services
                                help you create digital products that users love and that deliver measurable results.
                            </p>

                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Experience?</h3>
                            <p className="text-purple-100 mb-6">
                                Let&apos;s create digital experiences that delight your users and drive your business forward.
                                Start with a comprehensive UX audit and transformation roadmap.
                            </p>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center">
                                    <TrendingUp className="mr-3" size={20} />
                                    <span>Data-driven design decisions</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="mr-3" size={20} />
                                    <span>Rapid prototyping and iteration</span>
                                </div>
                                <div className="flex items-center">
                                    <Users className="mr-3" size={20} />
                                    <span>Expert design and development team</span>
                                </div>
                            </div>
                            <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                                Start Your Transformation <ArrowRight className="ml-2" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}