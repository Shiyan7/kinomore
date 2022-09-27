import dynamic from 'next/dynamic';
import type { DeviceProps } from './Device';

export const Device = dynamic<DeviceProps>(() => import('./Device').then((mod) => mod.Device), {
	ssr: false,
});
