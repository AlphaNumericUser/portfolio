const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5" >

        <div className="text-white-500 flex gap-2" >
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3" >
          <a className="social-icon" href="https://github.com/AlphaNumericUser" target="_blank" rel="noopener noreferrer">
            <img className="w-1/2 h-1/2" src="/assets/github.svg" alt="github" />
          </a>
          <a className="social-icon" href="https://www.linkedin.com/in/alfredo-diaz-mx/" target="_blank" rel="noopener noreferrer">
            <img className="w-1/2 h-1/2" src="/assets/logo-linkedin.svg" alt="linkedin" />
          </a>
        </div>

        <p className="text-white-500" >
          &copy; {currentYear}, All Rights Reserved
        </p>

    </section>
  )
}

export default Footer