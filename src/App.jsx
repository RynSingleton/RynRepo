import logo from './logo.svg';
import './App.css';
import ProjectList from './components/ProjectList';
import ContentPane from './components/ContentPane';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="app">
      <header className="app-header">

      </header>
      <main>
        <div className='app-container'>
            <ListContainer>
              <ProjectList title="Software"/>
              <ProjectList title="Code"/>
            </ListContainer>
          <ContentPane />
        </div>
      </main>
    </div>
  );
}

export default App;
