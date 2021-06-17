import ATM from './components/Atm'
import ChangeBlockColor from './components/Blocks'
import SwitchButton from './components/SwitchButton'
import SwitchText from './components/SwitchText'
function App() {
  return (
    <div>
     <h2>Task 1</h2>     
     <SwitchText />
     <h1>--------------</h1>
     <h2>Task 2</h2>     
     <SwitchButton />
     <h1>--------------</h1>
     <h2>Task 3</h2>
     <ATM />
     <h1>--------------</h1>
     <h2>Task 4</h2>
     <ChangeBlockColor />
     
    </div>
  );
}

export default App;
