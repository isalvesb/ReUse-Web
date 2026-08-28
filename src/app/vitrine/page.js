import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const products = [
    {
        id: 1,
        name: "Cadeira de madeira",
        condition: "Usado • Bom estado",
        distance: "2 km de você",
        image: "/images/itens/cadeira.jpg",
    },
    {
        id: 2,
        name: "Canon EOS 60D",
        condition: "Usado • Bom estado",
        distance: "2 km de você",
        image: "/images/itens/canon.png",
    },
];

export default function Vitrine() {
    return (
        <>
            <Header />

            <main className="mx-auto max-w-7xl px-6 py-10">
                <h1 className="text-3xl font-bold">
                    Vitrine
                </h1>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}