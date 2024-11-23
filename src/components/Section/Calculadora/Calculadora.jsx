"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BsCalculator, BsWhatsapp, BsCurrencyDollar, BsArrowRepeat, BsCheckCircleFill } from 'react-icons/bs';
import { FaComments, FaRocket, FaChartLine, FaLock } from 'react-icons/fa';
import CountUp from 'react-countup';
import Marquee from "react-fast-marquee";
import Slider from "react-slick";

// Import slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Calculadora = () => {
  const [modelo, setModelo] = useState("0.0080");
  const [cotacao, setCotacao] = useState(5.71);
  const [quantidade, setQuantidade] = useState(1);
  const [custoEstimado, setCustoEstimado] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const modelos = {
    "0.0080": { 
      nome: "Utilidade", 
      preco: 0.0080,
      icon: FaComments,
      desc: "Suporte e atendimento ao cliente"
    },
    "0.0625": { 
      nome: "Marketing", 
      preco: 0.0625,
      icon: FaChartLine,
      desc: "Perfeito para campanhas e promoções"
    },
    "0.0315": { 
      nome: "Autenticação", 
      preco: 0.0315,
      icon: FaLock,
      desc: "Segurança e verificação em dois fatores"
    },
  };

  const beneficios = [
    "Atendimento 24/7 automatizado",
    "Integração com sistemas existentes",
    "Relatórios detalhados em tempo real",
    "Suporte técnico especializado",
    "Segurança e conformidade",
    "Escalabilidade garantida"
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const obterCotacao = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
      const data = await response.json();
      if (data.USDBRL) {
        setCotacao(parseFloat(data.USDBRL.high));
      }
    } catch (error) {
      console.error('Erro ao obter cotação:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    obterCotacao();
  }, [obterCotacao]);

  const calcularCusto = (modeloValor = modelo, cotacaoValor = cotacao, quantidadeValor = quantidade) => {
    const custo = parseFloat(modeloValor) * cotacaoValor * quantidadeValor;
    setCustoEstimado(custo);
  };

  const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleModeloChange = (e) => {
    setModelo(e.target.value);
    calcularCusto(e.target.value, cotacao, quantidade);
  };

  const handleCotacaoChange = (e) => {
    const valor = parseFloat(e.target.value) || 0;
    setCotacao(valor);
    calcularCusto(modelo, valor, quantidade);
  };

  const handleQuantidadeChange = (e) => {
    const valor = parseInt(e.target.value);
    setQuantidade(valor);
    calcularCusto(modelo, cotacao, valor);
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <Marquee className="bg-primary bg-gradient text-white py-2 mb-4" gradient gradientColor={[13, 110, 253]} speed={40}>
        <span className="mx-4">💬 Transforme seu atendimento com WhatsApp Business</span>
        <span className="mx-4">🚀 Aumente suas vendas com automação</span>
        <span className="mx-4">✨ Melhore a experiência dos seus clientes</span>
        <span className="mx-4">📈 Escale seu negócio com inteligência</span>
      </Marquee>

      <Container className="py-4">
        <Row className="g-5">
          {/* Informações */}
          <Col lg={6} className="order-1 order-lg-1">
            <div className="mb-5 position-relative">
              {/* Removed decorative circle div */}
              <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-4">
                <BsCalculator size={32} className="text-primary" />
              </div>
              <h1 className="display-4 fw-bold mb-4 text-gradient">
                Calcule seus custos do WhatsApp Business
              </h1>
              <p className="fs-5 text-secondary">
                A Calculadora do WhatsApp Business API é uma ferramenta útil para as empresas
                calcularem o custo da utilização do WhatsApp para as suas comunicações.
              </p>
            </div>

            {/* Calculadora em Mobile */}
            <div className="d-block d-lg-none mb-4">
              <Card className="border-0 shadow-lg calculator-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <BsCurrencyDollar size={24} className="text-primary" />
                    </div>
                    <h2 className="h4 fw-bold mb-0">Calculadora de Custos</h2>
                  </div>
                  {/* Formulário da Calculadora */}
                  <Form className="space-y-4">
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold">Escolha o modelo:</Form.Label>
                      <div className="modelo-options">
                        {Object.entries(modelos).map(([valor, { nome, preco, icon: Icon, desc }]) => (
                          <div
                            key={valor}
                            onClick={() => handleModeloChange({ target: { value: valor } })}
                            className={`modelo-option ${modelo === valor ? 'selected' : ''}`}
                          >
                            <div className="d-flex align-items-center">
                              <div className={`icon-wrapper ${modelo === valor ? 'selected' : ''}`}>
                                <Icon size={24} />
                              </div>
                              <div className="ms-3 flex-grow-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <h6 className="mb-0 fw-bold">{nome}</h6>
                                  <span className="price">${preco.toFixed(4)}/msg</span>
                                </div>
                                <p className="small text-muted mb-0">{desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold">Cotação atual do dólar (R$):</Form.Label>
                      <div className="input-group input-group-lg">
                        <Form.Control
                          type="number"
                          value={cotacao}
                          onChange={handleCotacaoChange}
                          step="0.01"
                          placeholder="Ex: 5.20"
                        />
                        <Button 
                          variant="outline-primary"
                          onClick={obterCotacao}
                          className="d-flex align-items-center"
                          disabled={isLoading}
                        >
                          <BsArrowRepeat size={20} className={`me-2 ${isLoading ? 'rotate' : ''}`} />
                          {isLoading ? 'Atualizando...' : 'Atualizar'}
                        </Button>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold">Quantidade de mensagens:</Form.Label>
                      <div className="d-flex align-items-center mb-3">
                        <CountUp
                          end={quantidade}
                          duration={0.5}
                          separator="."
                          className="display-5 fw-bold text-primary me-2"
                        />
                        <span className="fs-5 text-secondary">mensagens</span>
                      </div>
                      <Form.Range
                        value={quantidade}
                        onChange={handleQuantidadeChange}
                        min="1"
                        max="10000"
                        className="form-range custom-range"
                      />
                      <div className="d-flex justify-content-between text-secondary mt-2">
                        <span>1</span>
                        <span>5.000</span>
                        <span>10.000</span>
                      </div>
                    </Form.Group>

                    <Card className="bg-gradient border-0 shadow-lg hover-scale" 
                      style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                      <Card.Body className="p-4">
                        <div className="text-dark">
                          <p className="fs-5 mb-2 text-muted">Custo Estimado</p>
                          <div className="d-flex align-items-center justify-content-between">
                            <CountUp
                              end={custoEstimado}
                              duration={0.5}
                              decimals={2}
                              decimal=","
                              prefix="R$ "
                              separator="."
                              className="display-4 fw-bold mb-0 text-dark"
                            />
                            <div className="ms-3 fs-4 text-muted">BRL</div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Form>
                </Card.Body>
              </Card>
            </div>

            <Card className="border-0 shadow-lg mb-4 hover-scale">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <FaComments size={24} className="text-primary" />
                  </div>
                  <h2 className="h3 fw-bold mb-0">O que é uma conversa?</h2>
                </div>
                <Slider {...sliderSettings} className="text-center mb-4">
                  <div>
                    <p className="text-secondary mb-0">
                      Quando as empresas utilizam o WhatsApp API, são cobradas com base no número
                      de conversas que têm com os seus clientes.
                    </p>
                  </div>
                  <div>
                    <p className="text-secondary mb-0">
                      Uma conversa começa quando uma mensagem é enviada e a sessão tem a duração de 24 horas.
                    </p>
                  </div>
                  <div>
                    <p className="text-secondary mb-0">
                      Todas as mensagens dentro do período de 24 horas fazem parte da mesma conversa.
                    </p>
                  </div>
                </Slider>
              </Card.Body>
            </Card>

            <Card className="bg-primary bg-gradient text-white border-0 shadow-lg mb-4 hover-scale">
              <Card.Body className="p-4">
                <h3 className="h4 fw-bold mb-4">
                  Precisa da plataforma WhatsApp Business?
                </h3>
                <div className="mb-4">
                  {beneficios.map((beneficio, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                      <BsCheckCircleFill className="text-white me-2" />
                      <span>{beneficio}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/teste-gratis"
                  className="btn btn-light btn-lg fw-semibold d-inline-flex align-items-center"
                >
                  <BsWhatsapp className="me-2" />
                  Teste a Wizebot gratuitamente
                </Link>
              </Card.Body>
            </Card>

            <div className="alert alert-warning border-start border-4 shadow-sm">
              <h4 className="alert-heading fw-bold d-flex align-items-center">
                <BsCalculator className="me-2" />
                Aviso Importante
              </h4>
              <p className="mb-0">
                Os preços indicados estão sujeitos a alterações em Meta. Consulte a página
                <Link 
                  href="https://www.meta.com"
                  className="mx-2 text-warning fw-bold text-decoration-underline"
                >
                  Meta
                </Link>
                para obter as últimas actualizações de preços.
              </p>
            </div>
          </Col>

          {/* Calculadora Desktop */}
          <Col lg={6} className="d-none d-lg-block order-2 order-lg-2">
            <div className="calculator-section sticky-calculator">
              <Card className="border-0 shadow-lg calculator-card" style={{ top: '2rem' }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <BsCurrencyDollar size={24} className="text-primary" />
                    </div>
                    <h2 className="h4 fw-bold mb-0">Calculadora de Custos</h2>
                  </div>
                  {/* Formulário da Calculadora */}
                  <Form className="space-y-4">
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold">Escolha o modelo:</Form.Label>
                      <div className="modelo-options">
                        {Object.entries(modelos).map(([valor, { nome, preco, icon: Icon, desc }]) => (
                          <div
                            key={valor}
                            onClick={() => handleModeloChange({ target: { value: valor } })}
                            className={`modelo-option ${modelo === valor ? 'selected' : ''}`}
                          >
                            <div className="d-flex align-items-center">
                              <div className={`icon-wrapper ${modelo === valor ? 'selected' : ''}`}>
                                <Icon size={24} />
                              </div>
                              <div className="ms-3 flex-grow-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <h6 className="mb-0 fw-bold">{nome}</h6>
                                  <span className="price">${preco.toFixed(4)}/msg</span>
                                </div>
                                <p className="small text-muted mb-0">{desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold">Cotação atual do dólar (R$):</Form.Label>
                      <div className="input-group input-group-lg">
                        <Form.Control
                          type="number"
                          value={cotacao}
                          onChange={handleCotacaoChange}
                          step="0.01"
                          placeholder="Ex: 5.20"
                        />
                        <Button 
                          variant="outline-primary"
                          onClick={obterCotacao}
                          className="d-flex align-items-center"
                          disabled={isLoading}
                        >
                          <BsArrowRepeat size={20} className={`me-2 ${isLoading ? 'rotate' : ''}`} />
                          {isLoading ? 'Atualizando...' : 'Atualizar'}
                        </Button>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold">Quantidade de mensagens:</Form.Label>
                      <div className="d-flex align-items-center mb-3">
                        <CountUp
                          end={quantidade}
                          duration={0.5}
                          separator="."
                          className="display-5 fw-bold text-primary me-2"
                        />
                        <span className="fs-5 text-secondary">mensagens</span>
                      </div>
                      <Form.Range
                        value={quantidade}
                        onChange={handleQuantidadeChange}
                        min="1"
                        max="10000"
                        className="form-range custom-range"
                      />
                      <div className="d-flex justify-content-between text-secondary mt-2">
                        <span>1</span>
                        <span>5.000</span>
                        <span>10.000</span>
                      </div>
                    </Form.Group>

                    <Card className="bg-gradient border-0 shadow-lg hover-scale" 
                      style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                      <Card.Body className="p-4">
                        <div className="text-dark">
                          <p className="fs-5 mb-2 text-muted">Custo Estimado</p>
                          <div className="d-flex align-items-center justify-content-between">
                            <CountUp
                              end={custoEstimado}
                              duration={0.5}
                              decimals={2}
                              decimal=","
                              prefix="R$ "
                              separator="."
                              className="display-4 fw-bold mb-0 text-dark"
                            />
                            <div className="ms-3 fs-4 text-muted">BRL</div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .min-vh-100 {
          overflow-x: hidden;
          width: 100%;
        }

        .calculator-section {
          position: relative;
          z-index: 1;
          width: 100%;
        }
        
        .calculator-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          width: 100%;
        }

        .sticky-calculator {
          position: sticky;
          top: 100px;
          z-index: 1;
          width: 100%;
        }

        .modelo-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .modelo-option {
          padding: 1rem;
          border: 2px solid #dee2e6;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            max-width: 100%;
            margin: 0;
          }

          .row {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          .col-lg-6 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }

          .card {
            margin: 0 !important;
          }

          .modelo-option {
            padding: 0.75rem;
            margin: 0;
          }

          .calculator-card {
            border-radius: 12px;
            margin: 0;
          }

          .alert {
            margin: 1rem 0;
          }

          .input-group {
            width: 100%;
          }

          .input-group > * {
            min-width: 0;
          }

          .btn {
            white-space: normal;
            height: auto;
          }
        }

        .text-gradient {
          background: linear-gradient(45deg, #0d6efd, #0a58ca);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: translateY(-5px);
        }
        
        .calculator-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .calculator-section {
          position: relative;
          z-index: 1;
        }
        
        .sticky-calculator {
          position: sticky;
          top: 100px;
          z-index: 1;
        }

        .modelo-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modelo-option {
          padding: 1rem;
          border: 2px solid #dee2e6;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modelo-option:hover {
          border-color: #0d6efd;
          background-color: rgba(13, 110, 253, 0.04);
        }

        .modelo-option.selected {
          border-color: #0d6efd;
          background-color: rgba(13, 110, 253, 0.1);
        }

        .icon-wrapper {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background-color: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          transition: all 0.2s ease;
        }

        .icon-wrapper.selected {
          background-color: #0d6efd;
          color: white;
        }

        .price {
          color: #0d6efd;
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .modelo-option {
            padding: 0.75rem;
          }

          .icon-wrapper {
            width: 40px;
            height: 40px;
          }

          h6 {
            font-size: 0.9rem;
          }

          .price {
            font-size: 0.8rem;
          }

          .small {
            font-size: 0.75rem;
          }
        }

        .bg-primary.bg-opacity-10 {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
        }

        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        main {
          position: relative;
          z-index: 1;
        }

        .calculator-section {
          position: relative;
          z-index: 1;
        }

        .cursor-pointer {
          cursor: pointer;
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }
        
        .selected-card {
          background-color: rgba(13, 110, 253, 0.1);
          border-width: 2px !important;
          transform: scale(1.02);
        }
        
        @media (max-width: 576px) {
          .display-4 {
            font-size: 2rem;
          }
          
          h5 {
            font-size: 1rem;
          }
          
          p {
            font-size: 0.875rem;
          }
          
          .card {
            margin-bottom: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        .slick-dots li button:before {
          color: #0d6efd;
        }
        
        .slick-dots li.slick-active button:before {
          color: #0a58ca;
        }
        
        .rotate {
          animation: rotate 1s linear infinite;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .custom-range {
          height: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Calculadora;