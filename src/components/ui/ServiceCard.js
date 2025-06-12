import Image from "next/image";

export default function ServiceCard({
  title,
  description = "Short description here",
  iconSrc,
}) {
  return (
    <div
      className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={`Service card for ${title}`}
    >
      <div className="flex flex-col h-full justify-between bg-muted rounded-2xl p-6 shadow-sm transition duration-300 ease-in-out group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:-translate-y-1 group-hover:scale-[1.01]">
        <div className="flex flex-col gap-4">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              width={44}
              height={44}
              className="object-contain w-11 h-11"
            />
          )}

          <h3 className="text-lg font-bold text-heading group-hover:text-white">
            {title}
          </h3>

          <p className="text-sm text-body group-hover:text-white leading-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
