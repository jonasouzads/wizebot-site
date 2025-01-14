/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaHeart, FaRetweet, FaRegComment } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Jaine Alcantara",
    username: "@jainealcantara",
    avatar: "/images/v2/t-user.png",
    content: "Depois que comecei a utilizar na Abêcê Recursos Pedagogicos não tive mais problemas na entrega dos meus produtos, o cliente compra e já recebe automaticamente no WhatsApp.",
    likes: 245,
    retweets: 89,
    comments: 32,
    verified: true
  },
  {
    id: 2,
    name: "André",
    username: "@andréaugusto308",
    avatar: "/images/v2/t-user1.png",
    content: "Ferramenta perfeito suporte diferenciado atencioso me atendeu até no feriado super indico parabéns",
    likes: 189,
    retweets: 67,
    comments: 28,
    verified: true
  },
  {
    id: 3,
    name: "Tag Corretora de Seguro",
    username: "@izabastos",
    avatar: "/images/v2/t-user3.png",
    content: "Uso e indico ",
    likes: 312,
    retweets: 156,
    comments: 45,
    verified: true
  },
  {
    id: 4,
    name: "Pedro",
    username: "@pedroagencia",
    avatar: "/images/v2/t-user4.png",
    content: "Como agência, precisávamos de uma solução que nos ajudasse a gerenciar múltiplos clientes. A Wizebot não só resolveu isso como superou nossas expectativas! O suporte é sensacional e as integrations funcionam perfeitamente. ",
    likes: 278,
    retweets: 94,
    comments: 36,
    verified: true
  },
  {
    id: 5,
    name: "Ana",
    username: "@anabeatriz",
    role: "Consultora de Vendas",
    avatar: "/images/v2/t-user5.png",
    content: "A inteligência artificial da Wizebot é impressionante! Ela entende perfeitamente as dúvidas dos clientes e fornece respostas precisas. Minha taxa de conversão aumentou 40% desde que comecei a usar. Simplesmente fantástico! ",
    likes: 423,
    retweets: 167,
    comments: 58,
    verified: true
  }
];

const TestimonialSection = () => {
  return (
    <div className="section wizebot-section-padding2" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="wizebot-section-title center mb-5">
          <h2>O que nossos clientes dizem</h2>
          <p className="mt-3">Depoimentos reais de pessoas que transformaram seus negócios com a Wizebot</p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="testimonial-card bg-white rounded-4 shadow-sm h-100" 
                   style={{ 
                     transition: 'transform 0.2s, box-shadow 0.2s',
                     cursor: 'pointer',
                     border: '1px solid rgba(0,0,0,0.1)',
                     borderRadius: '20px',
                     ':hover': {
                       transform: 'translateY(-5px)',
                       boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                     }
                   }}>
                <div className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="position-relative">
                      <Image
                        src={testimonial.avatar}
                        alt={`Foto de perfil de ${testimonial.name}`}
                        width={52}
                        height={52}
                        style={{ 
                          objectFit: 'cover', 
                          border: '3px solid #1DA1F2',
                          borderRadius: '50%'
                        }}
                      />
                      {testimonial.verified && (
                        <div className="position-absolute" style={{ bottom: 0, right: 0 }}>
                          <Image 
                            src="/images/v2/verified.png" 
                            alt="Verificado" 
                            width={20}
                            height={20}
                          />
                        </div>
                      )}
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">{testimonial.name}</h5>
                      <p className="text-muted small mb-0">{testimonial.username}</p>
                    </div>
                  </div>
                  <p className="mb-4" style={{ fontSize: '0.95rem' }}>{testimonial.content}</p>
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center text-muted">
                      <FaRegComment className="me-2" />
                      <span>{testimonial.comments}</span>
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <FaRetweet className="me-2" />
                      <span>{testimonial.retweets}</span>
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <FaHeart className="me-2" />
                      <span>{testimonial.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
