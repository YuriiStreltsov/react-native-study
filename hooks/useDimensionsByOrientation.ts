import { useWindowDimensions } from 'react-native';
import Sizes from '../constants/sizes';

type Sizes = {
    small: number;
    large: number;
};

export default function useDimensionsByOrientation(
    orientation: 'width' | 'height',
    sizes: Sizes
) {
    const { width, height } = useWindowDimensions();

    if (orientation === 'width') {
        return width < Sizes.minDeviceHeight ? sizes.small : sizes.large;
    }

    return height < Sizes.minDeviceHeight ? sizes.small : sizes.large;
}
