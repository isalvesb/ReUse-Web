import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-[#342A2A] px-6 py-3">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-wide text-[#F8F1E5]"
                >
                    ReUse
                </Link>

                {/* Busca */}
                <div className="hidden flex-1 max-w-md md:flex">
                    <div className="flex w-full items-center rounded-full bg-[#F8F1E5] px-4 py-2">
                        <input
                            type="text"
                            placeholder="Busque sapato, poltrona, notebook..."
                            className="w-full bg-transparent text-sm text-[#342A2A] outline-none placeholder:text-[#777]"
                        />

                        <span className="text-[#342A2A]">
                            🔍
                        </span>
                    </div>
                </div>

                {/* Navegação */}
                <nav className="hidden items-center gap-6 text-sm text-[#F8F1E5] lg:flex">
                    <Link href="/eletronicos" className="hover:text-[#E8B7E8]">
                        Eletrônicos
                    </Link>

                    <Link href="/roupas" className="hover:text-[#E8B7E8]">
                        Roupas
                    </Link>

                    <Link href="/moveis" className="hover:text-[#E8B7E8]">
                        Móveis
                    </Link>

                    <Link href="/livros" className="hover:text-[#E8B7E8]">
                        Livros
                    </Link>

                    <Link href="/login" className="font-semibold hover:text-[#E8B7E8]">
                        Entrar
                    </Link>
                </nav>

                {/* Publicar */}
                <Link
                    href="/publicar"
                    className="rounded-xl bg-[#E8B7E8] px-5 py-2 text-sm font-semibold text-[#342A2A] transition hover:scale-105"
                >
                    Publicar Item
                </Link>
            </div>
        </header>
    );
}