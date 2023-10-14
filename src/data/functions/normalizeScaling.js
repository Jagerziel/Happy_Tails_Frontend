import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes used are based on UX/UI proportional sizes
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale_H = size => width / guidelineBaseWidth * size; // Use for Text in Landscape Mobile Apps
const scale_V = size => height / guidelineBaseHeight * size; // Use for Text in Portrait Mobile Apps
const scale_mod = (size, factor = 0.5) => size + ( scale_H(size) - size ) * factor; // Use for attributes (padding, margin, etc.)

export {scale_H, scale_V, scale_mod};

/*
The resource guide for this code is:
https://medium.com/soluto-engineering/size-matters-5aeeb462900a
*/