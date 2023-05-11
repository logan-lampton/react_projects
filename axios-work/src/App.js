import Title from "./components/Title";
import FirstRequest from "./components/FirstRequest";
import Headers from "./components/Headers";
import PostRequest from "./components/PostRequest";
import GlobalInstance from "./components/GlobalInstance";
import './axios/global'

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
        <div className='app-section'>
          <GlobalInstance />
        </div>
      </div>
    </main>
  );
}

export default App;
