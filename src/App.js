import './App.css';
import Logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Book Name</h1>
      </header>
      <main className='align-center'>
        <img className='image-format' src={Logo} alt="Book" />
        <h2>Start of synopsis ...</h2>
        <p className='format-long-text'>
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
      <section className='align-center'>
        <img className='image-format' src={Logo} alt="Author" />
        <h2>
          Author Name
        </h2>
        <p className='format-long-text'>
          Aboth the author: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum."
        </p>
      </section>
      <section className='align-center'>
        <h2>
          Buy the book
        </h2>
        <p className='format-long-text'>
          To continue reading the book, simply purchase its digital version right here.
        </p>
        <div className='button' >
          <a href="https://www.packzin.com.br/" target="_blank" rel='noreferrer' className='link'>Pursh</a>
        </div>
      </section>
    </div>
  );
}

export default App;
