import logo from './logo.svg';
import './App.css';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';

function App() {
  return (
    <div className="App">
        <div className ="components">
        <ButtonComponent className="button" text="Click Here" />
        <ImageComponent className="image"
            src="https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bed"
        />
        </div>
    </div>
  );
}

export default App;
