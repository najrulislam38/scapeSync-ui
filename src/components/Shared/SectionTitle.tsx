export default function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold leading-16 text-center pb-3">
        {title}
      </h1>
    </div>
  );
}
