import React, { Component } from 'react';

import '../App.css';
import Map from './map';
import Deck from './deckgl';
import Bubble from './cluster'
import Barchart from './barchart'
import Chord from './chord'


class Analysis extends Component {
    render() {
      return (
        
  
        
         <div class="firts-block">
   
         <div class="map">
         <h4 class="title">Intercity Transactions</h4>
         <hr></hr>

         <div classname="chord">

         <Chord></Chord>

         </div>
  
         
         
  
         
          
         </div>
  
         <div className="clusters">
         <h4 className="title">Tranctions Clusters</h4>
         <hr></hr>
        
         <div className="chart" >
         <Bubble ></Bubble>

        

         
         
  
         </div>
         <div className="barContainer">
  <Barchart></Barchart>
         </div>
  
  
         </div>
         
         
  
         </div>
        
      );
    }
  }
  
  export default Analysis;