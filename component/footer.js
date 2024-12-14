import { Text, View, StyleSheet, ScrollView } from "react-native";
import Explore from "../assets/icon/explore_icon.svg";
import Statice from "../assets/icon/statice_icon.svg";
import User from "../assets/icon/user_icon.svg";
const Footer = () => {
    return(
    <View style={styles.footer}>
     <Explore />
     <Statice />
     <User />
    </View>
    );
};
const styles= StyleSheet.create({
    footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "black",
    height: 90,
    paddingVertical: 10,
    position: "absolute", 
    bottom: 0,
    width: "100%",
    paddingTop:30
  },
});
export default Footer;
