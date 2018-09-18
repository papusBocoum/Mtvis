import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button  from '@material-ui/core/Button';

import Deck from './deckgl'
import Analysis from './analysis'
import '../App.css';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">

          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Analysis" />
            <Tab label="Map" />
            <Tab label="MtVis" style={{marginRight:0}}/>
           
          </Tabs>
          
        </AppBar>

        {value === 0 && <TabContainer><Analysis></Analysis></TabContainer>}
        {value === 1 && <TabContainer>44</TabContainer>}
        
       
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

let Bar = withStyles(styles)(SimpleTabs)

export default Bar ;