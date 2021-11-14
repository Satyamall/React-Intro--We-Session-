
import './App.css';
import Button from './Component/Button/Button';
import icon from "./svg/download.png";
import List from './Component/List/List';

function App() {
  return (
    <div className="App App-header">
        <Button type="success" title="A"/>
        <Button type="warning" title="B"/>
        <Button type="error" title="C"/>
        <Button type="error" disabled={true} title="E"/>
        <button className="button">D</button>
        <img src={process.env.PUBLIC_URL +"/logo192.png"} alt="logo"/>
        <img src={icon} alt="rect"/>
        <List/>
    </div>
  );
}

export default App;
