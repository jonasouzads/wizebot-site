/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaHeart, FaRetweet, FaRegComment } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Jaine Alcantara",
    username: "@jainealcantara",
    avatar: "/images/v2/t-user.png",
    content: "A Wizebot automatizou a entrega de arquivos no meu trabalho com recursos digitais, permitindo que eu focasse em criar conteúdo e expandir meu negócio. O tempo foi melhor aproveitado e a experiência dos clientes melhorou. Fez toda a diferença! ",
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
    content: "Como agência, precisávamos de uma solução que nos ajudasse a gerenciar múltiplos clientes. A Wizebot não só resolveu isso como superou nossas expectativas! O suporte é sensacional e as Integrations funcionam perfeitamente. ",
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
    <div className="section wizebot-section-padding2" style={{ background: '#f8f9fa' }}>
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
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rounded-circle"
                        width="52"
                        height="52"
                        style={{ 
                          objectFit: 'cover', 
                          border: '3px solid #1DA1F2',
                          borderRadius: '50%'
                        }}
                      />
                      {testimonial.verified && (
                        <span className="position-absolute bottom-0 end-0">
                          <img src="/images/icon/verified.svg" alt="Verificado" width="18" height="18" />
                        </span>
                      )}
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold" style={{ color: '#14171A', fontSize: '1.1rem' }}>{testimonial.name}</h5>
                      <div className="text-muted small">
                        <span style={{ color: '#657786' }}>{testimonial.username}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4" style={{ color: '#14171A', fontSize: '1rem', lineHeight: '1.5' }}>
                    {testimonial.content}
                  </p>
                  <div className="border-top pt-3">
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="d-flex align-items-center gap-2 engagement-action" 
                           style={{ 
                             cursor: 'pointer',
                             transition: 'color 0.2s',
                             ':hover': { color: '#1DA1F2' }
                           }}>
                        <FaRegComment style={{ color: '#657786' }} size={18} />
                        <span style={{ color: '#657786' }}>{testimonial.comments}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2 engagement-action"
                           style={{ 
                             cursor: 'pointer',
                             transition: 'color 0.2s',
                             ':hover': { color: '#17BF63' }
                           }}>
                        <FaRetweet style={{ color: '#657786' }} size={18} />
                        <span style={{ color: '#657786' }}>{testimonial.retweets}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2 engagement-action"
                           style={{ 
                             cursor: 'pointer',
                             transition: 'color 0.2s',
                             ':hover': { color: '#E0245E' }
                           }}>
                        <FaHeart style={{ color: '#E0245E' }} size={18} />
                        <span style={{ color: '#657786' }}>{testimonial.likes}</span>
                      </div>
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
