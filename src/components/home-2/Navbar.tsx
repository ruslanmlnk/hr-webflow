export default function Navbar() {
  return (
    <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-doc-height="1" role="banner" className="navbar w-nav">
      <div className="nav-container w-container">
        <div className="nav-menu-wrapper">
          <a href="/home-1" className="brand w-nav-brand">
            <img src="logo.svg" loading="lazy" alt="logo
" height="74" className="navbar-logo" />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <div className="tablet-menu">
              <a href="/home-1" className="brand-tablet w-nav-brand">
                <img src="images/logo.svg" loading="lazy" alt="logo
" height="30" className="navbar-logo" />
              </a>
              <div className="close-menu-button w-nav-button">
                <img src="images/icon-20-18-.svg" loading="lazy" alt="navbar icon" className="nav-close-icon" />
              </div>
            </div>
            <div className="menu-wrap">
              <div className="relative-navbar-block">
                <div data-hover="true" data-delay="0" data-w-id="835e7a36-0bd9-c0ee-0eee-ba31bc15d1f8" className="nav-dropdown w-dropdown">
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    <p className="nav-item-title">Directions</p>
                  </div>

                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div data-hover="true" data-delay="0" data-w-id="7f0cee47-bd65-a737-7549-2d97015e5ea1" className="nav-dropdown w-dropdown">
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    <p className="nav-item-title">Advantages</p>
                  </div>

                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div data-hover="true" data-delay="0" data-w-id="835e7a36-0bd9-c0ee-0eee-ba31bc15d1c3" className="nav-dropdown w-dropdown">
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    <p className="nav-item-title">Process</p>
                  </div>

                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div data-hover="true" data-delay="0" data-w-id="835e7a36-0bd9-c0ee-0eee-ba31bc15d1a0" className="nav-dropdown w-dropdown">
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    <p className="nav-item-title">Cases</p>
                  </div>

                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div data-hover="true" data-delay="0" data-w-id="835e7a36-0bd9-c0ee-0eee-ba31bc15d1e5" className="nav-dropdown w-dropdown">
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    <p className="nav-item-title">Team</p>
                  </div>

                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div className="nav-dropdown">
                  <a href="/blog" className="nav-dropdown-toggle w-inline-block">
                    <p className="nav-item-title">Rates</p>
                  </a>
                </div>
                <div className="hover-line _2"></div>
              </div>
              <div className="relative-navbar-block">
                <div data-hover="true" data-delay="0" data-w-id="835e7a36-0bd9-c0ee-0eee-ba31bc15d130" className="nav-dropdown w-dropdown">
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    <p className="nav-item-title">Reviews</p>
                  </div>

                </div>
                <div className="hover-line"></div>
              </div>
              <div className="search-shop-con tablet">
                <a href="/job-post" className="link-block w-inline-block">
                  <div className="button-text">Job post</div>
                </a>
              </div>
            </div>
          </nav>
          <div className="search-shop-con">
            <a href="/job-post" className="primary-button-black w-inline-block">
              <div className="button-text">Job post</div>
            </a>
          </div>
          <div className="menu-button w-nav-button">
            <img src="images/icon-20-17-.svg" loading="lazy" alt="navbar icon" height="16" className="image-burger" />
          </div>
        </div>
      </div>
    </div>
  );
}
