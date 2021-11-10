import "./App.css";
import Plot from 'react-plotly.js';

export default function PredPlot({ preds }) {
   return (
      <div>
         <h1>Predictions</h1>
         <hr className="sep" />
         <Plot
            data={[
               { x: ["Brain Tumor", "Mild Demented", "Moderate Demented", "Non Demented", "Very Demented"],
                 y: preds,
                 type: 'bar' }
            ]}
            layout={{width: 700, height: 500, title: "Brain Disorder"}}
         />
      </div>
   )
}