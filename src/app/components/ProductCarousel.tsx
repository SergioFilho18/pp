"use client"; // Esta linha é crucial para componentes com interatividade

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 1. ATUALIZADO: Lista expandida para 7 produtos
const products = [
  { id: 1, name: 'Coolers', image: '/produto1.jpeg' },
  { id: 2, name: 'Canivetes', image: '/produto2.jpeg' },
  { id: 3, name: 'Chapéus', image: '/produto3.jpeg' },
  { id: 4, name: 'Botas', image: '/produto4.jpeg' },
  { id: 5, name: 'Parafusadeiras', image: '/produto5.jpeg' },
  { id: 6, name: 'Jogo de Chaves', image: '/produto6.jpeg' },
  { id: 7, name: 'Kits de Ferramentas', image: '/produto7.jpeg' },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const generateWhatsAppLink = (productName: string) => {
    const numero = "55SEUNUMERODEVENDAS"; // Substitua pelo seu número
    const text = `Olá, tenho interesse no produto: ${productName}. Poderia me passar mais informações?`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="produtos" className="w-full pt-20 lg:pt-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl lg:text-5xl font-bold text-center text-blue-950 -my-18 mb-2">Nossos Produtos</h2>
      </div>

      <div className="w-full relative group">
        {/* Conteúdo do Carrossel */}
        <div className="w-full h-[70vh] md:h-[70vh] overflow-hidden relative">
          <Image
            src={products[currentIndex].image}
            alt={products[currentIndex].name}
            layout="fill"
            objectFit="contain"
            className="transition-opacity duration-500 ease-in-out" // Trocado para transição de opacidade
          />
        </div>

        {/* Nome do produto e botão do WhatsApp agora abaixo da imagem */}
        <div className="w-full text-center bg-white"> {/* Adicionado um background branco para o texto e botão */}
          <h3 className="text-5xl lg:text-5xl font-bold text-blue-950">{products[currentIndex].name}</h3>
          
        </div>

        {/* Botões de Navegação */}
        <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-5 md:left-10 text-white bg-black/30 rounded-full p-2 group-hover:bg-black/50 transition-colors">
          <ChevronLeft size={30} />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-5 md:right-10 text-white bg-black/30 rounded-full p-2 group-hover:bg-black/50 transition-colors">
          <ChevronRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;