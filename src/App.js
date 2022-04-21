import './App.css';
import ParentComponent from './components/ComponentMemoization';
// import Counter from './components/ConventionalUseReducer';
// import UseRefComponent from './components/UseRefComponent';
// import ControlInput from './components/ControlInput';
// import Listing from './components/Listing';
// import Home from './components/Propdrilling';
// import NameInput from './components/UnconventionalReducer';
// import Home from './components/Props';
// import User from './components/User';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <ControlInput /> */}
      {/* <Listing /> */}
      {/* <Home />  */}
      {/* <NameInput /> */}
      {/* <Counter /> */}
      {/* <UseRefComponent /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
