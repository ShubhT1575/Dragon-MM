import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header sticky-on text-normal" style={{background: "black"}}>
        <a className="logo nt-logo" href="/">
          <div className="logo__img bg-none nt-img-logo">
            {" "}
            <img
              decoding="async"
              className="static-logo"
              src="https://irocket.pro/wp-content/uploads/logo-site.png"
              width={280}
              height={77}
              alt="Logo"
            />{" "}
            <img
              decoding="async"
              className="sticky-logo"
              src="https://irocket.pro/wp-content/uploads/logo-site.png"
              width={280}
              height={77}
              alt="Logo"
            />{" "}
          </div>
        </a>
        <div className="menu-primary-container">
          <ul id="menu-primary" className="menu">
            <li
              id="menu-item-10"
              className="menu-item menu-item-type-custom menu-item-object-custom menu__item menu-item-10"
            >
              <a
                className="menu__link"
                // title="MM Tools"
                href="/Mmtools"
                // to="/Mmtools"
              >
                <span className=" " style={{color: "white"}}>
                &nbsp;MM Tools
                </span>
              </a>
            </li>
            <li
              id="menu-item-1139"
              className="menu-item menu-item-type-custom menu-item-object-custom menu__item menu-item-1139"
            >
              <a
                className="menu__link"
                title="DEX Volume Bot"
                href="/DexVolume"
              >
                <span className=" " style={{color: "white"}}>
                DEX Volume Bot
                </span>
              </a>
            </li>
            <li
              id="menu-item-32"
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu__item menu-item-32 active"
            >
              <a
                className="menu__link"
                title="Services"
                href="#"
              >
                <span className=" " style={{color: "white"}}>
                &nbsp;Services
                </span>
              </a>
            </li>
            <li
              id="menu-item-33"
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu__item menu-item-33 active"
            >
              <a
                className="menu__link"
                title="Token"
                href="#"
              >
                <span className=" " style={{color: "white"}}>
                &nbsp;Token
                </span>
              </a>
            </li>
            <li
              id="menu-item-842"
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu__item menu-item-842 active"
            >
              <a
                className="menu__link"
                title="Contact"
                href="#"
              >
                <span className=" " style={{color: "white"}}>
                &nbsp;Contact
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <a href="https://t.me/irocketeng" className="telegram-link">
            <picture decoding="async">
              <source
                type="image/webp"
                srcSet="https://irocket.pro/wp-content/uploads/2018/10/telegram-link.png.webp"
              />
              <source
                type="image/webp"
                data-srcset="https://irocket.pro/wp-content/uploads/2018/10/telegram-link.png.webp"
              />
              {/* <img
                decoding="async"
                src="https://irocket.pro/wp-content/uploads/2018/10/telegram-link.png"
              /> */}
              {/* <img
                className="lazy"
                decoding="async"
                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20%20%22%3E%3C/svg%3E"
                data-src="https://irocket.pro/wp-content/uploads/2018/10/telegram-link.png"
              /> */}
            </picture>
          </a>
          <div className="sign-in-wrap btn btn-secondary-gradient">
            <a
              href="https://t.me/irocketeng"
              target="_target"
              className="btn-sign-in"
            >
              Join
            </a>
          </div>
        </div>
        <div className="btn-menu">
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
      </header>

      <div className="fixed-menu text-normal">
        <div className="fixed-menu__header">
          <a
            className="logo logo--color mob-sticky-logo nt-logo"
            href="https://irocket.pro/"
          >
            <div className="logo__img bg-none nt-img-logo">
              {" "}
              <img
                decoding="async"
                className="static-logo"
                src="https://irocket.pro/wp-content/uploads/logo-site.png"
                width={280}
                height={77}
                alt="Logo"
              />
              <img
                decoding="async"
                className="sticky-logo"
                src="https://irocket.pro/wp-content/uploads/logo-site.png"
                width={280}
                height={77}
                alt="Logo"
              />
            </div>
          </a>
          <div className="btn-close">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 47.971 47.971"
              style={{ enableBackground: "new 0 0 47.971 47.971" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
                fill="#006DF0"
              />
            </svg>{" "}
          </div>
        </div>
        <div className="fixed-menu__content">
          <div className="menu-primary-container">
            <ul id="menu-primary-1" className="mob-menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom mob-menu__item menu-item-10">
                <a
                  className="mob-menu__link"
                  title="MM Tools"
                  href="https://irocket.pro/market-maker-tools"
                >
                  <span className=" " />
                  &nbsp;MM Tools
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom mob-menu__item menu-item-1139">
                <a
                  className="mob-menu__link"
                  title="DEX Volume Bot"
                  href="https://irocket.pro/market-maker-tools-volume-on-dex"
                >
                  DEX Volume Bot
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home mob-menu__item menu-item-32 active">
                <a
                  className="mob-menu__link"
                  title="Services"
                  href="https://irocket.pro/#services"
                >
                  <span className=" " />
                  &nbsp;Services
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home mob-menu__item menu-item-33 active">
                <a
                  className="mob-menu__link"
                  title="Token"
                  href="https://irocket.pro/#token"
                >
                  <span className=" " />
                  &nbsp;Token
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home mob-menu__item menu-item-842 active">
                <a
                  className="mob-menu__link"
                  title="Contact"
                  href="https://irocket.pro/#contact"
                >
                  <span className=" " />
                  &nbsp;Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-wrap mob-on">
            {" "}
            <a href="https://t.me/irocketeng" className="btn-sign-in">
              Join
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
