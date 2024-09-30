import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
export default function App() {
  return (
    <main className="max-w-9xl mx-auto">
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
  
      <Contact/>
      <Footer/>
      <Toaster />
    </main>
  )
  }