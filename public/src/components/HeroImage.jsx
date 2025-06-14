export default function HeroImage({ image, alt }) {
  return (
    <div className="heroimage">
      <img src={image} alt={alt} />
      <span className="hero-label">Ryn Singleton</span>
    </div>
  );
}
