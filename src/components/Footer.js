import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 bg-[#342A2A] px-8 py-12 text-[#F8F1E5]">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

                {/* Logo */}
                <div>
                    <Image
                        src="/images/logo/ReUse-creme.png"
                        alt="ReUse"
                        width={187}
                        height={23}
                    />
                </div>

                {/* Categorias */}
                <div>
                    <h3 className="mb-4 font-semibold">
                        Categorias
                    </h3>

                    <ul className="space-y-3 text-sm text-[#ddd]">
                        <li>
                            <Link href="/pecas-raras">Peças raras</Link>
                        </li>

                        <li>
                            <Link href="/sapatos">Sapatos</Link>
                        </li>

                        <li>
                            <Link href="/moveis">Móveis</Link>
                        </li>

                        <li>
                            <Link href="/eletronicos">Eletrônicos</Link>
                        </li>

                        <li>
                            <Link href="/livros">Livros</Link>
                        </li>
                    </ul>
                </div>

                {/* Conta */}
                <div>
                    <h3 className="mb-4 font-semibold">
                        Minha Conta
                    </h3>

                    <ul className="space-y-3 text-sm text-[#ddd]">
                        <li>
                            <Link href="/minha-vitrine">
                                Minha Vitrine
                            </Link>
                        </li>

                        <li>
                            <Link href="/trocas">
                                Minhas Trocas
                            </Link>
                        </li>

                        <li>
                            <Link href="/favoritos">
                                Favoritos
                            </Link>
                        </li>

                        <li>
                            <Link href="/perfil">
                                Perfil
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Redes */}
                <div>
                    <h3 className="mb-4 font-semibold">
                        Redes Sociais
                    </h3>

                    <ul className="space-y-3 text-sm text-[#ddd]">
                        <li>
                            <a href="#">Facebook</a>
                        </li>

                        <li>
                            <a href="#">Instagram</a>
                        </li>

                        <li>
                            <a href="#">Pinterest</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="mx-auto mt-12 max-w-7xl border-t border-[#554949] pt-6 text-center text-xs text-[#bbb]">
                ReUse © 2026 - Todos os direitos reservados
            </div>
        </footer>
    );
}