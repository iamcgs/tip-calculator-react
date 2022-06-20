import React from 'react';

function Footer() {
  return (
    <>
      <footer className="mx-auto my-4 text-center">
        <p>
          Challenge by {''}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . <br /> Coded by{' '}
          <a href="https://github.com/iamcgs" className="text-grayishCyan">
            Carla
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default Footer;
