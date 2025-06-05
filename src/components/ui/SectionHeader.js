export default function SectionHeader({ title, description }) {
  return (
    <div className="text-left sm:text-center mb-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base lg:text-lg text-body max-w-2xl mx-auto sm:text-center">
          {description}
        </p>
      )}
    </div>
  )
}
