const Text  = () =>{
    return(
        <View>
      <Text style={styles.welcome}>Welcome back</Text>
      <Text style={styles.kailash}>Kailash</Text>
    </View>
    );
};
const styles = StyleSheet.create({
  welcome:{
    fontWeight:"bold",
    marginLeft:10,
    fontSize:20,
  },
  kailash:{
    marginLeft:10,
    fontSize:20,
  }
});
export default Text;