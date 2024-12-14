import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Footer from "./component/footer";
import Nav from "./component/navcomponent";
import FirstView from "./component/firstviewbox";
import Secondview from "./component/secondviewbox";
import Thirdview from "./component/Thirdviewbox";
import Headercomponent from "./component/headercomponent";
import Headings from "./component/Headings";
const Screenpage = () => {
  return (
    <View style={styles.container}>
    {/* Header: Fixed at the top */}
    <View style={styles.header}>
      <Headercomponent></Headercomponent>
    </View>

    {/* Scrollable Content */}
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View>
        <Text style={styles.welcome}>Welcome back</Text>
        <Text style={styles.kailash}>Santhosh</Text>
      </View>
      {/* Nav Bar */}
      <View style={styles.changetorow} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Nav backgroundColor="#40ed99"></Nav>
      <Nav backgroundColor="black" Color="white"></Nav>
      <Nav backgroundColor="black" Color="white"></Nav>
      <Nav backgroundColor="black" Color="white"></Nav>
      </ScrollView>
      </View>
      {/*relaxation content */}
      <Headings text="Recommanded"></Headings>
      <View style={styles.changetorow}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FirstView backgroundColor="#3dc0c4" textbox="Relaxing Meditation"></FirstView>
      <FirstView backgroundColor="#2385a6" textbox="Sleep"></FirstView>
      </ScrollView>
      </View>
      {/*Playlist*/}
      <Headings text="Playlist"></Headings>
      <View style={styles.changetorow}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Secondview  backgroundColor="#3c8254" ></Secondview>
      <Secondview  backgroundColor="#40edb1"></Secondview>
      </ScrollView>
      </View>
      {/*Recent*/}
     <Headings text="Recent"></Headings>
      <View style={styles.changetorow}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <Thirdview backgroundColor="#7faee3" textbox="Calming Sounds"></Thirdview>
      <Thirdview backgroundColor="#5664bf" textbox="Insomnia"></Thirdview>
      <Thirdview backgroundColor="#ba6bd6" textbox="Timer Sleep"></Thirdview>
      </ScrollView>
      </View>
    </ScrollView>

    {/* Footer */}
    <View style={styles.footer}>
      <Footer></Footer>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1, // Takes full screen space
},
header: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  height: 80,
  paddingHorizontal: 10,
  position: "absolute", 
  top: 0,
  width: "100%",
  zIndex: 1,
  marginTop:19
},
scrollContent: {
  paddingTop: 90, // Space for fixed header
  paddingBottom: 100, // Space for fixed footer
},
welcome: {
  fontWeight: "bold",
  marginLeft: 10,
  fontSize: 20,
},
kailash: {
  marginLeft: 10,
  fontSize: 20,
},
changetorow:{
  flexDirection:"row"
},
}  
  );
export default Screenpage;
