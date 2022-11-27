
export enum LyricFontSizeFactor {
	a_normal,
	b_smaller,
	c_larger
}

export interface Mom2023CardDesign {
	lyrics: string[];
	lyricsSizeFactor?: LyricFontSizeFactor;
	artist: string[];
	song: string;
	spotifyLink: string;
}

export interface Mom2023CardDesignerInput {

}