import { ReactElement } from 'react';
import { useDevice } from '@/hooks/useDevice';

export interface DeviceProps {
	desktop?: boolean;
	mobile?: boolean;
	children: ReactElement;
}

export const Device = ({ desktop, mobile, children }: DeviceProps): ReactElement | null => {
	const { isMobile } = useDevice();

	return (isMobile && mobile) || (!isMobile && desktop) ? children : null;
};
