import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap/all"
import Hero from "./sections/Hero"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const App = () => {
  return (
    <Hero />
  )
}

export default App