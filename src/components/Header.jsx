import React from 'react';
import Logo from '../images/logo.svg';

function Header() {
  return (
    <>
      <header className="flex items-center justify-center p-12  text-center md:p-20 ">
        <img src={Logo} alt="Splitter" />
      </header>
    </>
  );
}

export default Header;
