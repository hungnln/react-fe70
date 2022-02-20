import logo from './logo.svg';
import './App.css';
import DemoClassComponent from './DemoComponent/DemoClassComponent';
import DemoFunctionComponent from './DemoComponent/DemoFunctionComponent';
import BaiTapDungLayout from './BaiTapDungLayout/BaiTapDungLayout';
import DataBinding from './DataBinding/DataBinding';
import HandlingEvent from './HandlingEvent/HandlingEvent';

function App() {
  return (
    <div className="App">
      {
        /* <DemoClassComponent /> */
        // <DemoFunctionComponent />
      }
      {/* <BaiTapDungLayout /> */}
      <DataBinding />
      <HandlingEvent />

    </div>
  );
}

export default App;
