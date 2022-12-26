import './App.css';
import Logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header>
        <h2>Nome Livro</h2>
      </header>
      <main>
        <img src={Logo} alt="Book" style={{ width: '300px' }} />
        <h4>Start of synopsis ...</h4>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum."
        </p>
      </main>
      <section>
        <img src={Logo} alt="Author" style={{ width: '300px' }} />
        <h3>
          Author Name
        </h3>
        <p>
          Aboth the author: Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
        </p>
      </section>
      <section>
        <h3>
          Buy the book
        </h3>
        <p>
          To continue reading the book, simply purchase its digital version right here.
        </p>
        <a href="https://www.packzin.com.br/" target="_blank" rel='noreferrer'>Pursh</a>
      </section>
    </div>
  );
}

export default App;
