import { Helmet } from "react-helmet-async"
import About from "../Components/About"
import Experience from "../Components/Experience"
import Projects from "../Components/Projects"

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Niño Austral — Full Stack Developer</title>
        <meta name="description" content="Portfolio of Niño Daiñell Austral, a Full Stack Developer specializing in React, TypeScript, Laravel, and more." />
        <meta name="keywords" content="Niño Austral, Nino Austral, Full Stack Developer, React Developer, Laravel, Philippines, Nino Portfolio, Niño Portfolio, Onins Portfolio, Oñins Portfolio" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Niño Austral — Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Niño Daiñell Austral, Full Stack Developer." />
        <meta property="og:url" content="https://xexca.github.io/Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xexca.github.io/Portfolio/assets/thumbnail.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Niño Austral — Full Stack Developer" />
        <meta name="twitter:description" content="Portfolio of Niño Daiñell Austral, Full Stack Developer." />
      </Helmet>
      <About />
      <Experience />
      <Projects />
    </>
  )
}

export default AboutPage