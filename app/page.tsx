import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
// import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <About />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  )
}