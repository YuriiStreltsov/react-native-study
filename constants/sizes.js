import { Dimensions } from 'react-native';

const minDeviceWidth = 380;
const minDeviceHeight = 420;

const isSmallScreenWidth = Dimensions.get('window').width < 380;

const whitespace = {
    MICRO: 2,
    TINY: 4,
    SMALL: 6,
    EXTRA_MEDIUM: 8,
    MEDIUM: 12,
    BASE: 16,
    LARGE: 24,
    EXTRA_LARGE: 32,
    HUGE: 48,
    EXTRA_HUGE: 72,
    BIG_SPACE: 100,
};

const border = {
    WIDTH_SMALL: 1,
    WIDTH_MEDIUM: 3,
    WIDTH_LARGE: 5,
    //
    RADIUS_MICRO: 3,
    RADIUS_TINY: 5,
    RADIUS_SMALL: 10,
    RADIUS_MEDIUM: 20,
    RADIUS_LARGE: 40,
};

const font = {
    MICRO: 2,
    TINY: 4,
    SMALL: 6,
    EXTRA_MEDIUM: 8,
    MEDIUM: 12,
    BASE: 16,
    LARGE: 24,
    EXTRA_LARGE: 32,
    HUGE: 48,
    EXTRA_HUGE: 72,
};

const other = {
    ELEVATION: 4,
};

const image = {
    SMALL: 150,
    MEDIUM: 300,
    LARGE: 500,
};

const Sizes = {
    minDeviceWidth,
    minDeviceHeight,
    isSmallScreenWidth,
    whitespace,
    font,
    border,
    image,
    ...other,
};

export default Sizes;
