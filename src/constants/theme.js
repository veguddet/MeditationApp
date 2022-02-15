import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  accent: '#FF7363',
  purple: '#817DC0',
  black: '#171717',
  white: '#FFFFFF',
  background: '#252C4A',
  lightPurple: '#C7B8F5', 
  shadow: '#9e9898',
};

export const SIZES = {
  base: 10,
  width,
  height,
};
