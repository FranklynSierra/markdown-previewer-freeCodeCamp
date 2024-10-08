

import './App.css';
import Controle from './components/Controle';

import Sounds from './components/Sounds';

import { play } from './play';
import { useThemeContext } from './context/ThemeContext';

function App() {
  const {contextTheme} = useThemeContext()
  console.log(contextTheme)
  return (
   <div className='app'>
   <div className='sub'>
    <div  id='drum-machine'>
    
    <Sounds  play={play}/>
    
    
    </div>
    <Controle text={contextTheme}></Controle>
    </div>
    </div>
  );
}

export default App;
