import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="apresentacao"
      className="relative w-full h-[60vh] md:h-screen flex flex-col justify-center md:justify-end md:pb-12 md: bg-blue-500"
    >
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.webp"
          alt="Imagem da fachada Polizeli Parafusos"
          fill
          priority
          sizes="100vw"
          quality={70}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="/hero-image-blur.jpg" // versão miniatura (gerar no Squoosh ~10kb)
        />
      <div className="absolute inset-0 bg-black/60" />
    </div>

     {/* O conteúdo principal fica por cima */}
    <div className="relative z-10 w-full pb-12 pt-8 md:pt-0">
      <div className="container mx-auto px-6 text-center mb-16">
        <div className="max-w-3xl mx-auto mt-8 md:mt-0">
          <h1 className="font-display tracking-tighter @lg:text-6xl text-4xl md:text-5xl font-extrabold leading-tight text-center mb-6 md:mb-40 lg:mb-60">
            <span className="bg-blue-900/80 text-white px-4 italic">
              POLIZELI
            </span>{" "}
            <span className="bg-white/80 text-blue-900 px-2 ">
              PARAFUSOS
            </span>
          </h1>

          {/* bloco do parágrafo e botões descendo mais */}
          <div className="-mb-16 md:-mb-24">
            <p className="font-sans leading-relaxed text-base md:text-3xl text-gray-200">
              Há mais de 25 anos, a Polizeli Parafusos é a parceira forte para a sua obra e o seu campo. 
            </p>
            <p className="font-sans leading-relaxed text-base md:text-3xl text-gray-200">
              Encontre a solução completa em ferramentas e suprimentos, com a agilidade que seu trabalho exige.
            </p>

            {/* Contêiner dos botões */}
            <div className="mt-6 md:mt-10 flex flex-col items-center space-y-4">
              <a
                href="https://wa.me/5517991520620?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="font-display uppercase tracking-wider text-sm  bg-brand-yellow hover:opacity-90 animate-in fade-in-50  inline-block bg-white text-blue-950 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 md:bg-blue-950 md:text-white md:hover:bg-blue-800"
              >
                Fazer pedido
              </a>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <a
                  href="https://wa.me/5517991520928?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20escrit%C3%B3rio%2C%20vim%20pelo%20site%21."
                  className="font-display uppercase tracking-wider text-sm  bg-brand-yellow hover:opacity-90 animate-in fade-in-50  inline-block bg-white text-blue-950 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 md:bg-blue-950 md:text-white md:hover:bg-blue-800"
                >
                  Escritório
                </a>
                <a
                  href="https://wa.me/5517991296301?text=Ol%C3%A1%2C%20gostaria%20de%20fornecer%20algo%20para%20voc%C3%AAs%2C%20vim%20pelo%20site%21"
                  className="font-display uppercase tracking-wider text-sm  bg-brand-yellow hover:opacity-90 animate-in fade-in-50  inline-block bg-white text-blue-950 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 md:bg-blue-950 md:text-white md:hover:bg-blue-800"
                >
                  Compras
                </a>
              </div>
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
              <h3 className="text-xl font-bold text-white">25 Anos de Experiência</h3>
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