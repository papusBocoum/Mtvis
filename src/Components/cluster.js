import React from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'
import { generateCountriesData } from '@nivo/generators'
import { colors } from './datasets'
import '../App.css';

const Bubble = () => (
    <div className="chart">
        <ResponsiveBubble
            root={{
                country: 'root',
                children: generateCountriesData(['value'], { size: 1000}),
            }}
            identity="country"
            value="value"
            leavesOnly={false}
            colors='nivo'
            labelTextColor="#000"
            labelSkipRadius={12}
           
            borderWidth={1}
            borderColor="lighblue"
            padding={6}
            isInteractive={true}
            motionStiffness={90}
        motionDamping={12}
        colorBy="country"
        padding={8}
        labelTextColor="inherit:darker(0.8)"
        
        
        />
        
    </div>
)

export default Bubble