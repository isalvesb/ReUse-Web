import Image from "next/image";

export default function ProductCard({
    name,
    condition,
    distance,
    type,
    image,
}) {
    return (
        <article className="self-stretch inline-flex justify-between items-center">
            {/* Imagem do produto */}
            <div className="relative h-44 w-80 shrink-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>

            {/* Informações do produto */}
            <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                    <h3 className="w-48 h-4 justify-center text-[#342a2a] text-lg font-bold font-['Inter'] leading-9 mb-5">
                        {name}
                    </h3>

                    <p className="self-stretch justify-center text-stone-600 text-sm font-medium font-['Inter']">
                        {condition}
                    </p>

                    <p className="self-stretch justify-center text-stone-600 text-sm font-medium font-['Inter']">
                        {distance}
                    </p>
                </div>

                {/* Tipo de anúncio */}
                <span className="self-stretch justify-center text-stone-600 text-sm font-medium font-['Inter']">
                    {type}
                </span>
            </div>
        </article>
    );
}