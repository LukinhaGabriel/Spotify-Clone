import Image from "next/image";

export default function Cards({imageSrc, titleCard, className}) {
  return (
    <a href="#" className="cards">
      <div className={`cards ${className}`}>
        <Image src={imageSrc} alt={titleCard} />
        <span>{titleCard}</span>
      </div>
    </a>
  );
}
