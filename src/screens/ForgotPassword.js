import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Background from './background';
import Fields from './Fields';
import Btn from './Btn';
import { darkGreen } from '../Constants';

const ForgotPassword = (props) => {
  return (
    <Background>
        <View style = {styles.forgotContainer}>
          <Text style={styles.forgotTxt}>Reset Your</Text>
          <Text style={styles.forgotTxt}>Password</Text>
        </View>
        <View style = {styles.styleContainer}>
        <Fields  placeholder = 'Old Password' secureTextEntry ={true}/>
        <Fields  placeholder = 'New Password' secureTextEntry ={true}/>
        <Fields  placeholder = 'Confirms Password' secureTextEntry ={true}/>
        <View style = {styles.btnStyle}>
            <Btn bgColor={darkGreen} txtColor='white' btnLabel={'Reset Password'} 
            Press={()=>{ alert('Password is changed') 
            props.navigation.navigate('login') }} />
        </View>
    </View>
    </Background>
    
  );
};

const styles = StyleSheet.create({
    forgotContainer:{
        alignItems:'center',
        width:400,
        marginVertical:20
      },
      forgotTxt:{
       fontSize:55,
       fontWeight:'bold',
       color:'white',
       
      },
      styleContainer:{
        backgroundColor:'white',
        height:700,
        width:400,
        borderTopLeftRadius:130,
        paddingTop:80,
        alignItems:'center',
        
       },
    btnStyle:{
        paddingTop:80
    }   
});
export default ForgotPassword;