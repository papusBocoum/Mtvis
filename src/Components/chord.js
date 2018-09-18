import React from 'react'
import { ResponsiveChord } from '@nivo/chord'
import { generateChordData } from '@nivo/generators'
import { colors } from './datasets'
import '../App.css';

const Chord = () => (
    <div className="chord">
        <ResponsiveChord
            {...generateChordData({ size: 10})}
            enableLabel={true}
            margin={{
                top: 0,
                bottom: 0,
            }}
            arcOpacity={1}
            arcBorderWidth={1}
            
            arcBorderColor="#000000"
            ribbonOpacity={1}
            ribbonBorderWidth={1}
            ribbonBorderColor="#000000"
            colors={colors}
            isInteractive={true}
            animate={true}
          
        />
       
    </div>
)

export default Chord
