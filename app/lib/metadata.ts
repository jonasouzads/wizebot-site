export const siteConfig = {
  name: 'Wizebot',
  url: 'https://wizebot.com.br',
  ogImage: '/meta/og.jpg',
  description: 'Automatize seu atendimento no WhatsApp com inteligência artificial. Aumente suas vendas e melhore a experiência dos seus clientes.',
  keywords: [
    'chatbot whatsapp',
    'automação whatsapp',
    'atendimento automatizado',
    'whatsapp business',
    'chatbot ia',
    'inteligência artificial whatsapp',
    'automação de vendas',
    'atendimento ao cliente',
    'marketing digital',
    'whatsapp api'
  ],
  links: {
    twitter: 'https://twitter.com/wizebotbr',
    github: 'https://github.com/wizebot',
    facebook: 'https://facebook.com/wizebotbr',
    instagram: 'https://instagram.com/wizebotbr',
    linkedin: 'https://linkedin.com/company/wizebot'
  }
}

export type SiteConfig = typeof siteConfig

interface MetadataProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  path?: string
}

export function constructMetadata({
  title,
  description,
  keywords,
  image,
  path = '',
}: MetadataProps = {}) {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : `${siteConfig.name} - Automatize seu WhatsApp com IA`
  
  const fullDescription = description || siteConfig.description
  const fullImage = image || siteConfig.ogImage
  const url = `${siteConfig.url}${path}`
  const fullKeywords = [...(keywords || []), ...siteConfig.keywords]

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords.join(', '),
    authors: [{ name: 'Wizebot' }],
    creator: 'Wizebot',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: '@wizebotbr',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      facebook: 'your-facebook-verification-code',
    },
  }
}
