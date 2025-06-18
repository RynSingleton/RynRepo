export default function ProjectList({title, children}) {
  return (
    <div className="projectlist-container">
      <h3>{ title }</h3>
      <div className="projectlist-items">
        { children }  
      </div>
    </div>
  );
}
