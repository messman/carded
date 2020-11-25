import { Card, Options, process, Rank, SpotifyCardDesign, spotifyCardDesigner, Suit } from '@messman/carded';
import * as path from 'path';
import { processDeckOutput } from './log-output';

export async function processSpotify(): Promise<void> {
	const options: Options<SpotifyCardDesign> = {
		isDevelopment: true,
		decks: [
			{
				/*
					Ace: The Doobie Brothers
					Two: Bruce Springsteen
					Three: Fleetwood Mac
					Four: Steve Miller Band
					Five: Eagles
					Six: Tom Petty and the Heartbreakers
					Seven: Boston
					Eight: The Rolling Stones
					Nine: Billy Joel
					Ten: The Who
					Jack: Led Zeppelin
					Queen: Queen
					King: The Moody Blues
					Joker: George Thorogood & The Destroyers
				*/

				outputAbsoluteDirectory: path.join(__dirname, '../out'),
				outputDeckPrefix: 'spotify_',
				cards: [
					...createForArtist(Rank.ace, ['The Doobie Brothers'], true, [
						{
							song: 'Listen To The Music',
							lyrics: [
								'What the people',
								'need,',
								'is a way to',
								'make them smile',
							],
							spotifyUri: 'spotify:track:7Ar4G7Ci11gpt6sfH9Cgz5',
							geniusLink: 'https://genius.com/The-doobie-brothers-listen-to-the-music-lyrics',
							year: 1972,
							skip: false
						},
						{
							song: `Long Train Runnin'`,
							lyrics: [
								'Without love,',
								'Where would you be',
								'right now?',
								'Without love'
							],
							spotifyUri: 'spotify:track:4nXkbcTj3nyww1cHkw5RAP',
							geniusLink: 'https://genius.com/The-doobie-brothers-long-train-runnin-lyrics',
							year: 1973,
							skip: false
						},
						{
							song: 'Black Water',
							lyrics: [
								`And I ain't`,
								'got no worries',
								`'Cause I ain't in`,
								'no hurry at all'
							],
							spotifyUri: 'spotify:track:4p8QcNkaq2FQj8uGJ7HEDK',
							geniusLink: 'https://genius.com/The-doobie-brothers-black-water-lyrics',
							year: 1974,
							skip: false
						},
						{
							song: 'China Grove',
							lyrics: [
								'When the sun comes',
								'up on a sleepy',
								'little town',
								'Down around',
								'San Antone'
							],
							spotifyUri: 'spotify:track:7cy1bEJV6FCtDaYpsk8aG6',
							geniusLink: 'https://genius.com/The-doobie-brothers-china-grove-lyrics',
							year: 1973,
							skip: false
						},
					]),
					...createForArtist(Rank.two, ['Bruce Springsteen'], false, [
						{
							song: 'Born To Run',
							lyrics: [
								'Oh baby, this town',
								'rips the bones from',
								'your back',
								`It's a death trap,`,
								`It's a suicide rap`,
							],
							spotifyUri: 'spotify:track:6hTcuIQa0sxrrByu9wTD7s',
							geniusLink: 'https://genius.com/Bruce-springsteen-born-to-run-lyrics',
							year: 1975,
							skip: false
						},
						{
							song: 'Born in the U.S.A.',
							lyrics: [
								'You end up like',
								`a dog that's been`,
								'beat too much',
								`'Til you spend half`,
								`your life just`,
								`coverin' up`
							],
							spotifyUri: 'spotify:track:0dOg1ySSI7NkpAe89Zo0b9',
							geniusLink: 'https://genius.com/Bruce-springsteen-born-in-the-usa-lyrics',
							year: 1984,
							skip: false
						},
						{
							song: 'Glory Days',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:2Y90nL1ohB4sgYELDs7uNx',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Hungry Heart',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:1KsI8NEeAna8ZIdojI3FiT',
							geniusLink: '',
							year: 9999,
							skip: true
						},
					]),
					...createForArtist(Rank.three, ['Fleetwood Mac'], true, [
						{
							song: 'Go Your Own Way',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:4xh7W7tlNMIczFhupCPniY',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Dreams',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:0ofHAoxe9vBkTCp2UQIavz',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'The Chain',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:5e9TFTbltYBg2xThimr0rU',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Everywhere',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:254bXAqt3zP6P50BdQvEsq',
							geniusLink: '',
							year: 9999,
							skip: true
						},
					]),
					...createForArtist(Rank.four, ['Steve Miller Band'], false, [
						{
							song: 'The Joker',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:1bp2IO61zbQrbWNmKKxg3f',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Jet Airliner',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:2zI3bUYn2pcF27of6i2oqK',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Take The Money And Run',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:1ZhrREyOOeFV6TxDOyiPwu',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Fly Like An Eagle',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:3e0FzZjTXOUtiJGSClOBrI',
							geniusLink: '',
							year: 9999,
							skip: true
						},
					]),
					...createForArtist(Rank.five, ['Eagles'], true, [
						{
							song: 'Hotel California',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:40riOy7x9W7GXjyGp4pjAv',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Life In The Fast Lane',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:6gXrEUzibufX9xYPk3HD5p',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Take It Easy',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:4yugZvBYaoREkJKtbG08Qr',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Desperado',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:2TjnCxxQRYn56Ye8gkUKiW',
							geniusLink: '',
							year: 9999,
							skip: true
						},
					]),
					{
						rank: Rank.six,
						suit: Suit.spades,
						skip: true,
						design: {
							artistLines: ['Tom Petty'],
							includeYearOnNewLine: false,
							song: `Runnin' Down A Dream`,
							lyrics: [''],
							spotifyUri: 'spotify:track:5yAu4njFSdM47dfsTkQPZ2',
							geniusLink: '',
							year: 9999,
						}
					},
					{
						rank: Rank.six,
						suit: Suit.clubs,
						skip: true,
						design: {
							artistLines: ['Tom Petty'],
							includeYearOnNewLine: false,
							song: `Free Fallin'`,
							lyrics: [''],
							spotifyUri: 'spotify:track:5tVA6TkbaAH9QMITTQRrNv',
							geniusLink: '',
							year: 9999,
						}
					},
					{
						rank: Rank.six,
						suit: Suit.hearts,
						skip: true,
						design: {
							artistLines: ['Tom Petty and the Heartbreakers'],
							includeYearOnNewLine: false,
							song: `Mary Jane's Last Dance`,
							lyrics: [''],
							spotifyUri: 'spotify:track:3dmqIB2Qxe2XZobw9gXxJ6',
							geniusLink: '',
							year: 9999
						}
					},
					{
						rank: Rank.six,
						suit: Suit.diamonds,
						skip: true,
						design: {
							artistLines: ['Tom Petty and the Heartbreakers'],
							includeYearOnNewLine: false,
							song: 'American Girl',
							lyrics: [''],
							spotifyUri: 'spotify:track:7MRyJPksH3G2cXHN8UKYzP',
							geniusLink: '',
							year: 9999,
						}
					},
					...createForArtist(Rank.seven, ['Boston'], false, [
						{
							song: `Rock n' Roll Band`,
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:5E89Izp4YhPyNShoxiOJ1u',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Peace Of Mind',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:1GqlvSEtMx5xbGptxOTTyk',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Foreplay / Long Time',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:39C5FuZ8C8M0QI8CrMsPkR',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: `Smokin'`,
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:5u5qlnyVaewWugJIjzilIc',
							geniusLink: '',
							year: 9999,
							skip: true
						},
					]),
					...createForArtist(Rank.eight, ['The Rolling Stones'], false, [
						{
							song: 'Gimme Shelter',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:6H3kDe7CGoWYBabAeVWGiD',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: `(I Can't Get No) Satisfaction`,
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:2PzU4IB8Dr6mxV3lHuaG34',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Miss You',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:3hJLKtTpgct9Y9wKww0BiR',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Paint It, Black',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:63T7DJ1AFDD6Bn8VzG6JE8',
							geniusLink: '',
							year: 9999,
							skip: true
						},
					]),
					...createForArtist(Rank.nine, ['Billy Joel'], false, [
						{
							song: `Movin' Out (Anthony's Song)`,
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:0J0eyUFhkW1bIu0TWPcJhV',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: `The Downeaster 'Alexa'`,
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:39cFQHfY6tsdMRmSbFse3X',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'You May Be Right',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:7gMOe0gXYcELUoVugfMmHP',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'The Ballad Of Billy The Kid',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:31RKj9kULWI2lM4tYSvAmb',
							geniusLink: '',
							year: 9999,
							skip: true
						},
					]),
					...createForArtist(Rank.ten, ['The Who'], false, [
						{
							song: 'Pinball Wizard',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:6LbbHFEajG9e4m0G3L47c4',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: `Baba O'Riley`,
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:3qiyyUfYe7CRYLucrPmulD',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Behind Blue Eyes',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:0cKk8BKEi7zXbdrYdyqBP5',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Who Are You',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:23IJ5wLRhEZ9DOuia5mPiZ',
							geniusLink: '',
							year: 9999,
							skip: true
						}
					]),
					...createForArtist(Rank.jack, ['Led Zeppelin'], false, [
						{
							song: 'Immigrant Song',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:78lgmZwycJ3nzsdgmPPGNx',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Dazed and Confused',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:1RIsAtnYOlo8zGMycNFioq',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Over the Hills and Far Away',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:35XlkvHy9WHPI4Tf9eax4t',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Rock and Roll',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:7HQrFPtLEpgTJaEVujH8OO',
							geniusLink: '',
							year: 9999,
							skip: true
						}
					]),
					...createForArtist(Rank.queen, ['Queen'], false, [
						{
							song: 'Somebody To Love',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:6cFZ4PLC19taNlpl9pbGMf',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Bohemian Rhapsody',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:7tFiyTwD0nx5a1eklYtX2J',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Another One Bites The Dust',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:57JVGBtBLCfHw2muk5416J',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'We Are The Champions',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:7ccI9cStQbQdystvc6TvxD',
							geniusLink: '',
							year: 9999,
							skip: true
						}
					]),
					...createForArtist(Rank.king, ['The Moody Blues'], false, [
						{
							song: 'Nights In White Satin',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:6L5BZEcZmD6RBJnimzlyKr',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: `I'm Just A Singer (In A Rock And Roll Band)`,
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:7sXbG2xdtX18rHoXcGosFI',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Your Wildest Dreams',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:1T4iwEA2ySieXjWxjiMVWs',
							geniusLink: '',
							year: 9999,
							skip: true
						},
						{
							song: 'Melancholy Man',
							lyrics: [
								''
							],
							spotifyUri: 'spotify:track:1NeQzAqahRYI09bgLbhVFN',
							geniusLink: '',
							year: 9999,
							skip: true
						}
					]),
					{
						rank: Rank.joker,
						suit: Suit.none,
						skip: true,
						design: {
							artistLines: ['George Thorogood & The Destroyers'],
							includeYearOnNewLine: false,
							song: 'Bad To The Bone',
							lyrics: [''],
							spotifyUri: 'spotify:track:6s0NHplywwr1IjnQpUpWJk',
							geniusLink: '',
							year: 9999,
						}
					},
					{
						rank: Rank.joker,
						suit: Suit.none,
						skip: true,
						design: {
							artistLines: ['George Thorogood & The Destroyers'],
							includeYearOnNewLine: false,
							song: 'One Bourbon, One Scotch, One Beer',
							lyrics: [''],
							spotifyUri: 'spotify:track:0s995gCthqnYJCWGvfKpNt',
							geniusLink: '',
							year: 9999,
						}
					}
				]
			}
		],
		designer: spotifyCardDesigner
	};

	const output = await process(options);
	output.decks.forEach((deck, index) => {
		processDeckOutput(index, deck);
	});
}

interface DesignWithoutArtist extends Omit<SpotifyCardDesign, 'artistLines' | 'includeYearOnNewLine'> {
	skip?: boolean;
}

function createForArtist(rank: Rank, artistLines: string[], includeYearOnNewLine: boolean, designs: DesignWithoutArtist[]): Card<SpotifyCardDesign>[] {
	return designs.map((design, index) => {
		return {
			rank: rank,
			suit: (index + 1) as Suit, // 0 is none,
			skip: design.skip,
			design: {
				artistLines: artistLines,
				includeYearOnNewLine: includeYearOnNewLine,
				...design,
			}
		};
	});
}