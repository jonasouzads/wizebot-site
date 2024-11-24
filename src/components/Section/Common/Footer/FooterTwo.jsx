/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterTwo = () => {
  return (
    <footer className="wizebot-footer-section">
      <div className="container">
        <div className="wizebot-footer-top">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="wizebot-footer-textarea">
                <Link href="/">
                  <Image src="/images/logo/logo-dark.svg" alt="WizeBot Logo" width={150} height={40} priority />
                </Link>
                <p>
                  Acreditamos que serviços de qualidade não precisam ser inacessíveis. 
                  Na WizeBot, estamos empenhados em levar o melhor atendimento e soluções 
                  inovadoras aos nossos clientes a um custo razoável.
                </p>
                <div className="wizebot-social-icon social-box">
                  <ul>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="wizebot-footer-menu">
                <div className="wizebot-footer-title">
                  <p>Produto</p>
                </div>
                <ul>
                  <li><Link href="/">Início</Link></li>
                  <li><Link href="/sobre">Sobre</Link></li>
                  <li><Link href="/funcionalidade">Funcionalidade</Link></li>
                  <li><Link href="/planos">Planos</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="wizebot-footer-menu">
                <div className="wizebot-footer-title">
                  <p>Institucional</p>
                </div>
                <ul>
                  <li><Link href="/politicas-de-privacidade">Políticas de Privacidade</Link></li>
                  <li><Link href="/termos-de-uso">Termos de Uso</Link></li>
                  <li><Link href="/politicas-de-reembolso">Políticas de Reembolso</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="wizebot-footer-menu">
                <div className="wizebot-footer-title">
                  <p>Recursos</p>
                </div>
                <ul>
                  <li><Link href="https://help.wizebot.com.br" target="_blank" rel="noopener noreferrer">Centro de Ajuda</Link></li>
                  <li><Link href="https://wa.me/559192226534" target="_blank" rel="noopener noreferrer">Suporte via WhatsApp</Link></li>
                  <li><Link href="/custo-por-mensagens">Calculadora de Custos</Link></li>
                  <li><Link href="/gerador-links">Gerador de Links para WhatsApp</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="wizebot-footer-bottom center">
          <div className="wizebot-copywright">
            <p>&copy; {new Date().getFullYear()} WizeBot. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
