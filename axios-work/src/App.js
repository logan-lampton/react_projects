import Title from "./components/Title";
import FirstRequest from "./components/FirstRequest";
import Headers from "./components/Headers";

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
      </div>
    </main>
  );
}

export default App;
