import { Text,StyleSheet,View } from "react-native";
const Headings = (props) =>{
    return(
        <View>
            <Text style={styles.recommand}>{props.text}</Text> 
        </View>
    );
};
const styles=StyleSheet.create({
    recommand:{
        marginLeft:10,
        fontWeight:"bold",
        marginTop:10
      }
});
export default Headings;