import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="apresentacao"
      className="relative w-full h-[60vh] md:h-screen flex flex-col justify-center md:justify-end md:pb-12 md: bg-blue-500"
    >
      {/* Contêiner da imagem e sobreposição */}
      <div 
        className="absolute inset-0 z-0 bg-contain bg-no-repeat bg-center md:bg-cover"
        style={{ backgroundImage: "url('/hero-image.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* O conteúdo principal fica por cima */}
     <div className="relative z-10 w-full pb-12 pt-8 md:pt-0">
        <div className="container mx-auto px-6 text-center mb-16">
          <div className="max-w-3xl mx-auto mt-8 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              POLIZELI PARAFUSOS
            </h1>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-200">
              Há mais de 24 anos, a Polizeli Parafusos é a parceira forte para a sua obra e o seu campo. Encontre a solução completa em ferramentas e suprimentos, com a agilidade que seu trabalho exige.
            </p>

            {/* Contêiner dos botões */}
            <div className="mt-6 md:mt-8 flex flex-col items-center space-y-4">
              <a
                href="https://wa.me/5517991520620?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-950 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 md:bg-blue-950 md:text-white md:hover:bg-blue-800"
              >
                Fazer pedido
              </a>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <a
                  href="https://wa.me/5517991520928?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20escrit%C3%B3rio%2C%20vim%20pelo%20site%21."
                  className="inline-block bg-white text-blue-950 font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 md:bg-blue-950 md:text-white md:hover:bg-blue-800"
                >
                  Escritório
                </a>
                <a
                  href="https://wa.me/5517991296301?text=Ol%C3%A1%2C%20gostaria%20de%20fornecer%20algo%20para%20voc%C3%AAs%2C%20vim%20pelo%20site%21"
                  className="inline-block bg-white text-blue-950 font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 md:bg-blue-950 md:text-white md:hover:bg-blue-800"
                >
                  Compras
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
            
      {/* Seção de cards de destaque */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-white">Tudo em um só Lugar</h3>
              <p className="mt-2 text-gray-300">
                Do menor parafuso à ferramenta mais robusta. Otimize seu tempo e encontre tudo o que precisa aqui.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-white">20 Anos de Experiência</h3>
              <p className="mt-2 text-gray-300">
                Conte com a segurança de quem conhece a realidade do seu trabalho e oferece suporte de qualidade.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-white">Loja e Entrega Rápida</h3>
              <p className="mt-2 text-gray-300">
                Visite nossa loja para um atendimento especializado ou receba seus materiais onde precisar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;