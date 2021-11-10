import './App.css';

import React, { useCallback, useState } from "react";
// Import the dropzone component
import Dropzone from "./Dropzone";
import PredPlot from './PredPlot';

import "./App.css";

function App() {

   const [uploaded, setUploaded] = useState(false);
   const [preds, setPreds] = useState([]);
   // onDrop function  
   const onDrop = useCallback(acceptedFiles => {
      // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
      console.log(acceptedFiles);

      // create form data
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);

      // send a synchronus POST request
      /*
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:5000/upload");
      let res = xhr.send(formData);
      */

      // send asynchronus post request
      fetch("http://localhost:5000/upload", {
         method: "POST",
         body: formData
      })
      .then(res => res.json())
      .then(dat => setPreds(dat.predictions))
      .then(_ => setUploaded(true))
      .catch(e => console.log(e));
   },[]);

   // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
   return (
      <main className="App">
         {uploaded ? (
            <PredPlot preds={preds}/>
         ) : (
            <div>
               <h1>Drag Brain Picture Here</h1>
               <Dropzone onDrop={onDrop}/>
            </div>
         )}
      </main>
   );
}

export default App;