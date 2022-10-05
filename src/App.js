import { SearchForm } from './components';
import { useSelector } from 'react-redux';
import { UserBar, RepoList } from './layout';
import './App.css';

function App() {
  const loading = useSelector(state => state.loading);
  const loaded = useSelector(state => state.loaded)
  const error = useSelector(state => state.error)
  const renderResult = () => loading ? <p>Loading . . .</p> : <UserBar />

  return (
    <div className="App">
      <SearchForm />
      { error ? <p role='alert'>Oops there's been an error!</p> : renderResult() }
    
    { loaded ? <RepoList /> : 'It is rather simple. Search a username and find the repositories.'}
    </div>
  );
}

export default App;
