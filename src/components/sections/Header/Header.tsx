import Logo from '../../ui/Logo'
import logo from '/logo.svg'

const Header = () => {
  return (
    <header className='font-main flex justify-center pt-12.5 pb-10.25 md:pt-10.25'>
      <Logo>
        <a href="#!" className='inline-block focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:outline-2'>
          <img src={logo} alt="Splitter's logo" />
        </a>
      </Logo>
    </header>
  )
}

export default Header