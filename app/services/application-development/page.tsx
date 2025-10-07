import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Smartphone, Globe, Cloud, Database, Zap, CheckCircle, ArrowRight, Users, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Application Development Services - Custom Software Solutions | Samshodan',
  description: 'Expert application development services for web, mobile, and cloud platforms. Build scalable, secure, and high-performance applications with modern technologies and best practices.',
  keywords: 'application development, custom software development, web development, mobile app development, cloud applications, full-stack development, API development, progressive web apps',
  openGraph: {
    title: 'Application Development Services - Custom Software Solutions | Samshodan',
    description: 'Build modern, scalable applications with our expert development team. Web, mobile, and cloud solutions tailored to your business needs.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/application-development',
  },
}

export default function ApplicationDevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Full-stack web applications using modern frameworks like React, Next.js, and Node.js for optimal performance and user experience.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Native iOS and Android applications, as well as cross-platform solutions using React Native and Flutter for maximum reach.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Applications',
      description: 'Scalable cloud applications built for AWS, Azure, and Google Cloud with microservices architecture and containerization.'
    },
    {
      icon: Database,
      title: 'API Development & Integration',
      description: 'RESTful APIs, GraphQL endpoints, and third-party integrations to connect your applications with existing systems.'
    },
    {
      icon: Zap,
      title: 'Progressive Web Apps',
      description: 'Fast, reliable, and engaging web applications that work offline and provide native app-like experiences.'
    },
    {
      icon: Shield,
      title: 'Enterprise Applications',
      description: 'Robust enterprise-grade applications with advanced security, compliance, and scalability requirements.'
    }
  ]

  const technologies = [
    { 
      name: 'React', 
      category: 'Frontend',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12 2.5c5.799 0 10.5 4.701 10.5 10.5S17.799 23.5 12 23.5 1.5 18.799 1.5 13 6.201 2.5 12 2.5zm0 1.5c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 2c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z" fill="#61DAFB"/>
          <ellipse cx="12" cy="13" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="12" cy="13" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 13)"/>
          <ellipse cx="12" cy="13" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 13)"/>
        </svg>
      )
    },
    { 
      name: 'Next.js', 
      category: 'Frontend',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" fill="#000"/>
          <path d="M9.4 16.6L15.5 8.4h1.1v8.2h-1V9.8l-5.3 7.2H9.4v-.4z" fill="#fff"/>
        </svg>
      )
    },
    { 
      name: 'Node.js', 
      category: 'Backend',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#339933"/>
        </svg>
      )
    },
    { 
      name: 'Python', 
      category: 'Backend',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.37.09-.5.27-.13.18-.2.39-.2.61 0 .22.07.43.2.61.13.18.3.27.5.27.2 0 .37-.09.5-.27.13-.18.2-.39.2-.61 0-.22-.07-.43-.2-.61-.13-.18-.3-.27-.5-.27z" fill="#3776ab"/>
          <path d="M9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.48l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h3.83l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.26.02-.21.01H9.04l-.69.05-.59.14-.5.21-.41.28-.33.32-.27.35-.2.36-.15.36-.1.35-.07.32-.04.28-.02.21v1.93H7.91l-.14-.01zm6.47-14.25c.2 0 .37-.09.5-.27.13-.18.2-.39.2-.61 0-.22-.07-.43-.2-.61-.13-.18-.3-.27-.5-.27-.2 0-.37.09-.5.27-.13.18-.2.39-.2.61 0 .22.07.43.2.61.13.18.3.27.5.27z" fill="#ffde57"/>
        </svg>
      )
    },
    { 
      name: 'Java', 
      category: 'Backend',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" fill="#ED8B00"/>
        </svg>
      )
    },
    { 
      name: 'TypeScript', 
      category: 'Language',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" rx="5" fill="#3178C6"/>
          <path d="M9.5 9v10.5h2V11h2.5V9H9.5zM16.5 9.5c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h1v1h-2.5v1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-1v-1h2.5V9.5h-3z" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'AWS', 
      category: 'Cloud',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.2.072-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.287-.2-.44-.503.593-1.135.889-1.895.889-.543 0-.975-.16-1.287-.48-.32-.32-.48-.744-.48-1.279 0-.568.2-1.023.6-1.375.4-.353.936-.528 1.615-.528.224 0 .455.016.695.056.24.04.487.088.743.16v-.528c0-.544-.112-.927-.336-1.143-.231-.216-.624-.32-1.183-.32-.255 0-.518.032-.79.088-.271.056-.535.127-.79.24-.119.056-.207.088-.255.104-.048.016-.087.024-.111.024-.096 0-.144-.072-.144-.216v-.335c0-.112.016-.2.056-.255.04-.056.112-.112.207-.16.272-.144.6-.264.983-.36.384-.096.8-.144 1.239-.144.946 0 1.64.216 2.073.648.44.432.655 1.08.655 1.952v2.577zm-2.625.464c.218 0 .447-.04.695-.12.247-.08.464-.2.647-.36.112-.096.194-.2.247-.32.056-.12.08-.264.08-.424v-.408c-.199-.064-.415-.112-.647-.144-.231-.032-.455-.048-.671-.048-.479 0-.831.096-1.055.288-.224.192-.336.464-.336.808 0 .328.08.576.247.744.167.168.415.256.743.256zm5.22 1.072c-.127 0-.207-.024-.271-.072-.064-.048-.12-.144-.168-.288l-1.887-6.225c-.048-.16-.072-.264-.072-.32 0-.128.064-.2.191-.2h.783c.135 0 .215.024.271.072.064.048.112.144.151.288l1.351 5.329 1.255-5.329c.032-.144.08-.24.144-.288.064-.048.151-.072.279-.072h.638c.135 0 .215.024.279.072.064.048.119.144.144.288l1.271 5.393 1.391-5.393c.04-.144.096-.24.151-.288.064-.048.144-.072.271-.072h.743c.127 0 .191.064.191.2 0 .04-.008.08-.016.127-.008.048-.024.112-.048.2l-1.943 6.225c-.048.16-.112.24-.168.288-.064.048-.144.072-.279.072h-.686c-.135 0-.215-.024-.279-.072-.064-.048-.119-.144-.144-.288l-1.255-5.217-1.239 5.217c-.04.144-.08.24-.144.288-.064.048-.151.072-.279.072h-.686zm8.253.216c-.815 0-1.463-.232-1.943-.696-.479-.464-.719-1.088-.719-1.864 0-.832.224-1.48.671-1.944.448-.464 1.048-.696 1.807-.696.735 0 1.319.224 1.751.672.432.448.647 1.072.647 1.864v.48c0 .128-.064.2-.191.2h-3.951c.032.568.184.983.447 1.247.271.264.647.392 1.135.392.247 0 .502-.032.758-.088.255-.056.487-.128.695-.216.112-.048.191-.08.247-.096.056-.016.096-.024.127-.024.112 0 .168.08.168.24v.335c0 .112-.016.2-.048.255-.032.056-.096.112-.184.16-.255.144-.559.256-.911.336-.353.08-.719.12-1.095.12zm-.08-3.953c-.431 0-.775.112-1.031.336-.255.224-.415.544-.479.96h2.862c0-.432-.104-.76-.32-.984-.216-.224-.518-.336-.911-.336z" fill="#FF9900"/>
          <path d="M20.945 18.24c-1.735 1.279-4.255 1.951-6.426 1.951-3.04 0-5.781-1.127-7.85-3.001-.16-.144-.016-.344.176-.231 2.217 1.287 4.958 2.073 7.794 2.073 1.911 0 4.014-.4 5.949-1.231.295-.128.535.191.357.439z" fill="#FF9900"/>
          <path d="M21.775 17.297c-.223-.287-1.479-.135-2.041-.072-.168.024-.191-.128-.04-.231.999-.703 2.633-.5 2.825-.264.191.24-.048 1.911-.999 2.705-.144.12-.287.056-.223-.104.215-.535.695-1.735.478-2.034z" fill="#FF9900"/>
        </svg>
      )
    },
    { 
      name: 'Docker', 
      category: 'DevOps',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" fill="#2496ED"/>
        </svg>
      )
    },
    { 
      name: 'PostgreSQL', 
      category: 'Database',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M17.128 0C15.624-.007 14.28.138 13.107.43c-2.713.675-3.206 2.09-3.206 4.695v3.44H6.46v4.57h3.44v11.74c0 2.605.493 4.02 3.207 4.695 1.172.292 2.516.437 4.02.43 1.505.007 2.849-.138 4.021-.43 2.714-.675 3.207-2.09 3.207-4.695V13.135h3.44V8.565h-3.44V5.125c0-2.605-.493-4.02-3.207-4.695C19.977.138 18.633-.007 17.128 0z" fill="#336791"/>
        </svg>
      )
    },
    { 
      name: 'MongoDB', 
      category: 'Database',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184C10.616 2.334 7.635 4.49 6.934 9.013c-.492 3.168.48 6.291 2.573 8.656.328.372.675.717 1.04 1.034.16-.206.316-.412.463-.624 1.633-2.353 2.183-5.075 2.183-8.524zm-.193 8.524c-.16.206-.316.412-.463.624-1.633 2.353-2.183 5.075-2.183 8.524 0-3.449-.55-6.171-2.183-8.524-.147-.212-.303-.418-.463-.624-1.093-1.565-2.065-3.234-2.573-5.656-.701-4.523 2.28-6.679 2.926-7.829.468-.499.487-.689.523-1.184.205.486.455 1.046.735 1.44.321.701 3.309 2.535 4.573 8.115 0 3.449.55 6.171 2.183 8.524.147.212.303.418.463.624z" fill="#4DB33D"/>
        </svg>
      )
    },
    { 
      name: 'React Native', 
      category: 'Mobile',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12 2.5c5.799 0 10.5 4.701 10.5 10.5S17.799 23.5 12 23.5 1.5 18.799 1.5 13 6.201 2.5 12 2.5zm0 1.5c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 2c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z" fill="#61DAFB"/>
          <ellipse cx="12" cy="13" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="12" cy="13" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 13)"/>
          <ellipse cx="12" cy="13" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 13)"/>
        </svg>
      )
    },
    { 
      name: 'GraphQL', 
      category: 'API',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0-3.704 2.138 2.138 2.138 0 1 0 3.704-2.138zm0 14.138a2.138 2.138 0 1 0-3.704-2.138 2.138 2.138 0 1 0 3.704 2.138zm-8.54 4.931a2.138 2.138 0 1 0 0-4.277 2.138 2.138 0 1 0 0 4.277zm-8.542-4.931a2.138 2.138 0 1 0 3.704-2.138 2.138 2.138 0 1 0-3.704 2.138zm0-14.138a2.138 2.138 0 1 0 3.704 2.138 2.138 2.138 0 1 0-3.704-2.138z" fill="#E10098"/>
          <path d="M12.002 7.064L9.016 5.347 3.458 8.653v6.694l5.558 3.306 2.986-1.717 2.986 1.717 5.558-3.306V8.653l-5.558-3.306-2.986 1.717z" fill="none" stroke="#E10098" strokeWidth="1"/>
        </svg>
      )
    }
  ]

  const benefits = [
    'Faster time-to-market with agile development',
    'Scalable architecture for future growth',
    'Modern UI/UX design principles',
    'Cross-platform compatibility',
    'Robust security implementation',
    'Comprehensive testing and QA',
    'Ongoing maintenance and support',
    'Performance optimization'
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed development roadmap.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the user experience and technical architecture for optimal performance and scalability.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing, code reviews, and quality assurance throughout the process.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment to production with ongoing monitoring, maintenance, and feature enhancements.'
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Application Development Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build modern, scalable applications that drive business growth. Our expert team delivers 
                custom software solutions using cutting-edge technologies and industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <a href="#services" className="btn-secondary">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-blue-100">Applications Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">Years Experience</div>
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
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive application development solutions tailored to your business needs and technical requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300 group">
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <div className="font-semibold text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
                Why Choose Our Development Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with business understanding to deliver applications 
                that not only meet your requirements but exceed your expectations.
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
            
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Build Your Application?</h3>
              <p className="text-blue-100 mb-6">
                Let&apos;s discuss your project requirements and create a custom development plan 
                that aligns with your business goals and timeline.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="mr-3" size={20} />
                  <span>Dedicated development team</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>Agile development methodology</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-3" size={20} />
                  <span>Enterprise-grade security</span>
                </div>
              </div>
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center mt-6">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}