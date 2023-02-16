import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './screens/background';
import Fields from './screens/Fields';
import Btn from './screens/Btn';
import { darkGreen } from './Constants';


const SignUp = (props) => {
  return (
    <Background>
      <View style = {styles.registerContainer}>
       <Text style={styles.registerTxt}>Register</Text>
      </View>
      <View style = {styles.styleContainer}>
      <Fields  placeholder = 'First Name'/>
       <Fields  placeholder = 'Last Name'/>
       <Fields  placeholder = 'Email Address'
        keyboardType ={'email-address'}/>
       <Fields  placeholder = 'Contact Number' keyboardType={'number'}/>
       <Fields  placeholder = 'Password' secureTextEntry ={true}/>
       <Fields  placeholder = 'Confirm Password' secureTextEntry ={true}/> 
       <View style = {styles.termAnd}>
           <Text style ={styles.bySigning}>By signing in, you agree to our {''}</Text>
           <Text style = {styles.termTxt}>Terms & Conditions</Text>
        </View> 
        <View style = {styles.termAnd}>
           <Text style ={styles.bySigning}>and {''}</Text>
           <Text style = {styles.termTxt}>Privacy Policy</Text>
        </View>                    
        <Btn bgColor={darkGreen} txtColor='white' btnLabel={'Signup'} 
        Press = {() =>{ alert ('Account Created') 
        props.navigation.navigate('login')}} />



      </View>  
    </Background>
  );
};

const styles = StyleSheet.create({
 registerContainer:{
   alignItems:'center',
   width:400
 },
 registerTxt:{
  fontSize:55,
  fontWeight:'bold',
  color:'white',
  marginVertical:15
 },
 styleContainer:{
  backgroundColor:'white',
  height:700,
  width:400,
  borderTopLeftRadius:130,
  paddingTop:40,
  alignItems:'center'
 },
bySigning:{
  fontSize:16,
  color:'grey'

},
termTxt:{
  color: darkGreen,
  fontWeight:'bold',
  fontSize:16,
  
},
termAnd:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  width:"82%",
  paddingRight:16,
  marginTop:5,
  marginBottom:5
},
});
export default SignUp;