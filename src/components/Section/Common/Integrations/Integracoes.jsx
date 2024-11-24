"use client";
import Link from "next/link";
import Image from "next/image";

const integrationsection = () => {
  return (
    <div className="section wizebot-section-padding">
      <div className="container">
        <div className="wizebot-section-title wizebot-two-column-title">
          <div className="row">
            <div className="col-lg-8">
              <h2>Integração com dezenas de ferramentas</h2>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="wizebot-title-btn">
                <Link className="wizebot-default-btn pill" href="integracoes">
                  <span>Ver mais integrações</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="wizebot-tools-wrap">
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools1.png"
              alt="Tool 1"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools2.png"
              alt="Tool 2"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools3.png"
              alt="Tool 3"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools4.png"
              alt="Tool 4"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools5.png"
              alt="Tool 5"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools6.png"
              alt="Tool 6"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools7.png"
              alt="Tool 7"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools8.png"
              alt="Tool 8"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools9.png"
              alt="Tool 9"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools10.png"
              alt="Tool 10"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools11.png"
              alt="Tool 11"
              width={80}
              height={80}
            />
          </div>
          <div className="wizebot-tools-item">
            <Image
              src="/images/v2/tools/tools12.png"
              alt="Tool 12"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default integrationsection;
