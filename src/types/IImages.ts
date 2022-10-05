import { IData } from './IData';

export interface IImage {
	width: number;
	height: number;
	movieId: number;
	previewUrl: string;
	type: string;
	url: string;
}

export interface IImages extends IData {
	docs: IImage[];
}
