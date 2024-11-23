"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const Header = ({ logoSrc }) => {
  const [isActive, setIsActive] = useState(false);
  const [subMenuArray, setSubMenuArray] = useState([]);
  const [subMenuTextArray, setSubMenuTextArray] = useState([]);


  const menuMainClickHandler = (e) => {
    if (typeof window !== "undefined" && window.innerWidth <= 991) {
      document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
      });

      const hasChildren = e.target.closest(".nav-item-has-children");
      if (hasChildren) {
        e.preventDefault();
        if (hasChildren.classList.contains("nav-item-has-children")) {
          showSubMenu(hasChildren);
        }
      }
    }
  };

  const goBackClickHandler = () => {
    const lastItem = subMenuArray.slice(-1)[0];
    const lastItemText = subMenuTextArray.slice(-2)[0];
    setSubMenuArray(subMenuArray.slice(0, -1));
    setSubMenuTextArray(subMenuTextArray.slice(0, -1));
    if (lastItem) {
      if (subMenuArray.length >= 0) {
        if (
          !document
            .getElementById(lastItem)
            .classList.contains("nav-item-has-children")
        ) {
          document.getElementById(lastItem).style.animation =
            "slideRight 0.5s ease forwards";
          document.querySelector(".current-menu-title").innerHTML =
            lastItemText;
          setTimeout(() => {
            document.getElementById(lastItem).classList.remove("active");
          }, 300);
        } else {
          document.querySelector(".go-back").classList.remove("active");
        }
      }
    }
    if (subMenuArray.length === 1) {
      document.querySelector(".mobile-menu-head").classList.remove("active");
    }
  };

  const menuTriggerClickHandler = () => {
    toggleMenu();
  };

  const closeMenuClickHandler = () => {
    toggleMenu();
    const submenuAll = document.querySelectorAll(".sub-menu");
    submenuAll.forEach(submenu => {
      submenu.classList.remove("active");
      submenu.style.animation = "";
    });
  
    document.querySelector(".go-back").classList.remove("active");
  };

  const overlayClickHandler = () => {
    toggleMenu();
  };

  const toggleMenu = useCallback(() => {
    setIsActive(!isActive);
    document.querySelector(".menu-overlay").classList.toggle("active");
  }, [isActive]);

  const showSubMenu = (hasChildren) => {
    const submenuAll = document.querySelectorAll(".sub-menu");
    submenuAll.forEach((submenu) => submenu.classList.remove());
    const subMenu = hasChildren.querySelector(".sub-menu");
    setSubMenuArray([...subMenuArray, subMenu.id]);
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
    setSubMenuTextArray([...subMenuTextArray, menuTitle]);
    document.querySelector(".current-menu-title").innerHTML = menuTitle;
    document.querySelector(".mobile-menu-head").classList.add("active");
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth > 991) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggleMenu]);

  return (
    <header
      className="site-header site-header--menu-center wizebot-header-section dark-bg white-menu"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <BrandLogo imageSrc="/images/logo/logo-white.svg" />
          <div className="menu-block-wrapper">
            <div className="menu-overlay"></div>
            <nav
              className={`menu-block ${isActive ? "active" : ""}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div className="go-back" onClick={goBackClickHandler}>
                  <FaAngleLeft />
                </div>
                <div className="current-menu-title"></div>
                <div
                  className="mobile-menu-close"
                  onClick={closeMenuClickHandler}
                >
                  {" "}
                  &times;
                </div>
              </div>
              <ul className="site-menu-main" onClick={menuMainClickHandler}>
                <li className="nav-item">
                  <Link href="/" className="nav-link-item">
                    Início
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/pricing" className="nav-link-item">
                    Preços
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="https://help.wizebot.com.br/" className="nav-link-item" target="_blank">
                    Ajuda
                  </Link>
                </li>
                <li className="nav-item nav-item-has-children">
                  <Link href="" className="nav-link-item drop-trigger">
                    Utilidades{" "}
                    <i>
                      <FaAngleDown />
                    </i>
                  </Link>
                  <ul className="sub-menu" id="submenu-2">
                    <li className="sub-menu--item">
                      <Link href="https://api.whatsapp.com/send?phone=5511999999999" target="_blank">
                        <span className="menu-item-text">Suporte via WhatsApp</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="/calculadora">
                        <span className="menu-item-text">Calculadora de Custos</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="/gerador-whatsapp">
                        <span className="menu-item-text">Gerador de Links para WhatsApp</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="/organizador-contatos">
                        <span className="menu-item-text">Organizador de Contatos</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="/gerador-qrcode">
                        <span className="menu-item-text">Gerador de QR Code</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <div className="wizebot-header-btn-wrap">
              <Link className="wizebot-login-btn" href="https://app.wizebot.com.br/login" target="_blank">
                Login
              </Link>
            </div>
            <Link
              className="wizebot-default-btn wizebot-header-btn"
              href="/pricing"
            >
              <span>Comece Agora</span>
            </Link>
          </div>
          <div
            className="mobile-menu-trigger light"
            onClick={menuTriggerClickHandler}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
