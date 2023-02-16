import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { darkGreen, green } from '../Constants';
import Background from './background';
import Btn from './Btn';

const Home = (props) => {
return(
        <Background>
          <View style = {styles.container}>
                 <Text style={styles.headerText}>Lets Start</Text>
                 <Text style= {styles.secondHeaderText}>Going</Text> 
                 <Btn bgColor={darkGreen} txtColor='white' btnLabel={'Login'} 
                 Press={()=>props.navigation.navigate('login')}/>
                 <Btn bgColor='white' txtColor={darkGreen} btnLabel={'Signup'}
                 Press={()=>props.navigation.navigate('signUp')}
                 />       
          </View>

        </Background>    

);
};
const styles = StyleSheet.create({
        container:{
              marginHorizontal:50, 
              marginVertical:100,
              
        },
        headerText:{
           fontSize:64,
           color:'#ffffff',
           marginBottom:30
        },
        secondHeaderText:{
                fontSize:64,
                color:'white',
                marginBottom:40     
        }
});
export default Home;