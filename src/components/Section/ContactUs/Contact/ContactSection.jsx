import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="section wizebot-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="wizebot-default-content m-right">
              <h2>Entre em contato com nossa equipe de suporte</h2>
              <p>
                Agende uma reunião com nossa equipe agora! Se você tiver alguma dúvida
                sobre como expandir seu negócio, entre em contato com nossa equipe e
                agende uma chamada.
              </p>
              <div className="wizebot-extara-mt">
                <div className="wizebot-iconbox-wrap-left d-block">
                  <div className="wizebot-iconbox-data data-small">
                    <span>Redes Sociais:</span>
                    <div className="wizebot-social-icon social-box">
                      <ul>
                        <li>
                          <Link href="https://twitter.com/">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://facebook.com/">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">
                            <FaLinkedin />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://github.com/">
                            <FaGithub />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wizebot-form-wrap">
              <h3>Preencha o formulário abaixo</h3>
              <form action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="wizebot-main-form">
                      <input type="text" placeholder="Seu Nome*" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="wizebot-main-form">
                      <input type="email" placeholder="Endereço de E-mail*" />
                    </div>
                  </div>
                </div>
                <div className="wizebot-main-form">
                  <input type="text" placeholder="Assunto" />
                </div>
                <div className="wizebot-main-form">
                  <textarea
                    name="textarea"
                    placeholder="Escreva sua mensagem"
                  ></textarea>
                </div>
                <button id="wizebot-submit-btn" type="button">
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
