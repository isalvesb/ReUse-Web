import Link from "next/link";

export default function Hero() {
    return (
        <section className="mx-auto mt-10 max-w-7xl px-6">
            <div className="flex min-h-80 items-center rounded-lg bg-[#D9D9D9] px-12">

                <div className="max-w-md">
                    <h1 className="text-4xl font-bold leading-tight text-[#342A2A] md:text-5xl">
                        Dê um novo
                        <br />
                        propósito
                    </h1>

                    <p className="mt-2 text-lg text-[#342A2A]">
                        ao que você não usa mais
                    </p>

                    <Link
                        href="/publicar"
                        className="mt-6 inline-block rounded-xl bg-[#E8B7E8] px-5 py-3 text-sm font-semibold text-[#342A2A] transition hover:scale-105"
                    >
                        Publicar item
                    </Link>
                </div>

            </div>
        </section>
    );
}