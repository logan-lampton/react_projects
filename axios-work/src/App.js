import Title from "./components/Title";
import FirstRequest from "./components/FirstRequest";
import Headers from "./components/Headers";
import PostRequest from "./components/PostRequest";

function App() {
  return (
    <main>
      <Title />
      <div>
        <div className='app-section'>
          <FirstRequest />
        </div>
        <div className='app-section'>
          <Headers />
        </div>
        <div className='app-section'>
          <PostRequest />
        </div>
      </div>
    </main>
  );
}

export default App;
