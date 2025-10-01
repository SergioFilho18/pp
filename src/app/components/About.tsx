'use client'

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';



export default function About() {
  const [activeNews, setActiveNews] = useState(0);
  
  const newsItems = [
    {
      id: 1,
      title: "Polizeli Parafusos doa 204 litros de leite",
      date: "15/01/2019",
      source: "A Cidade Votuporanga",
      description: "Nossa empresa realizou uma doação significativa de leite para instituições de caridade da região.",
      image: "https://www.acidadevotuporanga.com.br/Images/Noticia/Grande/00000000055012386415709457637.JPG",
      link: "https://www.acidadevotuporanga.com.br/cidade/2019/01/polizeli-parafusos-doa-204-litros-de-leite-n53184"
    },
    {
      id: 2,
      title: "Espaço Beach e Polizeli Parafusos realizam torneio em prol a Apae",
      date: "18/08/2023",
      source: "A Cidade Votuporanga",
      description: "O 1 Torneio Polizeli Parafusos de Beach Tennis de Votuporanga irá reverter as inscrições, feitas com alimento não perecível, para a entidade..",
      image: "https://www.acidadevotuporanga.com.br/Images/Noticia/Grande/00000001684405026681771799366.jpg",
      link: "https://www.acidadevotuporanga.com.br/esporte/2023/08/espaco-beach-e-polizeli-parafusos-realizam-torneio-em-prol-a-apae-n76715"
    },
    {
      id: 3,
      title: "Participação e incentivo no desenvolvimento de projetos sociais locais",
      date: "07/05/2024",
      source: "Votuporangatudo",
      description: "Apoio da nossa empresa para atividades sociais.",
      image: "https://www.votuporangatudo.com.br/assets/site/img/noticias/original/6cb35061-9a3b-4a31-882f-57238a39f61b.jpg",
      link: "https://www.votuporangatudo.com.br/noticias/esportes/2024/05/equipe-paralimpica-de-votuporanga-nos-jogos-escolares"
    }
  ];

  return (
    <div id='sobre' className="min-h-screen bg-white pt-10">
      <Head>
        <title>Sobre Nossa Empresa | Sua Loja de Ferramentas</title>
        <meta name="description" content="Conheça a história e valores da nossa empresa de ferramentas, fundada nos anos 90 com paixão por soluções inovadoras." />
      </Head>

      {/* Header */}
      <header className="bg-blue-800 text-white py-12 px-4 md:px-0">
        
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Nossa História</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">Conheça a trajetória da nossa empresa e as reportagens que destacam nosso trabalho</p>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-12">
          {/* Conteúdo Sobre */}
          <section className="mb-16">
            {/* Primeira seção com slot para foto */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/3">
                    {/* Adicione 'relative' ao contêiner da imagem para que 'fill' funcione */}
                    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={'/polizeli.webp'}
                        alt="Nossa loja"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Nossos Primórdios</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Fundada nos anos 90, nossa empresa nasceu de uma paixão por trazer soluções a pessoas honestas e trabalhadoras no seu dia a dia. Começamos com uma pequena equipe e um grande sonho: transformar o mercado de ferramentas com soluções e tecnologias inovadoras e com preço justo e acessível a todo momento.
                  </p>
                </div>
              </div>
            </div>

            {/* Segunda seção com slot para foto */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/3">
                  {/* Slot para foto */}
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-gray-500">Insira uma imagem aqui</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Nossos Valores</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Ao longo dos anos, crescemos e evoluímos, mas nossos valores fundamentais de qualidade, integridade e compromisso com o sucesso do cliente permanecem exatamente os mesmos. Cada cliente que atendemos é sempre tratado com respeito e agilidade, visando as demandas por soluções rápidas no cotidiano.
                  </p>
                </div>
              </div>
            </div>

            {/* Terceira seção com slot para foto */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/3">
                   {/* Adicione 'relative' ao contêiner da imagem para que 'fill' funcione */}
                    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={'/eqpipoli.webp'}
                        alt="Nossa equipe"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center mb-6">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Onde Estamos Hoje</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Hoje, somos orgulhosos de ser uma referência no setor, com uma longa carreira de clientes satisfeitos e uma equipe talentosa pronta para enfrentar os próximos desafios para sempre darmos o melhor para você consumidor.
                  </p>
                </div>
              </div>
            </div>
          </section>

        {/* Seção de Reportagens */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Reportagens sobre Nossa Empresa</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Veja o que a mídia tem dito sobre nosso trabalho e contribuições para a comunidade</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <div 
                key={news.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                onClick={() => setActiveNews(index)}
              >
                <div className="h-48 bg-gray-200 overflow-hidden relative">
                  <Image 
                    src={news.image} 
                    alt={news.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">{news.source} • {news.date}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <a 
                    href={news.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-display uppercase tracking-wider text-sm no-underline hover:underline text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ler reportagem completa
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Destaques em números */}
        <section className="bg-blue-800 text-white rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="font-display font-extrabold tabular-nums tracking-tighter text-4xl @lg:text-5xl md:text-3xl text-center mb-12">Nossa Trajetória em Números</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-display tabular-nums tracking-tighter  @lg:text-5xl text-4xl md:text-5xl font-bold mb-2">+25</div>
              <div className="font-sans uppercase text-xl">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="font-display tabular-nums tracking-tighter @lg:text-5xl text-4xl md:text-5xl font-bold mb-2">+50 mil</div>
              <div className="font-sans uppercase text-xl">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="font-display tabular-nums tracking-tighter  @lg:text-5xl text-4xl md:text-5xl font-bold mb-2">+15 mil</div>
              <div className="font-sans uppercase text-xl">Produtos Inovadores</div>
            </div>
          </div>
        </section>

        {/* Chamada para ação */}
        <section className="text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Faça Parte da Nossa História</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Venha conhecer nossas soluções inovadoras e experimente a qualidade que nos tornou referência no mercado de ferramentas.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1">
            <a href= 'https://wa.me/5517991296301?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20produtos%2C%20vim%20pelo%20site%21'> Conhecer Nossos Produtos </a>
          </button>
        </section>
      </main>
    </div>
  );
}