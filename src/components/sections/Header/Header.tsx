import Logo from '../../ui/Logo'

const Header = () => {
  return (
    <header className='font-main flex justify-center pt-12.5 pb-10.25 md:pt-10.25 md:pb-16'>
      <Logo>
        <img className='select-none focus-visible:outline-primary focus-visible:outline-offset-4 focus-visible:outline-2'
          src="/logo.svg"
          alt="The logo of Splitter"
          width="87"
          height="54"
          fetchPriority="high"
          draggable="false" />
      </Logo>
    </header>
  )
}

export default Header