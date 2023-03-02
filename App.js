import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another Text</Text>
        <Text style={styles.content}>Hello World</Text>
      </View>
      <Button title='Tap me'/>
    </View>
  );
}

// we can use external object for styling but it is not recommended
// using stylesheet module gives you auto correction of the style properties
// and as well as errors displayed in browser if any!!
// const styleObj = {
//   borderWidth: 2, padding: 6, borderColor: 'red'
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleCon :{
    padding: 2,
    borderWidth: 2,
    borderColor: 'blue'
  },
  content: { borderWidth: 2, padding: 6, borderColor: 'red'}
});
