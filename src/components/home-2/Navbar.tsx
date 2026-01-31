"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 991 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-doc-height="1" role="banner" className="navbar w-nav">
      <div className="nav-container w-container">
        <div className="nav-menu-wrapper">
          <a href="/home-1" className="brand w-nav-brand">
            <img src="/logo.svg" loading="lazy" alt="logo" height="74" className="navbar-logo" />
          </a>
          <nav
            id="main-nav"
            role="navigation"
            className="nav-menu w-nav-menu"
            data-nav-menu-open={isOpen ? "" : undefined}
            onClick={(event) => {
              if (!isOpen) return;
              const target = event.target as HTMLElement | null;
              if (target?.closest("a")) {
                closeMenu();
              }
            }}
          >
            <div className="tablet-menu">
              <a href="/home-1" className="brand-tablet w-nav-brand">
                <img src="/logo.svg" loading="lazy" alt="logo" height="30" className="navbar-logo" />
              </a>
              <div className={`close-menu-button w-nav-button${isOpen ? " w--open" : ""}`} onClick={closeMenu} role="button" aria-label="Close menu" aria-expanded={isOpen}>
                <img src="images/icon-20-18-.svg" loading="lazy" alt="navbar icon" className="nav-close-icon" />
              </div>
            </div>
            <div className="menu-wrap">
              <div className="relative-navbar-block">
                <div className="nav-dropdown">
                  <a href="#directions" className="nav-dropdown-toggle w-inline-block">
                    <p className="nav-item-title">Directions</p>
                  </a>
                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div className="nav-dropdown">
                  <a href="#advantages" className="nav-dropdown-toggle w-inline-block">
                    <p className="nav-item-title">Advantages</p>
                  </a>
                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div className="nav-dropdown">
                  <a href="#process" className="nav-dropdown-toggle w-inline-block">
                    <p className="nav-item-title">Process</p>
                  </a>
                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div className="nav-dropdown">
                  <a href="#cases" className="nav-dropdown-toggle w-inline-block">
                    <p className="nav-item-title">Cases</p>
                  </a>
                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div className="nav-dropdown">
                  <a href="#team" className="nav-dropdown-toggle w-inline-block">
                    <p className="nav-item-title">Team</p>
                  </a>
                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div className="nav-dropdown">
                  <a href="#rates" className="nav-dropdown-toggle w-inline-block">
                    <p className="nav-item-title">Rates</p>
                  </a>
                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div className="nav-dropdown">
                  <a href="#reviews" className="nav-dropdown-toggle w-inline-block">
                    <p className="nav-item-title">Reviews</p>
                  </a>
                </div>
                <div className="hover-line"></div>
              </div>
              <div className="search-shop-con tablet">
                <a href="#contact-form" className="link-block w-inline-block">
                  <div className="button-text">Job post</div>
                </a>
              </div>
            </div>
          </nav>
          <div className="search-shop-con">
            <a href="#contact-form" className="primary-button-black w-inline-block">
              <div className="button-text">Job post</div>
            </a>
          </div>
          <div
            className={`menu-button w-nav-button${isOpen ? " w--open" : ""}`}
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="main-nav"
          >
            <img src="images/icon-20-17-.svg" loading="lazy" alt="navbar icon" height="16" className="image-burger" />
          </div>
        </div>
      </div>
    </div>
  );
}
