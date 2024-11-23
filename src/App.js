import logo from './logo.svg';
import './App.css';

import MyHeader from './components/header.tsx'
import StandardImageList from './components/StandardImageList.tsx'
import Home from './components/Home.tsx'
import ContactMe from './components/ContactMe.tsx'

function App() {
  return (
    <div className="App" style={{backgroundColor:'#D4BACB'}}>
      <MyHeader/>
      <Home/>
      <StandardImageList />
      <ContactMe />
    </div>
  );
}

export default App;
