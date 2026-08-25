import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
    name,
    condition,
    distance,
    type,
    image,
    href = "#",
}) {
    return (
        <Link href={href} className="group">
            <article className="flex gap-5">

                {/* Imagem */}
                <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Informações */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-base font-semibold text-[#342A2A]">
                        {name}
                    </h3>

                    <p className="mt-1 text-sm text-[#666]">
                        Usado • {condition}
                    </p>

                    <p className="text-sm text-[#666]">
                        {distance} de você
                    </p>

                    <p className="text-sm text-[#666]">
                        {type}
                    </p>
                </div>

            </article>
        </Link>
    );
}