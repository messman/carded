
export enum LyricFontSizeFactor {
	smaller = .9,
	larger = 1.1
}

export interface Dad2020CardDesign {
	lyrics: string[];
	lyricsSizeFactor?: LyricFontSizeFactor;
	artistLines: string[];
	year: number;
	song: string;
	spotifyUri: string;
	geniusLink: string;
	debug?: string;
}

export interface Dad2020CardDesignerInput {

}