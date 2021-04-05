import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export const COLOR = {
    // White
    MAIN: '#ffffff',
    // Red
    MAIN_LIGHT: '#555',
    // FireBlack
    MAIN_DARK: '#222',
    // LightBlue
    LIGHTBLUE: '#81d4fa',
    SECONDARY: '#008080',
    WHITE: '#000000',
    CAROUSEL_BACKGROUND:'rgba(152,226,245,0.3)',
    CAUTION: '#ff0000',
};

export const SIZE = {
    // Title
    TITLE: wp('7%'),
    // Paragraph
    PARAGRAPH: wp('4.5%'),
    // Icon
    ICON: wp('7%'),
    // CoverImage
    COVERIMAGE_WIDTH: wp('100%'),
    COVERIMAGE_HEIGHT: wp('40%')
}

export const ICONTYPE = {
    // Ionicons
    IONICONS: 'Ionicons',
    // MaterialCommunityIcons
    MATERIALCOMMUNITYICONS: 'MaterialCommunityIcons',
}
