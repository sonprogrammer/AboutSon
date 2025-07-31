
import { Link } from "react-router-dom"
import { StyledContainer, StyledLogo, StyledScrolledContainer } from "./style"
import { useEffect, useState } from "react"

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <nav className={`${isScrolled ? StyledScrolledContainer : StyledContainer}`}>
      <Link to={'/'}>
      {isScrolled ? (

        <img src='/namePurple1.svg' alt="logo" className={StyledLogo}/>
      ): (
      <img src="/name2.svg" alt="logo" className={StyledLogo}/>
      )}
      </Link>
    </nav>
  )
}

export default NavbarComponent
