
import { Link } from "react-router-dom"
import { StyledContainer, StyledLogo } from "./style"

const NavbarComponent = () => {
  return (
    <nav className={StyledContainer}>
      <Link to={'/'}>
        <img src='/name2.svg' alt="logo" className={StyledLogo}/>
      </Link>
    </nav>
  )
}

export default NavbarComponent
