import { StyleSheet, Text, View ,TextInput} from 'react-native';
import React from 'react';
import { darkGreen } from '../Constants';

const Fields = (props) => {
  return (
    <TextInput {...props} style = 
    {{borderRadius:100,
      color: darkGreen,
      paddingHorizontal:12,
      width:"80%",
      backgroundColor: '#c7c7c7',
      marginVertical:10
    }}>


    </TextInput>
  );
};



const styles = StyleSheet.create({

});
export default Fields;