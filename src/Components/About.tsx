import { CiFacebook, CiLinkedin } from "react-icons/ci"
import { MdOutlineEmail } from "react-icons/md"
import { toast } from "react-toastify"

const About = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nino.dainell.austral@gmail.com')
    toast.success('Copied to clipboard!');
  }

  return (
    <div className="flex flex-col items-start justify-start gap-5">
      <h1 className="text-4xl font-extrabold">About me</h1>
      <div className="text-2xl">
        <p className="text">I'm Niño—but you can call me Onins. I'm a full-stack developer at the National Center for Mental Health, building React front ends and Laravel back ends. I've been coding since senior high, starting with plain HTML/CSS/JS and growing into modern frameworks. <br/><br/>
        My motto: Every challenge is an opportunity to learn. I bring a growth mindset to every project and challenge, guided by a simple motto: every challenge is an opportunity to learn.</p>
      </div>
      <div className="flex flex-row gap-2 text-4xl">
        <CiLinkedin onClick={() => window.open("https://www.linkedin.com/in/onins/", "_blank")} />
        <CiFacebook onClick={() => window.open("https://www.facebook.com/Mr.Austral/", "_blank")} />
        <MdOutlineEmail onClick={handleCopyEmail} />
      </div>
    </div>
  )
}

export default About