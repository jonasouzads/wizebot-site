"use client";
import { useState, useEffect } from 'react';
import styles from './TestForm.module.css';

const TestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [redirectCountdown, setRedirectCountdown] = useState(null);
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    let timer;
    if (redirectCountdown !== null) {
      if (redirectCountdown === 0) {
        window.location.href = 'https://app.wizebot.com.br/login';
      } else {
        timer = setTimeout(() => {
          setRedirectCountdown(redirectCountdown - 1);
        }, 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [redirectCountdown]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const utms = {
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
      utm_term: searchParams.get('utm_term') || '',
      utm_content: searchParams.get('utm_content') || ''
    };
    setUtmParams(utms);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
    setRedirectCountdown(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRedirectCountdown(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...utmParams
        })
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400 && data.error === 'Este e-mail já está cadastrado.') {
          setRedirectCountdown(3);
          throw new Error('Este e-mail já está cadastrado. Redirecionando para a página de login...');
        }
        throw new Error(data.error || 'Ocorreu um erro ao processar sua solicitação.');
      }

      if (typeof window.fbTrackEvent === 'function') {
        window.fbTrackEvent('Lead', {
          content_name: 'Teste Grátis',
          content_category: 'Trial Signup',
          status: 'success'
        }, {
          em: formData.email,
          ph: formData.phone,
          fn: formData.name
        });
      }

      window.location.href = data.directLoginUrl;
    } catch (error) {
      setError(error.message || 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Teste a Wizebot Gratuitamente!</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Primeiro nome"
            required
            disabled={loading}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            required
            disabled={loading}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefone"
            required
            disabled={loading}
          />
        </div>
        <button
          className={styles.submitButton}
          type="submit"
          disabled={loading}
        >
          {loading ? 'Aguarde...' : 'Começar teste grátis'}
        </button>
      </form>
    </div>
  );
};

export default TestForm;
