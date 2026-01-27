import Logo from '../../ui/Logo'
import logo from '/logo.svg'

const Header = () => {
  return (
    <header className='font-main flex justify-center'>
      <Logo>
        <a href="#!">
          <img src={logo} alt="Splitter's logo" />
        </a>
      </Logo>
    </header>
  )
}

export default Header