import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const header = (
  <header>Hello my first app</header>
)

const footer = (
  <footer>Hello my first footer</footer>
)
interface IHeaderProps {
  appTitle: string,
  color: string
}

interface IMain {
  login: boolean
}

const Main = ({login}: IMain) => {
  return (
    <main>
      {
        login ? 'You can see this content' : 'Go away'
      }
    </main>
  )
}

const stylesOfHeader = {
  color:'red'
};

const Header = ({appTitle, color}: IHeaderProps) => {
  
  return (
     <header style={stylesOfHeader}>
       Hello {appTitle === 'first' ? 'first' : 'second'}     
     </header>
     )
} // компанент 
function App() {
   const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Header appTitle={'first'} color={'blue'} />
      <Main login={login} />

      <Header appTitle={'second'} color={'green'}/> 
      <button onClick={() => setLogin(!login)}>Login</button>
    </div>
  );
}

export default App;
