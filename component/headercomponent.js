import Hamburger from "../assets/hamberger_icon.svg"
import Logo from "../assets/logo.svg"
import React from "react";
import { Text,StyleSheet,View } from "react-native";
const Headercomponent = () =>{
    return(
        <View style={styles.main}>
        <Hamburger width={40} height={20} style={styles.ham} />
        <Logo width={50} height={100} style={styles.logo} />
      </View>
    );
};
const styles = StyleSheet.create({
    ham:{
      marginTop:50,
      marginLeft:10,
  },
  logo:{
    marginLeft:105,
    marginTop:10,
  },
  main:{
    flexDirection:"row",
  }
});
export default Headercomponent;