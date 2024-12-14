import React from "react";
import { Text,View,StyleSheet,ImageBackground} from "react-native";
import Plant from "./assets/plant_svg.svg";
import AudioWaveform from "./Animatedline";
import Backward from "./assets/icon/backward_icon.svg"
import Pause from "./assets/icon/pause_icon.svg"
import Forward from "./assets/icon/forward_icon.svg"
import Footer from "./component/footer";
const Relax  = ()=>{
    return(
    <ImageBackground source={require("./assets/background.png")}  style={styles.background} >
        <View style={styles.container}>
            <View style={{paddingLeft:74 }}>
         <Plant width={170} height={200} style={{paddingLeft:74 }}></Plant>
         </View>
         <Text style={{fontSize:20,marginLeft:18,fontWeight:"bold",paddingLeft:74}} >Relaxing sound</Text>
         <Text style={{fontSize:16,marginLeft:45,paddingLeft:74}}>Meditation</Text>
        <AudioWaveform></AudioWaveform>
        <View style={styles.row}>
        <Backward style={{marginTop:10}}></Backward>
        <Pause></Pause>
        <Forward style={{marginTop:10}}></Forward>
        </View>
        </View>
        <Footer></Footer>
    </ImageBackground>

)};
const styles=StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"center"
    },
    container:{
        backgroundColor:"white",
        width:320,
        height:400,
        marginLeft:20,
        marginTop:220,
        borderRadius:20,
        },
    row:{
        flexDirection:"row",
        marginLeft:80
    }
});

export default Relax;