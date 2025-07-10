import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Hero from "./sections/Hero"
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <Hero />
  )
}

export default App