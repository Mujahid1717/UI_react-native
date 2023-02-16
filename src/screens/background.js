import React from 'react';
import { View,StyleSheet, ImageBackground}from 'react-native';


const Background = ({children}) => {
    return(
        <View>
            <ImageBackground 
            source={require('../../assets/nature.jpg')} 
            style = {styles.imageStyle}
            />
            <View style={{position:'absolute'}}>
                {children}
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    imageStyle :{
        height:'100%'
    }
});
export default Background;