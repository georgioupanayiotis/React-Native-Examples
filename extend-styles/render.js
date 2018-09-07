import style from './example-refine-style.js'

export default class Panel extends Component {
 render() {
   return (
    <View style={containerStyle}>
        <Text style={text1Style}>
            { text1 }
        </Text>
        <Text style={text2Style}>
            { text2 }
        </Text>
    </View>
   )
 }
