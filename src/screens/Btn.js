import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Btn ({bgColor, btnLabel,txtColor, Press}){
    return(
        <TouchableOpacity 
        onPress={Press}
        style = {{backgroundColor: bgColor,
         borderRadius:100, 
         alignItems:'center',
         width:290 ,
         paddingVertical:5,
         marginVertical:20
         }}>
        <Text style = {{color:txtColor, 
            fontSize:24, fontWeight:'bold'}}>{btnLabel}</Text>

        </TouchableOpacity>
    );

};

