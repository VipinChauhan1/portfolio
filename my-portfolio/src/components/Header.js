import React from 'react';

const Header = ({ setActiveSection }) => {
  const scrollToSection = (id) => {
    setActiveSection(id);
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
