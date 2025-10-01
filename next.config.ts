import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    unoptimized: true,
    domains: ['www.acidadevotuporanga.com.br', 'www.votuporangatudo.com.br'],
    // Ou use remotePatterns para mais controle (recomendado para versões mais recentes)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.acidadevotuporanga.com.br',
        port: '',
        pathname: '/**',
      },
      {
         protocol: 'https',
        hostname: 'www.votuporangatudo.com.br',
        port: '',
        pathname: '/**',
      }
      
    ],
    
  },
  output: "export", // Ativa exportação estática
  
};
module.exports = nextConfig



export default nextConfig;
