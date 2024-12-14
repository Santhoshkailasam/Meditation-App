import Playnow from "../assets/icon/play_icon.svg";
import { StyleSheet,View,Text } from "react-native";
const Secondview = (props) =>{
  return(
    <View style={[styles.relaxsongbox,{backgroundColor:props.backgroundColor}]}>
      <Text style={styles.relaxtext}>Relax Songs</Text>
      <Text style={styles.audio}>sometimes the most productive thing you can do relax</Text>
      <View style={styles.playbox}>
        <Text style={styles.play}>Play now </Text>
        <Playnow style={styles.playsvg} />
      </View>
     </View>
)};
const styles=StyleSheet.create({
    relaxsongbox:{
        marginTop:7,
        width:280,
        height:160,
        marginLeft:10,
        borderRadius:20
      },
      playbox:{
        backgroundColor:"white",
        flexDirection:"row",
        width:90,
        height:30,
        marginLeft:25,
        marginTop:20,
        borderRadius:5
      },
      play:{
        marginTop:5,
        marginLeft:4,
        fontWeight:"bold"
      },
      playsvg:{
        marginTop:9,
        marginLeft:3
      },
      relaxtext: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 25,
        marginTop: 10,
      },
      audio: {
        color: "white",
        fontSize: 13,
        marginLeft: 25,
        marginTop: 5,
      },
});
export default Secondview;