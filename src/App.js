import './index.css';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';

function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div>
      <div className='container is-fluid'>
        <button onClick={() => handleResetClick()} className='button is-danger'>
          Reset Both Playlists
        </button>
        <hr />
        <MoviePlaylist />
        <hr />
        <SongPlaylist />
      </div>
    </div>
  );
}

export default App;
