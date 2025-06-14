export default function SectionBlock({ children, height = 'auto' }) {
  return (
    <section style={{
      height,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'stretch'
    }}>
      {children}
    </section>
  );
}
