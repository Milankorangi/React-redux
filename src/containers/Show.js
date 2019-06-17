import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { connect } from 'react-redux';

class Show extends React.Component {
    render(){
        return(
            <View style={{margin: 16, borderColor: 'red', height: 600, width: 300}}>
                <Text> {this.props.name} </Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        name: state
    }
}

export default connect(mapStateToProps)(Show);
