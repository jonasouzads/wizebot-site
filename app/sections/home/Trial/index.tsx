'use client'

import { useState, useEffect } from 'react'

declare global {
  interface Window {
    fbTrackEvent?: (event: string, data: FacebookEventData, userInfo: FacebookUserInfo) => void
  }
}

interface FacebookEventData {
  [key: string]: string | number | boolean | null;
}

interface FacebookUserInfo {
  [key: string]: string | number | boolean | null;
}

export function Trial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null)
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  })

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined
    if (redirectCountdown !== null) {
      if (redirectCountdown === 0) {
        window.location.href = 'https://app.wizebot.com.br/login'
      } else {
        timer = setTimeout(() => {
          setRedirectCountdown(redirectCountdown - 1)
        }, 1000)
      }
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [redirectCountdown])

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    setUtmParams({
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
      utm_term: searchParams.get('utm_term') || '',
      utm_content: searchParams.get('utm_content') || ''
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError(null)
    setRedirectCountdown(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setRedirectCountdown(null)

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
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 400 && data.error === 'Este e-mail já está cadastrado.') {
          setRedirectCountdown(3)
          throw new Error('Este e-mail já está cadastrado. Redirecionando para a página de login...')
        }
        throw new Error(data.error || 'Ocorreu um erro ao processar sua solicitação.')
      }

      // Enviar evento para o Facebook Pixel
      if (typeof window.fbTrackEvent === 'function') {
        window.fbTrackEvent('Lead', {
          content_name: 'Teste Grátis',
          content_category: 'Trial Signup',
          status: 'success'
        }, {
          em: formData.email,
          ph: formData.phone,
          fn: formData.name
        })
      }

      // Redirecionar para o aplicativo usando a URL retornada pela API
      if (data.directLoginUrl) {
        window.location.href = data.directLoginUrl
      } else {
        throw new Error('URL de redirecionamento não fornecida.')
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.')
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative rounded-[40px] overflow-hidden bg-[#0066FF] py-24"
          style={{ 
            backgroundImage: "url(/images/t-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Teste a Wizebot<br />Gratuitamente!
            </h2>
            
            <div className="max-w-4xl mx-auto px-4">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Primeiro nome"
                  required
                  disabled={loading}
                  className="w-full sm:w-auto sm:flex-1 max-w-[280px] px-6 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu e-mail"
                  required
                  disabled={loading}
                  className="w-full sm:w-auto sm:flex-1 max-w-[280px] px-6 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <div className="w-full sm:w-auto sm:flex-1 max-w-[280px] relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefone"
                    required
                    disabled={loading}
                    className="w-full px-6 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none pr-24"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 focus:outline-none transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Aguarde...' : 'Entrar'}
                  </button>
                </div>
              </form>

              {error && (
                <div className="mt-4 text-white bg-red-500 bg-opacity-10 px-4 py-2 rounded-lg">
                  {error}
                  {redirectCountdown !== null && (
                    <span className="ml-1">
                      {` (${redirectCountdown}s)`}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
