import { StyleSheet,View,Text } from "react-native";
const Nav = ( props ) =>{
    return(
        <View style={[styles.nav,{backgroundColor: props.backgroundColor}]}>
           <Text style={{color:props.Color}}>Insomania</Text>
       </View>
    );
};
const styles = StyleSheet.create({
  nav:{
    width:100,
    height:40,
    paddingTop:7,
    paddingLeft:15,
    marginLeft:10,
    borderRadius:8,
    marginTop:10
  }
});
export default Nav;