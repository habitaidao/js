import logo from './logo.svg';
import './App.css';

function App() {
  return (
/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
*/
<div className="App">
<h1>VeLive</h1>
<h2>Submit an image of your room.</h2>
<p className="lead"><b>Leave your room better and earn B3TR now.</b></p>

<form id="file-upload-form" className="uploader">
  <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
  <label for="file-upload" id="file-drag">
    <img id="file-image" src="#" alt="Preview" className="hidden" />
    <div id="start">
      <i className="fa fa-download" aria-hidden="true"></i>
      <div>Select a file or drag here</div>
      <div id="notimage" className="hidden">Please select an image</div>
      <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
    </div>
    <div id="response" className="hidden">
      <div id="messages"></div>
      <progress className="progress" id="file-progress" value="0">
        <span>0</span>%
      </progress>
    </div>
  </label>
</form>
</div>
  );
}

export default App;
