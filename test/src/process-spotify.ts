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
						suit: Suit.clubs,
						design: {
							artist: 'Queen',
							lyrics: ['v'],
							spotifyUri: '',
							geniusLink: '',
							year: 1999
						}
					},
					{
						rank: Rank.joker,
						suit: Suit.none,
						design: {
							artist: 'Queen',
							lyrics: ['v'],
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
							lyrics: ['v'],
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
							lyrics: ['v'],
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
							lyrics: ['v'],
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