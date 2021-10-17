import React from 'react';
import Button from './components/Button/button';
import {ButtonSize, ButtonType} from './types/button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' size={ButtonSize.Large} disabled>baidu Link</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
