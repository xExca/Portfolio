import About from "../Components/About"
import Experience from "../Components/Experience"
import Projects from "../Components/Projects"

const AboutPage = () => {
  document.title = "About of Onins"
  return (
      <>
      <About />
      <Experience />
      <Projects />
      </>
  )
}

export default AboutPage