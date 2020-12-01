import { Card, Options, process, Rank, SpotifyCardDesign, spotifyCardDesigner, Suit } from '@messman/carded';
import * as path from 'path';
import { processDeckOutput } from './log-output';

export enum FontSize {
	smaller = .9,
	larger = 1.1
}

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
								`And if I'm feeling`,
								`good to you,`,
								`And you're feeling`,
								`good to me,`,
								`There ain't nothing`,
								`we can't do or say`,
								// `Feeling good,`,
								// `Feeling fine,`,
								// `Oh, baby, let the`,
								// `music play`
							],
							//lyricsSizeFactor: FontSize.smaller,
							spotifyUri: 'spotify:track:7Ar4G7Ci11gpt6sfH9Cgz5',
							geniusLink: 'https://genius.com/The-doobie-brothers-listen-to-the-music-lyrics',
							year: 1972,
							skip: false
						},
						{
							song: `Long Train Runnin'`,
							lyrics: [
								`Well pistons`,
								`keep on churnin',`,
								`And the wheels go`,
								`'round and 'round,`,
								`And the steel rails`,
								`lie cold and hard,`,
								`On the mountains`,
								`they go down`
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
								`got no worries,`,
								`'Cause I ain't`,
								`in no hurry`,
								`at all`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:4p8QcNkaq2FQj8uGJ7HEDK',
							geniusLink: 'https://genius.com/The-doobie-brothers-black-water-lyrics',
							year: 1974,
							skip: false
						},
						{
							song: 'China Grove',
							lyrics: [
								`When the sun`,
								`comes up`,
								`On a sleepy`,
								`little town,`,
								`Down around`,
								`San Antone`
							],
							lyricsSizeFactor: FontSize.larger,
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
								`Oh baby, this town`,
								`rips the bones from`,
								`your back,`,
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
								`You end up like`,
								`a dog that's been`,
								`beat too much`,
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
								`And I hope`,
								`When I get old`,
								`I don't sit around`,
								`thinking about it -`,
								`But I probably will`
							],
							spotifyUri: 'spotify:track:2Y90nL1ohB4sgYELDs7uNx',
							geniusLink: 'https://genius.com/Bruce-springsteen-glory-days-lyrics',
							year: 1985,
							skip: false
						},
						{
							song: 'Hungry Heart',
							lyrics: [
								`Everybody needs`,
								`a place to rest,`,
								`Everybody wants`,
								`to have a home,`,
								`Don't make no`,
								`difference what`,
								`nobody says,`,
								`Ain't nobody like`,
								`to be alone`
							],
							spotifyUri: 'spotify:track:1KsI8NEeAna8ZIdojI3FiT',
							geniusLink: 'https://genius.com/Bruce-springsteen-hungry-heart-lyrics',
							year: 1980,
							skip: false
						},
					]),
					...createForArtist(Rank.three, ['Fleetwood Mac'], true, [
						{
							song: 'Go Your Own Way',
							lyrics: [
								`If I could,`,
								`Baby I'd give`,
								`you my world,`,
								`Open up -`,
								`everything's`,
								`waiting for you`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:4xh7W7tlNMIczFhupCPniY',
							geniusLink: 'https://genius.com/Fleetwood-mac-go-your-own-way-lyrics',
							year: 1977,
							skip: false
						},
						{
							song: 'Dreams',
							lyrics: [
								`Thunder only`,
								`happens when`,
								`it's raining,`,
								`Players only`,
								`love you when`,
								`they're playing`,
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:0ofHAoxe9vBkTCp2UQIavz',
							geniusLink: 'https://genius.com/Fleetwood-mac-dreams-lyrics',
							year: 1977,
							skip: false
						},
						{
							song: 'The Chain',
							lyrics: [
								`Listen to the`,
								`wind blow,`,
								`Down comes`,
								`the night,`,
								`Run in the`,
								`shadows,`,
								`Damn your love,`,
								`Damn your lies`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:5e9TFTbltYBg2xThimr0rU',
							geniusLink: 'https://genius.com/Fleetwood-mac-the-chain-lyrics',
							year: 1977,
							skip: false
						},
						{
							song: 'Gypsy',
							lyrics: [
								`And it all comes`,
								`down to you,`,
								`Well you know`,
								`that it does,`,
								`And lightning`,
								`strikes,`,
								`maybe once,`,
								`maybe twice`
							],
							spotifyUri: 'spotify:track:19Ym5Sg0YyOCa6ao21bdoG',
							geniusLink: 'https://genius.com/Fleetwood-mac-gypsy-lyrics',
							year: 1982,
							skip: false
						},
					]),
					...createForArtist(Rank.four, ['Steve Miller Band'], false, [
						{
							song: 'The Joker',
							lyrics: [
								`'Cause`,
								`I'm a picker,`,
								`I'm a grinner,`,
								`I'm a lover,`,
								`and I'm a sinner,`,
								`I play my music`,
								`in the sun`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:1bp2IO61zbQrbWNmKKxg3f',
							geniusLink: 'https://genius.com/Steve-miller-band-the-joker-lyrics',
							year: 1973,
							skip: false
						},
						{
							song: 'Jet Airliner',
							lyrics: [
								`You know you got`,
								`to go through hell`,
								`before you`,
								`get to heaven`
							],
							spotifyUri: 'spotify:track:2zI3bUYn2pcF27of6i2oqK',
							geniusLink: 'https://genius.com/Steve-miller-band-jet-airliner-lyrics',
							year: 1977,
							skip: false
						},
						{
							song: 'Take The Money And Run',
							lyrics: [
								`Billy Joe`,
								`shot a man while`,
								`robbing his castle,`,
								`Bobbie Sue`,
								`took the money`,
								`and run`
							],
							spotifyUri: 'spotify:track:1ZhrREyOOeFV6TxDOyiPwu',
							geniusLink: 'https://genius.com/Steve-miller-band-take-the-money-and-run-lyrics',
							year: 1976,
							skip: false
						},
						{
							song: 'Fly Like An Eagle',
							lyrics: [
								`Time keeps on`,
								`slippin', slippin',`,
								`slippin',`,
								`Into the future`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:3e0FzZjTXOUtiJGSClOBrI',
							geniusLink: 'https://genius.com/Steve-miller-band-fly-like-an-eagle-lyrics',
							year: 1976,
							skip: false
						},
					]),
					...createForArtist(Rank.five, ['Eagles'], true, [
						{
							song: 'Hotel California',
							lyrics: [
								`And still those`,
								`voices are calling`,
								`from far away,`,
								`Wake you up`,
								`in the middle`,
								`of the night`,
								`Just to hear`,
								`them say`
							],
							spotifyUri: 'spotify:track:40riOy7x9W7GXjyGp4pjAv',
							geniusLink: 'https://genius.com/Eagles-hotel-california-lyrics',
							year: 1976,
							skip: false
						},
						{
							song: 'Life In The Fast Lane',
							lyrics: [
								`They knew all`,
								`the right people,`,
								`They took all`,
								`the right pills,`,
								`They threw`,
								`outrageous parties,`,
								`They paid`,
								`heavenly bills`
							],
							spotifyUri: 'spotify:track:6gXrEUzibufX9xYPk3HD5p',
							geniusLink: 'https://genius.com/Eagles-life-in-the-fast-lane-lyrics',
							year: 1976,
							skip: false
						},
						{
							song: 'Take It Easy',
							lyrics: [
								`Come on, baby,`,
								`Don't say maybe,`,
								`I gotta know if`,
								`your sweet love`,
								`is gonna save me`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:4yugZvBYaoREkJKtbG08Qr',
							geniusLink: 'https://genius.com/Eagles-take-it-easy-lyrics',
							year: 1972,
							skip: false
						},
						{
							song: 'Desperado',
							lyrics: [
								`Now it seems to me`,
								`some fine things`,
								`Have been laid`,
								`upon your table,`,
								`But you only`,
								`want the ones`,
								`that you can't get`
							],
							lyricsSizeFactor: FontSize.smaller,
							spotifyUri: 'spotify:track:2TjnCxxQRYn56Ye8gkUKiW',
							geniusLink: 'https://genius.com/Eagles-desperado-lyrics',
							year: 1973,
							skip: false
						},
					]),
					{
						rank: Rank.six,
						suit: Suit.spades,
						skip: false,
						design: {
							artistLines: ['Tom Petty'],
							includeYearOnNewLine: false,
							song: `Runnin' Down A Dream`,
							lyrics: [
								`There's something`,
								`good waitin'`,
								`down this road,`,
								`I'm pickin' up`,
								`whatever's mine`
							],
							spotifyUri: 'spotify:track:5yAu4njFSdM47dfsTkQPZ2',
							geniusLink: 'https://genius.com/Tom-petty-runnin-down-a-dream-lyrics',
							year: 1989,
						}
					},
					{
						rank: Rank.six,
						suit: Suit.clubs,
						skip: false,
						design: {
							artistLines: ['Tom Petty'],
							includeYearOnNewLine: false,
							song: `Free Fallin'`,
							lyrics: [
								`And I'm a bad boy`,
								`'Cause I don't`,
								`even miss her,`,
								`I'm a bad boy`,
								`for breakin'`,
								`her heart`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:5tVA6TkbaAH9QMITTQRrNv',
							geniusLink: 'https://genius.com/Tom-petty-free-fallin-lyrics',
							year: 1989,
						}
					},
					{
						rank: Rank.six,
						suit: Suit.hearts,
						skip: false,
						design: {
							artistLines: ['Tom Petty', 'and the Heartbreakers'],
							includeYearOnNewLine: false,
							song: `Mary Jane's Last Dance`,
							lyrics: [
								`Well I don't know`,
								`but I've been told,`,
								`You never slow down,`,
								`you never grow old,`,
								`I'm tired of screwin' up,`,
								`tired of going down,`,
								`tired of myself,`,
								`tired of this town`,
							],
							lyricsSizeFactor: FontSize.smaller,
							spotifyUri: 'spotify:track:3dmqIB2Qxe2XZobw9gXxJ6',
							geniusLink: 'https://genius.com/Tom-petty-and-the-heartbreakers-mary-janes-last-dance-lyrics',
							year: 1993
						}
					},
					{
						rank: Rank.six,
						suit: Suit.diamonds,
						skip: false,
						design: {
							artistLines: ['Tom Petty', 'and the Heartbreakers'],
							includeYearOnNewLine: false,
							song: 'American Girl',
							lyrics: [
								`Yeah and if`,
								`she had to die`,
								`tryin' she`,
								`had one`,
								`little promise`,
								`she was`,
								`gonna keep`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:7MRyJPksH3G2cXHN8UKYzP',
							geniusLink: 'https://genius.com/Tom-petty-and-the-heartbreakers-american-girl-lyrics',
							year: 1976,
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