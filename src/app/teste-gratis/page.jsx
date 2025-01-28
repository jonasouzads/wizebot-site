import TestForm from '../../components/Forms/TestForm';

export const metadata = {
  title: 'Teste Grátis - Wizebot',
  description: 'Comece seu teste grátis da Wizebot e experimente nossa plataforma de automação de marketing.',
};

export default function TesteGratisPage() {
  return (
    <div className="container mx-auto px-4">
      <TestForm />
    </div>
  );
}
