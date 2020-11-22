import { Options, Rank, SpotifyCardDesign, spotifyCardDesigner, Suit } from '@messman/carded';
import * as path from 'path';

export function getSpotifyOptions(): Options<SpotifyCardDesign> {
	return {
		isDevelopment: true,
		decks: [
			{
				outputAbsoluteDirectory: path.join(__dirname, '../out'),
				outputDeckPrefix: 'spotify_',
				cards: [
					{
						rank: Rank.ace,
						suit: Suit.spades,
						design: {
							artist: 'The Doobie Brothers',
							song: 'Listen To The Music',
							lyrics: [
								'What the people need is a way to make them smile',
								`It ain't so hard to do if you know how`,
							],
							spotifyUri: 'spotify:track:7Ar4G7Ci11gpt6sfH9Cgz5',
							geniusLink: 'https://genius.com/The-doobie-brothers-listen-to-the-music-lyrics',
							year: 1972
						}
					},
					{
						rank: Rank.joker,
						suit: Suit.none,
						design: {
							artist: 'Queen',
							song: '',
							lyrics: [''],
							spotifyUri: '',
							geniusLink: '',
							year: 1999
						}
					},
					{
						rank: Rank.ten,
						suit: Suit.hearts,
						design: {
							artist: 'Queen',
							song: '',
							lyrics: [''],
							spotifyUri: '',
							geniusLink: '',
							year: 1999
						}
					},
					{
						rank: Rank.queen,
						suit: Suit.spades,
						design: {
							artist: 'Queen',
							song: '',
							lyrics: [''],
							spotifyUri: '',
							geniusLink: '',
							year: 1999
						}
					},
					{
						rank: Rank.four,
						suit: Suit.diamonds,
						design: {
							artist: 'Queen',
							song: '',
							lyrics: [''],
							spotifyUri: '',
							geniusLink: '',
							year: 1999
						}
					},
				]
			}
		],
		designer: spotifyCardDesigner
	};
}

// function createCard(rank: Rank, suit: Suit, artist: string, year: number, design: { song: string, uri: string, genius: string, lyrics: string[]; }): Card<SpotifyCardDesign> {
// 	return {
// 		rank: rank,
// 		suit: suit,
// 		design: {
// 			artist: artist,
// 			year: year,
// 			song: design.song,
// 			spotifyUri: design.uri,
// 			geniusLink: design.genius,
// 			lyrics: design.lyrics,
// 		}
// 	};
// }