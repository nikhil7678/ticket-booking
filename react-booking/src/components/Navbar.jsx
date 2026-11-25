import { useState } from 'react'

const links = [
  { href: '#matches', label: 'Matches' },
  { href: '#about', label: 'About' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="site-header" id="home">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          IPL<span>2026</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links${isOpen ? ' is-open' : ''}`} id="primary-navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#matches" onClick={closeMenu}>
            Book tickets
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
