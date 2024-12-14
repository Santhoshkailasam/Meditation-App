import { StyleSheet,View,Text } from "react-native";
import Overhead from "../assets/overhead_icon.svg";
import Flimrole from "../assets/icon/flimrole_icon.svg";
const FirstView = (props) => {
    return(
        <View style={[styles.relaxbox,{backgroundColor:props.backgroundColor}]}>
      <Text style={styles.relaxtext}>{props.textbox}</Text>
      <Text style={styles.audio}>7 day Audio and video series</Text>
      <View style={styles.overandflim}>
      <Overhead />
      <Flimrole style={styles.flimrole}/>
      </View>
     </View>
    );
};
const styles = StyleSheet.create({
    relaxbox:{
        marginTop:7,
        width:280,
        height:160,
        marginLeft:10,
        borderRadius:20
      },
      relaxtext:{
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        marginLeft:25,
        marginTop:10
      },
      audio:{
        color:"white",
        fontSize:13,
        marginLeft:25,
        marginTop:5
      },
      overandflim:{
        flexDirection:"row",
        marginTop:44,
        marginLeft:25
      },
      flimrole:{
        marginLeft:20,
      },
});
export default FirstView;