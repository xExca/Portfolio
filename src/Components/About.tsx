import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai"
import { IoMailOutline } from "react-icons/io5"
import { toast } from "react-toastify"

const About = () => {
  
  const start = new Date(2024, 9, 16) 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nino.dainell.austral@gmail.com')
    toast.success('Copied to clipboard!');
  }

  const calculateTenure = () => {
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years -= 1
      months += 12
    }

    const parts = []
    if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`)
    if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`)

    return parts.join(' and ') || 'less than a month'
  }

  return (
    <div className="flex flex-col items-start justify-start gap-5">
      <h1 className="text-4xl font-extrabold">About me</h1>
      <div className="text-2xl">
      <span className="text">I'm Niño Daiñell M Austral — but you can call me Onins. 
        I'm a full-stack developer at the National Center for Mental Health for almost{" "}
        <span className="relative group inline-block cursor-help">
          <span className="border-b border-dashed border-current">
            {calculateTenure()}
          </span>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-sm font-normal not-italic whitespace-nowrap
            bg-gray-900 text-white dark:bg-white dark:text-gray-900
            rounded-md shadow-lg
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            pointer-events-none">
            Since {start.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
          </span>
        </span>, building React front ends and Laravel back ends. 
        I've been coding since senior high, starting with plain HTML/CSS/JS and growing into modern frameworks.
      </span>
      <span className="mt-2 block italic">
        Every challenge is an opportunity to learn. I bring a growth mindset to every project and challenge, guided by a simple motto: every challenge is an opportunity to learn.
      </span>
    </div>
      <div className="flex flex-row gap-3 text-4xl">
        <AiFillLinkedin
          onClick={() => window.open("https://www.linkedin.com/in/onins/", "_blank")}
          className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-[#0A66C2]"
        />
        <AiFillFacebook
          onClick={() => window.open("https://www.facebook.com/Mr.Austral/", "_blank")}
          className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-[#1877F2]"
        />
        <IoMailOutline
          onClick={handleCopyEmail}
          className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-rose-500"
        />
      </div>
    </div>
  )
}

export default About