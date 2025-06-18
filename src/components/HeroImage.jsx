export default function HeroImage({ image, alt }) {
  return (
    <div className="heroimage">
      <img src={image} alt={alt} />
      <span className="hero-label">{alt}</span>
      <span className="hero-project"> Current Project: Tea Garden App</span>
    </div>
  );
}
