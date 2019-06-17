import React from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import { addActions } from '../redux/Actions';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(){
        super();
        this.state= {
            name: ''
        }
    }

    render(){
        return(
            <View style={{margin: 16, borderColor: 'black', height: 200, width: 350}}>
                <View style={{height: 100, justifyContent: 'center', paddingTop: 100}}>
                    <Text> Enter Your Name </Text>
                </View>
                <View style={{margin: 8, marginLeft: 0}}>
                    <TextInput 
                    style={{height:50, width: 300, backgroundColor: '#fff'}} 
                    placeholder= 'Jhon Doe'
                    underlineColorAndroid= '#d2232a'
                    borderColor= '#d2232a'
                    borderWidth= '1.5'
                    autoCorrect= {false}
                    onChangeText= {(name)=> {
                    this.setState({name})}}/>
                </View>
                <TouchableOpacity
                style={{height:40, width: 60, backgroundColor: '#d2232a', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}
                onPress= {()=> {this.props.addName(this.state.name)}}>
                    <Text style={{justifyContent: 'center', alignItems: 'center', color: '#fff'}}> Add </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addName: (name) => dispatch(addActions(name))
    }
} 

export default connect(null, mapDispatchToProps)(Home);