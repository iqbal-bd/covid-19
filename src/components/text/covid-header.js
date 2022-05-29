import { View, StyleSheet,Image } from 'react-native'
import React from 'react'
import Text from './text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'

export default function CovidHeader() {
  return (


    <View style ={styles.container}>
      <View style={{backgroundColor:colors.blue,flex:0.4,padding: spacing[5],borderBottomLeftRadius:30,borderBottomEndRadius:30}}>
        <View style={styles.flexItems}>
          <Image
            source={require('../../img/menu.png')}
          />
          <Image
            source={require('../../img/bell.png')}
          /> 
        </View>
        <View style={styles.flexItems}>
            <Text style ={{color:colors.white,fontWeight:"600", fontSize:24, lingHeight:26.4}}>Covid-19</Text>
            <View style={{backgroundColor: colors.white,flexDirection:'row', justifyContent: 'space-between',borderRadius:20}}>
            <Image style ={{margin:10}} source={require('../../img/usa.png')}/>
            <Text style={{color: colors.black, margin: 10,fontWeight:"500",fontSize:14}}>USA</Text>
            <Image style ={{margin:15}} source={require('../../img/click.png')}/>
            </View>
        </View>
        <Text style ={{color:colors.white,fontWeight:"600", fontSize:20, lingHeight:22}}>Are you feeling sick ?</Text>
        <Text style={{color:colors.white,margin:20}}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
        <View style={styles.spaceBetween}>
            <View style={{backgroundColor: colors.orange,flexDirection:'row', justifyContent: 'space-evenly',borderRadius:20, width:155, height:48}}>
              <Image style ={{margin:15}} source={require('../../img/tel.png')} />
              <Text style={{color: colors.white, fontSize:16,fontWeight:"500",margin:12}}>Call Now</Text>
            </View>
            <View style={{backgroundColor: colors.lightBlue,flexDirection:'row', justifyContent: 'space-evenly',borderRadius:20, width:155, height:48}}>
              <Image style ={{margin:15}} source={require('../../img/nav.png')} />
              <Text style={{color: colors.white, fontSize:16,fontWeight:"500",margin:12}}>Send SMS</Text>
            </View>
        </View>
      </View>

      <View style={{backgroundColor:colors.white,flex:0.6,padding: spacing[5]}}>
        <Text style={{color:colors.black, fontWeight:"500", fontSize:20,margin:15,lineHeight:22}}>Prevention</Text>

         <View style={{backgroundColor: colors.white,flexDirection:'row', justifyContent: 'space-between',borderRadius:20}}>
           <View>
            <Image style ={{margin:10}} source={require('../../img/prevent.png')}/>
            <Text style={{color: colors.black,textAlign: 'center',fontWeight:"500", fontSize:14,lineHeight:18}}>Avoid close</Text>
            <Text style={{color: colors.black,textAlign: 'center',fontWeight:"500", fontSize:14,lineHeight:18}}>contact</Text>
           </View>
          
            <View>
              <Image style ={{margin:10}} source={require('../../img/wash.png')}/>
              <Text style={{color: colors.black,textAlign: 'center',fontWeight:"500", fontSize:14,lineHeight:18}}>Clean your</Text>
              <Text style={{color: colors.black,textAlign: 'center',fontWeight:"500", fontSize:14,lineHeight:18}}>hands often</Text>
            </View>

            <View>
              <Image style ={{margin:10}} source={require('../../img/mask.png')}/>
              <Text style={{color: colors.black,textAlign: 'center',fontWeight:"500", fontSize:14,lineHeight:18}}>Wear a</Text>
              <Text style={{color: colors.black,textAlign: 'center',fontWeight:"500", fontSize:14,lineHeight:18}}>facemask</Text>
            </View>
        
            </View>
              <Image style ={{marginTop:20,margin:10}} source={require('../../img/test.png')}/>
            <View>
            
          </View>

      </View>


      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
    },
    flexItems:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:36,
    },

    spaceBetween:{
      flexDirection: 'row',
        justifyContent: 'space-between',
    }

    
})