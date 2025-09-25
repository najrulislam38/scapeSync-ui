import React from "react";

interface Props {
  img?: string;
  icon?: React.ElementType;
  title: string;
  subtitle: string;
  color?: string;
}

export default function StoreBtn({ img, icon, title, subtitle, color }: Props) {
  return (
    <div
      className={`w-fit flex gap-3 items-center border border-primary rounded-md py-2 px-4 ${color}`}
    >
      {img ? (
        <div className="w-8">
          <img src={img} alt="google play icon" />
        </div>
      ) : icon ? (
        React.createElement(icon, { className: "text-4xl" })
      ) : null}
      <div>
        <p className="text-xs">{subtitle}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}
