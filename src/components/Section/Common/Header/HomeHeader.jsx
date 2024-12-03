"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const HomeHeader = ({ logoSrc, roundedBtn }) => {
  const [isActive, setIsActive] = useState(false);
  const [subMenuArray, setSubMenuArray] = useState([]);
  const [subMenuTextArray, setSubMenuTextArray] = useState([]);
  const [scrollClassName, setScrollClassName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClassName("sticky-menu");
      } else {
        setScrollClassName("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuMainClickHandler = (e) => {
    if (typeof window !== "undefined" && window.innerWidth <= 991) {
      const hasChildren = e.target.closest(".nav-item-has-children");
      if (hasChildren) {
        e.preventDefault();
        hasChildren.classList.toggle("active");
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
    submenuAll.forEach((submenu) => {
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
    submenuAll.forEach((submenu) => {
      submenu.classList.remove("active");
      submenu.style.animation = "";
    });
    const subMenu = hasChildren.querySelector(".sub-menu");
    setSubMenuArray([...subMenuArray, subMenu.id]);
    subMenu.classList.add("active");
    const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
    setSubMenuTextArray([...subMenuTextArray, menuTitle]);
  };

  useEffect(() => {
    const handleResize = () => {
      if (
        typeof window !== "undefined" &&
        window.innerWidth > 991 &&
        isActive
      ) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isActive, toggleMenu]);

  return (
    <header
      className={`site-header site-header--menu-center wizebot-header-section bg-white ${scrollClassName}`}
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <BrandLogo imageSrc={logoSrc} />
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
                  <Link href="/planos" className="nav-link-item">
                    Planos
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
                      <Link href="https://api.whatsapp.com/send?phone=559192226534" target="_blank">
                        <span className="menu-item-text">Suporte via WhatsApp</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="/custo-por-mensagens">
                        <span className="menu-item-text">Calculadora de Custos</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="https://tools.wizebot.com.br/links" target="_blank">
                        <span className="menu-item-text">Gerador de Links</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="https://tools.wizebot.com.br/organizar" target="_blank">
                        <span className="menu-item-text">Organizador de Contatos</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="https://tools.wizebot.com.br/qrcode" target="_blank">
                        <span className="menu-item-text">Gerador de QR Code</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="https://tools.wizebot.com.br/mensagens" target="_blank">
                        <span className="menu-item-text">Mensagem de Modelo com IA</span>
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
              className={`${
                roundedBtn
                  ? "wizebot-default-btn wizebot-header-btn pill"
                  : "wizebot-default-btn wizebot-header-btn"
              }`}
              href="planos"
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

export default HomeHeader;
