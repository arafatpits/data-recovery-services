import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Database } from "lucide-react";

export default function ServiceCard({
  title,
  description = "Short description here",
  iconSrc,
  href = "#",
}) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={`Learn more about ${title}`}
    >
      <div className="flex flex-col h-full justify-between bg-muted rounded-2xl p-6 shadow-sm transition duration-300 ease-in-out group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:-translate-y-1 group-hover:scale-[1.01]">
        <div className="flex flex-col gap-4">
          {iconSrc ? (
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              width={44}
              height={44}
              className="object-contain w-11 h-11"
            />
          ) : (
            <Database className="w-11 h-11 text-accent" />
          )}

          <h3 className="text-lg font-bold text-heading group-hover:text-white">
            {title}
          </h3>

          <p className="text-sm text-body group-hover:text-white leading-normal">
            {description}
          </p>
        </div>

        <div className="mt-6 text-base font-semibold text-primary group-hover:text-white inline-flex items-center gap-2">
          <span>Learn More</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
}
