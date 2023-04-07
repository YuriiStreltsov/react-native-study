import { useWindowDimensions } from 'react-native';
import Sizes from '../constants/sizes';

type Sizes = {
    small: number;
    large: number;
};

export default function useDimensionsByOrientation(sizes?: Sizes): {
    isSmallWidthScreen: boolean;
    isSmallHeightScreen: boolean;
    horizontalIndent: number;
    verticalIndent: number;
} {
    const { width, height } = useWindowDimensions();

    const isSmallWidthScreen = width < Sizes.minDeviceHeight;
    const isSmallHeightScreen = height < Sizes.minDeviceHeight;

    const verticalIndent =
        width < Sizes.minDeviceHeight ? sizes.small : sizes.large;
    const horizontalIndent =
        height < Sizes.minDeviceHeight ? sizes.small : sizes.large;

    return {
        isSmallWidthScreen,
        isSmallHeightScreen,
        horizontalIndent,
        verticalIndent,
    };
}
