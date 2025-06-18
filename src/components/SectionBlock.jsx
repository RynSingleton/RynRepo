export default function SectionBlock({ children, height = 'auto', className }) {
  return (
    <section style={{
      height,
      position: 'relative',
      overflow: 'hidden',
    }} className={className}>
      {children}
    </section>
  );
}
