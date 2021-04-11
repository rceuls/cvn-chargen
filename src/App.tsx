import Chargen from './Chargen';
import { generateCharacter } from './services/character.generator';

function App() {
  return (
    <div className="container">
      <Chargen genChar={generateCharacter()} />
      <hr />
      <div className="row">
        <div className="col-sm">
          <p>
            <small className="text-muted">
              This is open source software, check the{' '}
              <a
                href="https://github.com/rceuls/cvn-chargen"
                target="_blank"
                rel="noreferrer"
              >
                repository
              </a>
              !
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
