import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        {/* CATEGORIAS */}
        <section className="mx-auto mt-16 max-w-7xl px-6">

          <h2 className="text-2xl font-bold text-[#342A2A]">
            Descubra por categorias
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">

            <CategoryCard
              title="Peças raras"
              description="Se apaixone por peças clássicas"
              image="/images/camera.jpg"
              href="/pecas-raras"
            />

            <CategoryCard
              title="Sapatos para todos os gostos"
              description="Encontre seu par perfeito"
              image="/images/shoes.jpg"
              href="/sapatos"
            />

            <CategoryCard
              title="Eletrônicos"
              description="Usado sim, mas continuam tinindo"
              image="/images/notebook.jpg"
              href="/eletronicos"
            />

            <CategoryCard
              title="Para sua casa"
              description="Decoração com estilo único para você inovar"
              image="/images/sofa.jpg"
              href="/moveis"
            />

          </div>
        </section>

        {/* PRODUTOS */}
        <section className="mx-auto mt-16 max-w-7xl px-6">

          <h2 className="text-2xl font-bold text-[#342A2A]">
            Produtos perto de você
          </h2>

          <div className="mt-8 grid gap-x-16 gap-y-8 md:grid-cols-2">

            <ProductCard
              name="Cadeira de madeira"
              condition="Bom estado"
              distance="1 km"
              type="Venda"
              image="/images/chair.jpg"
            />

            <ProductCard
              name="Tênis Adidas Pink"
              condition="Bom estado"
              distance="2 km"
              type="Venda"
              image="/images/pink-shoes.jpg"
            />

            <ProductCard
              name="Jaqueta de couro"
              condition="Tam 40"
              distance="1,4 km"
              type="Troca"
              image="/images/jacket.jpg"
            />

            <ProductCard
              name="Iphone 17 Pro"
              condition="Ótimo estado"
              distance="1,4 km"
              type="Venda"
              image="/images/iphone.jpg"
            />

            <ProductCard
              name="Teclado gamer"
              condition="Bom estado"
              distance="2 km"
              type="Doação"
              image="/images/keyboard.jpg"
            />

            <ProductCard
              name="Canon EOS 60D"
              condition="Bom estado"
              distance="2 km"
              type="Venda"
              image="/images/canon.jpg"
            />

          </div>

          <div className="mt-10 flex justify-center">
            <button className="rounded-xl bg-[#ebbbeb] px-8 py-3 text-sm font-semibold text-[#342A2A] transition hover:scale-105">
              Ver mais
            </button>
          </div>

        </section>

        {/* BANNER APP */}

        <section className="relative mt-30 mx-auto flex h-64 w-275 items-center overflow-hidden rounded-2xl bg-[#ebbbeb]">

          {/* Conteúdo */}
          <div className="absolute left-27.25 top-1/2 flex w-96 -translate-y-1/2 flex-col items-start gap-2">

            {/* Logo */}
            <Image
              src="/images/logo/ReUse-marrom.png"
              alt="ReUse"
              width={351}
              height={39}
              className="h-auto w-37.5 object-contain"
            />

            {/* Título */}
            <h2 className="font-(--font-krona) text-3xl leading-9 text-[#342A2A]">
              BAIXE AGORA O APP
            </h2>

            {/* Texto */}
            <p className="font-(--font-krona) text-base leading-6 text-[#342A2A]">
              <span className="font-bold">
                + 1.240 itens
              </span>{" "}
              ganharam um novo destino este mês.
            </p>

            {/* Imagem */}
            <Image
              src="/images/app/baixar-app.png"
              alt="baixe o app"
              width={395}
              height={298}
              className="w-96 h-72 "
            />
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}