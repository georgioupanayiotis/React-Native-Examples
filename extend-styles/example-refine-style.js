/** Here is the common style for two texts **/
import {StyleSheet} from 'react-native'

export const textStyleParent = {
  fontFamily: myFont,
  marginTop: '5%',
  textAlign: 'center',
};

export const textStyleA = {
  ...textStyleParent,
  fontSize: 25,
  fontWeight: 'bold'
};
     
export const textStyleB = {
  ...textStyleParent,
  marginBottom: '10%',
  fontSize: 18,
};