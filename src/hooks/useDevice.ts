import { isDesktop, isMobile } from 'react-device-detect';

interface DeviceDetection {
	isMobile: boolean;
	isDesktop: boolean;
}

export const useDevice = (): DeviceDetection => ({
	isMobile,
	isDesktop,
});
