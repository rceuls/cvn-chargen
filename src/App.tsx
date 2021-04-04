import Chargen from './Chargen';
import { generateCharacter } from './services/character.generator';

function App() {
  return (
    <div className="container">
      <Chargen genChar={generateCharacter()} />
    </div>
  );
}

export default App;
