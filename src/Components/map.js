import React, { Component } from "react"
import ReactMapGL, {Marker} from "react-map-gl"
import DeckGL, { ArcLayer, GridLayer,OrthographicView,FirstPersonView,MapView } from "deck.gl"

import {scaleLinear} from 'd3-scale' 

import {Controller} from './Controller'

import * as d3 from "d3";
import * as MDIcons from "react-icons/md"

import {dataset,

  accessToken,coords,hexagon_layer} from './datasets'
import { max } from "../../node_modules/_d3-array@1.2.4@d3-array";


const viewport = new MapView({id: 'primary-map'});



  









var linearScale = scaleLinear()
                          .domain([0,80000])
                          .range([1,5]);

                          var colorScale = scaleLinear()
                          .domain([0,80000])
                          .range([0,1]);
class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: 18.4843, 
      longitude: -4.1830,
      zoom: 4,
      gridData: [],
      arcData: [],
      showFlights: true,
      showLocations: true
    }
  }

 

  componentDidMount() {

    

   
    this.setState({
      arcData:dataset
    })
  }

  onViewportChange(viewport) {
    const { latitude, longitude, zoom } = viewport
    this.setState({ latitude, longitude, zoom })
  }

  render() {
    const {
      latitude,
      longitude,
      zoom,
      gridData,
      arcData,
      showFlights,
      showLocations
    } = this.state
    const { innerWidth: width, innerHeight: height } = window
    const viewport = {
      width: 698,
height: 600,
      longitude,
      latitude,
      zoom,
      pitch: 0,
      bearing: 0
    }

    let markers = coords.map(coord=>{

return <Marker latitude={coord[1]} longitude={coord[0]} offsetLeft={-20} offsetTop={-10}>
<MDIcons.MdLocationOn size={25} color="#F0F0F0" />
</Marker>

    })

    return (
      <div>
        <ReactMapGL


          {...viewport}
          mapboxApiAccessToken={accessToken}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={vp => this.onViewportChange(vp)}
        >
         <Controller
            showFlights={showFlights}
            showLocations={showLocations}
            onFlightClicked={() => this.setState({ showFlights: !showFlights })}
            onLocationClicked={() =>
              this.setState({ showLocations: !showLocations })
            }
            onViewportChange={vp => this.onViewportChange(vp)}
          />
          
          <DeckGL
            {...viewport}

           

            
            layers={[
              
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
                elevationRange:[0,10000],
                getPosition: d => d.coords,
               // onHover: ({object}) => setTooltip(`${object.position.join(', ')}\nCount: ${object.count}`)
              })
            
              

             
            
              
            
            ]}
          />
          {markers}
        </ReactMapGL>
      </div>
    )
  }
}

export default Map;