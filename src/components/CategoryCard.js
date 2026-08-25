import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
    title,
    description,
    image,
    href,
}) {
    return (
        <Link href={href} className="group block">
            <article>
                <h3 className="text-lg font-semibold text-[#342A2A]">
                    {title}
                </h3>

                <p className="mb-4 text-sm text-[#666]">
                    {description}
                </p>

                <div className="relative h-52 overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                    />
                </div>
            </article>
        </Link>
    );
}