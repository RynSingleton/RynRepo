import logo from './logo.svg';
import './App.css';
import ProjectList from './components/ProjectList';
import ContentPane from './components/ContentPane';
import ListContainer from './components/ListContainer';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <div className="app">
      <header>
        <PageHeader className="app-header"/>
      </header>
      <main>
        <div className='app-container'>
            <ListContainer>
              <ProjectList title="Software">
                <ul>
                  <li>Tea Garden</li>
                  <li>Notion to GCal</li>
                  <li>Luminescense End2End</li>
                </ul>
              </ProjectList>
              <ProjectList title="Writing">
                <ul>
                <li>Tea Garden</li>
                <li>Where the Tea Grows</li>
                <li>The Logic Problem</li>
                </ul>
              </ProjectList>
            </ListContainer>
          <ContentPane />
        </div>
      </main>
    </div>
  );
}

export default App;
