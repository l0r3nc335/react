import logo from './logo.svg';
import './App.css';
import {HelloNonJSX,HelloJSX} from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import Welcome from './components/Welcome';
import Greet from './components/Greet'; //if has export default in Greet
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick'
import EventBind from  './components/EventBind'

function App() {
  return (
    <div className="App">


      {/*ES6 - JSX and NON-JSX Functional Components
      <HelloNonJSX />
      <HelloJSX />*/}

      {/*JSX - Class Component
      <Message />*/}

      {/*COUNTER - Class Component
      <Counter val={1}></Counter>*/}
      
      {/*JSX - Class Component with (PROPS)
      <Welcome name="enzo" age="32" ></Welcome>
      <Welcome name="rona" age="32" ></Welcome>
      <Welcome name="eden " age="32" ></Welcome>*/}

      {/*JSX - Class Click with (PROPS, )
      <Greet name="enzo" age="32" >
        <button>The above title is using props</button>
      </Greet>*/}

      
      {/*JSX - Class Component with EVENT
      <ClassClick ></ClassClick>
      {/*Function Click
      <FunctionClick ></FunctionClick>*/}

      {/*Event Binding*/}
      <EventBind />
    </div>
  );
}

export default App;
