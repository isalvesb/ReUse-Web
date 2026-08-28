import Link from "next/link";
import { Search } from "lucide-react";
import Button from "@/components/Button";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full bg-reuse-brown px-6 py-3">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">

                {/* Logo */}
                <Link
                    href="/">
                    <Image
                        src='/images/logo/ReUse-creme.png'
                        width={130}
                        height={16}
                        alt="Logo creme"
                        className="h-auto w-32"
                        priority />
                </Link>

                {/* Busca */}
                <div className="hidden max-w-md flex-1 md:flex">
                    <div className="flex w-full items-center rounded-full bg-reuse-cream px-4 py-2">
                        <input
                            type="text"
                            placeholder="Busque sapato, poltrona, notebook..."
                            className="w-full bg-transparent text-sm text-reuse-brown outline-none placeholder:text-reuse-brown-light"
                        />

                        <Search
                            size={24}
                            strokeWidth={2}
                            className="text-reuse-brown"
                        />
                    </div>
                </div>

                {/* Navegação */}
                <nav className="hidden items-center gap-6 text-sm text-reuse-white lg:flex">
                    <Link
                        href="/eletronicos"
                        className="hover:text-reuse-pink"
                    >
                        Eletrônicos
                    </Link>

                    <Link
                        href="/roupas"
                        className="hover:text-reuse-pink"
                    >
                        Roupas
                    </Link>

                    <Link
                        href="/moveis"
                        className="hover:text-reuse-pink"
                    >
                        Móveis
                    </Link>

                    <Link
                        href="/livros"
                        className="hover:text-reuse-pink"
                    >
                        Livros
                    </Link>

                    <Link
                        href="/login"
                        className="font-semibold hover:text-reuse-pink"
                    >
                        Entrar
                    </Link>
                </nav>

                {/* Publicar */}
                <Button href="/publicar-item">
                    Publicar Item
                </Button>

            </div>
        </header>
    );
}