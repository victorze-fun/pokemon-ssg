import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header>
      <nav className="flex w-full items-center justify-between bg-zinc-900 px-5 py-0">
        <Link href={'/'}>
          <div className="flex items-center">
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="Icono de la aplicación"
              width={70}
              height={70}
            />
            <span className="text-3xl">P</span>
            <span className="text-xl">okemon</span>
          </div>
        </Link>
        <Link href={'/favorities'}>
          <div>Favoritos</div>
        </Link>
      </nav>
    </header>
  );
};
