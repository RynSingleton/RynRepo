export default function ListContainer({ children, className }) {
  return (
    <section className={className}>
      <div>{children}</div>
    </section>
  );
}
