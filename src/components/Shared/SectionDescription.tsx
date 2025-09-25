export default function SectionDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div>
      <p className=" max-w-[565px] mx-auto text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
}
