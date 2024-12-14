import { StyleSheet,View,Text } from "react-native";
const Thirdview = (props) =>{
  return(
    <View style={[styles.recent,{backgroundColor:props.backgroundColor}]}>
      <Text style={styles.relaxtext}>{props.textbox}</Text>
     </View>
)};
const styles=StyleSheet.create({
    recent:{
        marginTop:7,
        width:130,
        height:120,
        marginLeft:10,
        borderRadius:20,
        overflow: "hidden", 
      },
      relaxtext: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 25,
        marginTop: 10,
      },
});
export default Thirdview; 