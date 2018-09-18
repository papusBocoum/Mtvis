/// app.js
import React from 'react';
import DeckGL, { ArcLayer, GridLayer,OrthographicView,FirstPersonView,MapView } from "deck.gl"
import {StaticMap} from 'react-map-gl';
import {dataset,

    accessToken,coords,hexagon_layer} from './datasets'
import * as d3 from "d3";
import * as MDIcons from "react-icons/md"




import {scaleLinear} from 'd3-scale'
// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = accessToken;

// Initial viewport settings
const initialViewState = {
    latitude: 18.4843, 
    longitude: -4.1830,
    zoom: 4,
   
  pitch: 0,
  bearing: 0,
  width:500,
  height:500
  
};


var linearScale = scaleLinear()
                          .domain([0,80000])
                          .range([1,5]);

                          var colorScale = scaleLinear()
                          .domain([0,80000])
                          .range([0,1]);

// Data to be used by the LineLayer
const data = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}];

class Deck extends React.Component {
  render() {
    const layers = [
        new ArcLayer({
            id: 'arc-layer',
            data:[],
            pickable: true,
            getStrokeWidth: d=>linearScale(d.outbound),
            getSourcePosition: d => d.from.coordinates,
            getTargetPosition: d => d.to.coordinates,
            getSourceColor: d => d3.interpolateRdYlGn(colorScale(d.outbound)),

            getTargetColor: d => [Math.sqrt(d.outbound), 140, 0],
            //onHover: ({object}) => setTooltip(`${object.from.name} to ${object.to.name}`)
          }),

          new GridLayer({
            id: 'grid-layer',
            data:hexagon_layer,
            pickable: true,
            extruded: true,
            cellSize: 100000,
            elevationScale:5,
            elevationDomain:[0,500],
            elevationRange:[0,100000],
            getPosition: d => d.coords,
           // onHover: ({object}) => setTooltip(`${object.position.join(', ')}\nCount: ${object.count}`)
          })
    ];

    return (
      <DeckGL style={{marginTop:"20px"}}
        initialViewState={initialViewState}
        controller={true}
        layers={layers}

        
      >

<MapView id="map"  width="100%" style={{marginTop:"20px"}} height ="100%" controller={true} >
<StaticMap mapStyle="mapbox://styles/mapbox/dark-v9"  mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
</MapView>
        
      </DeckGL>
    );
  }
}


export default Deck;