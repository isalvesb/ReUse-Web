import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export default function Login() {
    return (
        <main className="flex min-h-screen">

            {/* IMAGEM */}
            <section className="hidden w-1/2 md:block">
                <Image
                    src="/images/login/jeans.png"
                    width={754}
                    height={1024}
                    alt="Calças jeans"
                    className="h-full w-full object-cover"
                />
            </section>

            {/* LOGIN */}
            <section className="flex min-h-screen w-full items-center justify-center bg-reuse-brown px-8 md:w-1/2">

                {/* CAIXA DO LOGIN */}
                <div className="w-full max-w-md">

                    {/* LOGO */}
                    <div className="mb-8 flex justify-center">
                        <Image
                            src="/images/logo/Reuse-rosa.png"
                            width={188}
                            height={26}
                            alt="ReUse logo rosa"
                        />
                    </div>

                    {/* FORMULÁRIO */}
                    <form>

                        {/* E-MAIL */}
                        <label className="mb-2 block text-sm font-bold text-reuse-cream">
                            E-mail
                        </label>

                        <input
                            type="email"
                            className="h-12 w-full rounded-3xl bg-reuse-white px-4 outline-none"
                        />

                        {/* SENHA */}
                        <label className="mb-2 mt-3 block text-sm font-bold text-reuse-cream">
                            Senha
                        </label>

                        <input
                            type="password"
                            className="h-12 w-full rounded-3xl bg-reuse-white px-4 outline-none"
                        />

                        {/* LINKS */}
                        <div className="mt-6 text-center">

                            <p className="text-sm text-reuse-cream">
                                Não tem uma conta?

                                <Link
                                    href="/cadastro"
                                    className="ml-2 font-medium text-reuse-pink"
                                >
                                    Criar conta
                                </Link>
                            </p>

                            <Link
                                href="/recuperar-senha"
                                className="mt-3 block text-sm text-reuse-cream"
                            >
                                Esqueceu a senha?
                            </Link>

                        </div>

                        {/* BOTÃO ENTRAR */}
                        <Button
                            type="submit"
                            variant="primary"
                            className="mt-8 h-12 w-full rounded-3xl"
                        >
                            Entrar
                        </Button>

                    </form>

                    {/* OU */}
                    <div className="my-8 flex items-center gap-4">

                        <div className="h-px flex-1 bg-reuse-pink" />

                        <span className="text-sm text-reuse-pink">
                            ou
                        </span>

                        <div className="h-px flex-1 bg-reuse-pink" />

                    </div>

                    {/* GOOGLE */}
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 w-full rounded-3xl border-reuse-pink text-reuse-cream">

                        <Image
                            src="/images/logo/Icon-google.png"
                            width={21}
                            height={20}
                            alt="Ícone do Google"
                            className="mr-3"
                        />

                        Continuar com Google
                    </Button>

                    {/* FACEBOOK */}
                    <Button
                        type="button"
                        variant="outline"
                        className="mt-4 h-12 w-full rounded-3xl border-reuse-pink text-reuse-cream"
                    >
                        <Image
                            src="/images/logo/Icon-facebook.png"
                            width={20}
                            height={20}
                            alt="Ícone do Facebook"
                            className="mr-3"
                        />

                        Continuar com Facebook
                    </Button>

                </div>

            </section>

        </main>
    );
}