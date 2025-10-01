import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full h-25 bg-blue-700 shadow-md sticky top-0 z-50">
      
  <div className="container mx-auto px-6 py-4 flex justify-center md:justify-between items-center">
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <Image src="/logo.jpeg" alt="Logo da Empresa" width={180} height={180} />
      </div>
    </Link>
    <nav className="hidden md:flex space-x-8">
      <Link 
        href="#produtos" 
        className="antialiased text-2xl font-sans font-bold italic text-white pb-1 border-b-3 border-transparent hover:text-red-500 hover:border-red-500  transition-colors duration-300 ">
        Produtos
      </Link>
      <Link 
        href="#sobre" 
        className="text-2xl font-sans font-bold italic text-white pb-1 border-b-3 border-transparent hover:text-red-500 hover:border-red-500 transition-colors duration-300">
        Sobre Nós
      </Link>
      <Link 
        href="#contato" 
        className="text-2xl font-sans font-bold italic text-white pb-1 border-b-3 border-transparent hover:text-red-500 hover:border-red-500 transition-colors duration-300">
        Contato
      </Link>
    </nav>
  </div>
</header>

  );
};

export default Header;