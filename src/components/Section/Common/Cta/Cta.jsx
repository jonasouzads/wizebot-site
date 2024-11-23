import Link from "next/link";
import Image from "next/image";

const Cta = () => {
  return (
    <div className="wizebot-cta-section blue-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-lg-2 d-flex align-items-center">
            <div className="wizebot-default-content light">
              <h2>Teste a Wizebot Gratuitamente!</h2>
              <p>
              Sem experiência em tecnologia? Sem problemas.
              Você terá acesso à todas as vídeos aulas ensinado a utilizar!
              </p>
              <div className="wizebot-extara-mt">
                <div className="wizebot-app-wrap">
                  <Link className="wizebot-app" href="contact-us">
                    <Image src="/images/v1/play-store.png" alt="Google Play Store" width={180} height={60} />
                  </Link>
                  <Link className="wizebot-app" href="contact-us">
                    <Image src="/images/v1/app-store.png" alt="Apple App Store" width={180} height={60} />
                  </Link>
                  <div className="wizebot-cta-shape">
                    <Image src="/images/v1/shape2.png" alt="Decorative Shape" width={200} height={200} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="wizebot-cta-thumb">
              <Image src="/images/v1/cta-mocup.png" alt="Wizebot App Mockup" width={500} height={600} priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
