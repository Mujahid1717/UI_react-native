import { Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Background from './background';
import { darkGreen,green } from '../Constants';
import Fields from './Fields';
import Btn from './Btn';

const Login = (props) => {
  return (
    <Background>
        <View style = {styles.loginContainer}>
            <Text style= {styles.txtStyle}>Login</Text>
        </View>
        <View style = {styles.screenStyle}>
            <Text style = {styles.welcomeTxt}>Welcome Back</Text>
            <Text style= {styles.accountTxt}>Login to your account</Text>
            <Fields  placeholder = 'Email / Username'
             keyboardType ={'email-address'}/>
             <Fields  placeholder = 'Password' secureTextEntry={true} />
             <View style = {styles.forgotContainer}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('forgotPassword')}}>
                <Text style ={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>
             </View>
             <Btn bgColor={darkGreen} txtColor='white' btnLabel={'Login'} Press={()=>{ alert('logged in')}} />
             <View style = {styles.signupText}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Don't have an account ? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('signUp')}>
                <Text style={{color: darkGreen, fontWeight:'bold',fontSize:16}}>Signup</Text>
                </TouchableOpacity>
             </View>
        </View>
    </Background>
  );
};

const styles = StyleSheet.create({
    loginContainer:{
        alignItems:'center',
        width:400
    },
    txtStyle:{
        color:'white',
        fontWeight:'bold',
        fontSize:55,
        marginVertical:20
    },
    screenStyle:{
        backgroundColor:'white',
        height:700,
        width:400,
        borderTopLeftRadius:130,
        paddingTop:100,
        alignItems:'center'
    },
    welcomeTxt:{
        fontSize:40,
        color: darkGreen,
        fontWeight:'bold'
    },
    accountTxt:{
        color: 'gray',
        fontSize:19,
        fontWeight:'bold',
        marginBottom:20
    },
    forgotText:{
        color: darkGreen,
        fontWeight:'bold',
        fontSize:16
    },
    forgotContainer:{
        alignItems:'flex-end',
        width:"80%",
        paddingRight:16,
        marginBottom:100
    },
    signupText:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    }

});
export default Login;