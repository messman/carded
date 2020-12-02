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
					Ace: Aerosmith
					Two: Bruce Springsteen
					Three: Fleetwood Mac
					Four: The Doobie Brothers
					Five: Eagles
					Six: Tom Petty and the Heartbreakers
					Seven: George Thorogood & The Destroyers
					Eight: The Rolling Stones
					Nine: Billy Joel
					Ten: The Who
					Jack: Led Zeppelin
					Queen: Queen
					King: The Moody Blues
					Joker: Boston
				*/

				outputAbsoluteDirectory: path.join(__dirname, '../out'),
				outputDeckPrefix: 'spotify_',
				cards: [
					...createForArtist(Rank.ace, ['Aerosmith'], [
						{
							song: 'Sweet Emotion',
							lyrics: [
								`You're calling`,
								`my name`,
								`but I gotta`,
								`make clear,`,
								`I can't say baby`,
								`Where I'll be`,
								`In a year`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:24NwBd5vZ2CK8VOQVnqdxr',
							geniusLink: 'https://genius.com/Aerosmith-sweet-emotion-lyrics',
							year: 1975,
							skip: true
						},
						{
							song: `Cryin'`,
							lyrics: [
								`Now the word`,
								`out on the street`,
								`is the devil's`,
								`in your kiss,`,
								`If our love goes`,
								`up in flames`,
								`It's a fire`,
								`i can't resist`
							],
							spotifyUri: 'spotify:track:0NJC0FDCODpPUntRTTQq97',
							geniusLink: 'https://genius.com/Aerosmith-cryin-lyrics',
							year: 1993,
							skip: true
						},
						{
							song: 'Dream On',
							lyrics: [
								`Half my life's`,
								`in books'`,
								`written pages,`,
								`Lived and learned`,
								`from fools and`,
								`from sages`
							],
							spotifyUri: 'spotify:track:5MxNLUsfh7uzROypsoO5qe',
							geniusLink: 'https://genius.com/Aerosmith-dream-on-lyrics',
							year: 1973,
							skip: true
						},
						{
							song: 'Walk This Way',
							lyrics: [
								`Then my next`,
								`door neighbor`,
								`with a daughter`,
								`had a favor,`,
								`So I gave her`,
								`just a little`,
								`kiss, like this`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:5SZ6zX4rOrEQferfFC2MfP',
							geniusLink: 'https://genius.com/Aerosmith-walk-this-way-lyrics',
							year: 1975,
							skip: true
						},
					]),
					...createForArtist(Rank.two, ['Bruce Springsteen'], [
						{
							song: 'Born To Run',
							lyrics: [
								`Oh baby, this town`,
								`rips the bones from`,
								`your back,`,
								`It's a death trap,`,
								`It's a suicide rap,`,
								`We gotta get out`,
								`while we're young`
							],
							spotifyUri: 'spotify:track:6hTcuIQa0sxrrByu9wTD7s',
							geniusLink: 'https://genius.com/Bruce-springsteen-born-to-run-lyrics',
							year: 1975,
							skip: true
						},
						{
							song: 'Born in the U.S.A.',
							lyrics: [
								`You end up like`,
								`a dog that's been`,
								`beat too much,`,
								`'Til you spend half`,
								`your life just`,
								`coverin' up`
							],
							spotifyUri: 'spotify:track:0dOg1ySSI7NkpAe89Zo0b9',
							geniusLink: 'https://genius.com/Bruce-springsteen-born-in-the-usa-lyrics',
							year: 1984,
							skip: true
						},
						{
							song: 'Glory Days',
							lyrics: [
								`And I hope`,
								`when I get old`,
								`I don't sit`,
								`around thinking`,
								`about it, But I`,
								`probably will`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:2Y90nL1ohB4sgYELDs7uNx',
							geniusLink: 'https://genius.com/Bruce-springsteen-glory-days-lyrics',
							year: 1985,
							skip: true
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
							lyricsSizeFactor: FontSize.smaller,
							spotifyUri: 'spotify:track:1KsI8NEeAna8ZIdojI3FiT',
							geniusLink: 'https://genius.com/Bruce-springsteen-hungry-heart-lyrics',
							year: 1980,
							skip: true
						},
					]),
					...createForArtist(Rank.three, ['Fleetwood Mac'], [
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
							skip: true
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
							skip: true
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
							spotifyUri: 'spotify:track:5e9TFTbltYBg2xThimr0rU',
							geniusLink: 'https://genius.com/Fleetwood-mac-the-chain-lyrics',
							year: 1977,
							skip: true
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
							skip: true
						},
					]),
					...createForArtist(Rank.four, ['The Doobie Brothers'], [
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
							skip: true
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
							skip: true
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
							skip: true
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
							skip: true
						},
					]),
					...createForArtist(Rank.five, ['Eagles'], [
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
							skip: true
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
							skip: true
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
							skip: true
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
							spotifyUri: 'spotify:track:2TjnCxxQRYn56Ye8gkUKiW',
							geniusLink: 'https://genius.com/Eagles-desperado-lyrics',
							year: 1973,
							skip: true
						},
					]),
					{
						rank: Rank.six,
						suit: Suit.spades,
						skip: true,
						design: {
							artistLines: ['Tom Petty'],
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
						skip: true,
						design: {
							artistLines: ['Tom Petty'],
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
						skip: true,
						design: {
							artistLines: ['Tom Petty', 'and the Heartbreakers'],
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
						skip: true,
						design: {
							artistLines: ['Tom Petty', 'and the Heartbreakers'],
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
					...createForArtist(Rank.seven, ['George Thorogood', 'and the Destroyers'], [
						{
							song: 'Bad To The Bone',
							lyrics: [
								`I broke a`,
								`thousand hearts`,
								`before I met you,`,
								`I'll break a`,
								`thousand more,`,
								`baby, before`,
								`I am through`
							],
							spotifyUri: 'spotify:track:6s0NHplywwr1IjnQpUpWJk',
							geniusLink: 'https://genius.com/George-thorogood-and-the-destroyers-bad-to-the-bone-lyrics',
							year: 1982,
							skip: true
						},
						{
							song: 'Who Do You Love?',
							lyrics: [
								`I walked`,
								`forty-seven`,
								`miles of`,
								`barbed wire,`,
								`I got a`,
								`cobra snake`,
								`for a necktie`,
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:6EMImSrB2kkbz0ZHtMa7zj',
							geniusLink: 'https://genius.com/George-thorogood-and-the-destroyers-who-do-you-love-lyrics',
							year: 1978,
							skip: true,
						},
						{
							song: 'Move It On Over',
							lyrics: [
								`Yeah, listen`,
								`to me dog`,
								`before you`,
								`start to whine,`,
								`That side's yours`,
								`and this`,
								`side's mine`
							],
							spotifyUri: 'spotify:track:2bgsFbiStgVqxOtQ4UK3Uf',
							geniusLink: 'https://genius.com/George-thorogood-and-the-destroyers-move-it-on-over-lyrics',
							year: 1978,
							skip: true,
						},
						{
							song: 'One Bourbon, One Scotch, One Beer',
							lyrics: [
								`I go to the bar,`,
								`I ring my coat,`,
								`I call the bartender,`,
								`Said, "Look man,`,
								`come down here,"`,
								`he got down there,`,
								`"So what you want?"`
							],
							lyricsSizeFactor: FontSize.smaller,
							spotifyUri: 'spotify:track:0s995gCthqnYJCWGvfKpNt',
							geniusLink: 'https://genius.com/George-thorogood-and-the-destroyers-one-bourbon-one-scotch-one-beer-lyrics',
							year: 1972,
							skip: true
						}
					]),
					...createForArtist(Rank.eight, ['The Rolling Stones'], [
						{
							song: 'Gimme Shelter',
							lyrics: [
								`Oh, a storm is`,
								`threatening,`,
								`My very life today,`,
								`If I don't get`,
								`some shelter,`,
								`Oh yeah, I'm gonna`,
								`fade away`
							],
							spotifyUri: 'spotify:track:6H3kDe7CGoWYBabAeVWGiD',
							geniusLink: 'https://genius.com/The-rolling-stones-gimme-shelter-lyrics',
							year: 1969,
							skip: true
						},
						{
							song: `(I Can't Get No) Satisfaction`,
							lyrics: [
								`When I'm`,
								`watching my TV,`,
								`And a man comes`,
								`on and tells me`,
								`how white my`,
								`shirts can be`,
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:2PzU4IB8Dr6mxV3lHuaG34',
							geniusLink: 'https://genius.com/The-rolling-stones-i-cant-get-no-satisfaction-lyrics',
							year: 1965,
							skip: true
						},
						{
							song: 'Miss You',
							lyrics: [
								`"Hey, what's the`,
								`matter, man?`,
								`We're gon' come`,
								`around at twelve`,
								`with some`,
								`Puerto Rican girls`,
								`that's just dyin'`,
								`to meet you!"`
							],
							spotifyUri: 'spotify:track:3hJLKtTpgct9Y9wKww0BiR',
							geniusLink: 'https://genius.com/The-rolling-stones-miss-you-lyrics',
							year: 1978,
							skip: true
						},
						{
							song: 'Paint It, Black',
							lyrics: [
								`If I look hard`,
								`enough into the`,
								`setting sun,`,
								`My love will`,
								`laugh with me`,
								`before the`,
								`morning comes`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:63T7DJ1AFDD6Bn8VzG6JE8',
							geniusLink: 'https://genius.com/The-rolling-stones-paint-it-black-lyrics',
							year: 1966,
							skip: true
						},
					]),
					...createForArtist(Rank.nine, ['Billy Joel'], [
						{
							song: `Movin' Out (Anthony's Song)`,
							lyrics: [
								`Who needs a house`,
								`out in Hackensack,`,
								`Is that all you get`,
								`for your money?`
							],
							spotifyUri: 'spotify:track:0J0eyUFhkW1bIu0TWPcJhV',
							geniusLink: 'https://genius.com/Billy-joel-movin-out-anthonys-song-lyrics',
							year: 1977,
							skip: true
						},
						{
							song: `The Downeaster 'Alexa'`,
							lyrics: [
								`They say`,
								`these waters`,
								`aren't what`,
								`they used to be,`,
								`But I got people`,
								`back on land`,
								`who count on me`,
							],
							spotifyUri: 'spotify:track:39cFQHfY6tsdMRmSbFse3X',
							geniusLink: 'https://genius.com/Billy-joel-the-downeaster-alexa-lyrics',
							year: 1989,
							skip: true
						},
						{
							song: 'You May Be Right',
							lyrics: [
								`If I'm crazy`,
								`then it's true,`,
								`That it's all`,
								`because of you,`,
								`And you wouldn't`,
								`want me any`,
								`other way`
							],
							spotifyUri: 'spotify:track:7gMOe0gXYcELUoVugfMmHP',
							geniusLink: 'https://genius.com/Billy-joel-you-may-be-right-lyrics',
							year: 1980,
							skip: true
						},
						{
							song: 'The Ballad Of Billy The Kid',
							lyrics: [
								`Well he never`,
								`traveled heavy,`,
								`Yes, he always`,
								`rode alone,`,
								`And he soon put`,
								`many older guns`,
								`to shame`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:31RKj9kULWI2lM4tYSvAmb',
							geniusLink: 'https://genius.com/Billy-joel-the-ballad-of-billy-the-kid-lyrics',
							year: 1973,
							skip: true
						},
					]),
					...createForArtist(Rank.ten, ['The Who'], [
						{
							song: 'Pinball Wizard',
							lyrics: [
								`Ever since I was`,
								`a young boy`,
								`I've played the`,
								`silver ball,`,
								`From Soho down`,
								`to Brighton`,
								`I must've played`,
								`'em all`
							],
							spotifyUri: 'spotify:track:6LbbHFEajG9e4m0G3L47c4',
							geniusLink: 'https://genius.com/The-who-pinball-wizard-lyrics',
							year: 1969,
							skip: true
						},
						{
							song: `Baba O'Riley`,
							lyrics: [
								`I don't need`,
								`to fight`,
								`To prove`,
								`I'm right,`,
								`I don't need`,
								`to be forgiven`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:3qiyyUfYe7CRYLucrPmulD',
							geniusLink: 'https://genius.com/The-who-baba-oriley-lyrics',
							year: 1971,
							skip: true
						},
						{
							song: 'Behind Blue Eyes',
							lyrics: [
								`But my dreams`,
								`they aren't`,
								`as empty`,
								`as my conscience`,
								`seems to be`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:0cKk8BKEi7zXbdrYdyqBP5',
							geniusLink: 'https://genius.com/The-who-behind-blue-eyes-lyrics',
							year: 1971,
							skip: true
						},
						{
							song: 'Who Are You',
							lyrics: [
								`I stretched back`,
								`and I hiccupped`,
								`And looked back`,
								`on my busy day,`,
								`Eleven hours`,
								`in The Tin Pan`,
								`God, there's got`,
								`to be another way`
							],
							spotifyUri: 'spotify:track:23IJ5wLRhEZ9DOuia5mPiZ',
							geniusLink: 'https://genius.com/The-who-who-are-you-lyrics',
							year: 1978,
							skip: true
						}
					]),
					...createForArtist(Rank.jack, ['Led Zeppelin'], [
						{
							song: 'Immigrant Song',
							lyrics: [
								`We come from`,
								`the land of the`,
								`ice and snow,`,
								`From the`,
								`midnight sun`,
								`where the`,
								`hot springs flow`
							],
							spotifyUri: 'spotify:track:78lgmZwycJ3nzsdgmPPGNx',
							geniusLink: 'https://genius.com/Led-zeppelin-immigrant-song-lyrics',
							year: 1970,
							skip: true
						},
						{
							song: 'Dazed and Confused',
							lyrics: [
								`Every day`,
								`I work so hard`,
								`bringing home my`,
								`hard-earned pay,`,
								`Try to love you`,
								`baby but you`,
								`push me away`
							],
							spotifyUri: 'spotify:track:1RIsAtnYOlo8zGMycNFioq',
							geniusLink: 'https://genius.com/Led-zeppelin-dazed-and-confused-lyrics',
							year: 1969,
							skip: true
						},
						{
							song: 'Over the Hills and Far Away',
							lyrics: [
								`Many times`,
								`I've lied`,
								`and many times`,
								`I've listened,`,
								`Many times`,
								`I've wondered`,
								`How much there`,
								`is to know`
							],
							spotifyUri: 'spotify:track:35XlkvHy9WHPI4Tf9eax4t',
							geniusLink: 'https://genius.com/Led-zeppelin-over-the-hills-and-far-away-lyrics',
							year: 1973,
							skip: true
						},
						{
							song: 'Kashmir',
							lyrics: [
								`Oh let the sun beat`,
								`down upon my face`,
								`With stars to fill`,
								`my dreams,`,
								`I am a traveler of`,
								`both time and space`,
								`to be where`,
								`I have been`
							],
							lyricsSizeFactor: FontSize.smaller,
							spotifyUri: 'spotify:track:2nVHqZbOGkKWzlcy1aMbE7',
							geniusLink: 'https://genius.com/Led-zeppelin-kashmir-lyrics',
							year: 1975,
							skip: true
						}
					]),
					...createForArtist(Rank.queen, ['Queen'], [
						{
							song: 'Somebody To Love',
							lyrics: [
								`I just`,
								`gotta get`,
								`out of this`,
								`prison cell,`,
								`Someday`,
								`I'm gonna be`,
								`free, lord`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:6cFZ4PLC19taNlpl9pbGMf',
							geniusLink: 'https://genius.com/Queen-somebody-to-love-lyrics',
							year: 1976,
							skip: true
						},
						{
							song: 'Bohemian Rhapsody',
							lyrics: [
								`I see a little`,
								`silhouetto`,
								`of a man,`,
								`Scaramouche,`,
								`Scaramouche,`,
								`will you do`,
								`the Fandango?`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:7tFiyTwD0nx5a1eklYtX2J',
							geniusLink: 'https://genius.com/Queen-bohemian-rhapsody-lyrics',
							year: 1975,
							skip: true
						},
						{
							song: 'Another One Bites The Dust',
							lyrics: [
								`How do you think`,
								`I'm gonna get along`,
								`Without you`,
								`When you're gone?`,
								`You took me`,
								`for everything`,
								`that I had`,
								`and kicked me`,
								`out on my own`
							],
							lyricsSizeFactor: FontSize.smaller,
							spotifyUri: 'spotify:track:57JVGBtBLCfHw2muk5416J',
							geniusLink: 'https://genius.com/Queen-another-one-bites-the-dust-lyrics',
							year: 1980,
							skip: true
						},
						{
							song: 'We Are The Champions',
							lyrics: [
								`And bad mistakes`,
								`I've made a few,`,
								`I've had my`,
								`share of sand`,
								`kicked in my`,
								`face, and I've`,
								`come through`
							],
							spotifyUri: 'spotify:track:7ccI9cStQbQdystvc6TvxD',
							geniusLink: 'https://genius.com/Queen-we-are-the-champions-lyrics',
							year: 1977,
							skip: true
						}
					]),
					...createForArtist(Rank.king, ['The Moody Blues'], [
						{
							song: 'Nights In White Satin',
							lyrics: [
								`Some try`,
								`to tell me`,
								`Thoughts they`,
								`cannot defend,`,
								`Just what you`,
								`want to be`,
								`you will be`,
								`in the end`
							],
							spotifyUri: 'spotify:track:6L5BZEcZmD6RBJnimzlyKr',
							geniusLink: 'https://genius.com/The-moody-blues-nights-in-white-satin-lyrics',
							year: 1967,
							skip: false
						},
						{
							song: `I'm Just A Singer (In A Rock And Roll Band)`,
							lyrics: [
								`A thousand`,
								`miles can lead`,
								`so many ways,`,
								`Just to know`,
								`who is driving`,
								`What a help`,
								`it would be`
							],
							lyricsSizeFactor: FontSize.larger,
							spotifyUri: 'spotify:track:7sXbG2xdtX18rHoXcGosFI',
							geniusLink: 'https://genius.com/The-moody-blues-im-just-a-singer-in-a-rocknroll-band-lyrics',
							year: 1972,
							skip: false
						},
						{
							song: 'Your Wildest Dreams',
							lyrics: [
								`Once upon a time,`,
								`Once when you`,
								`were mine,`,
								`I remember skies`,
								`reflected in`,
								`your eyes`
							],
							spotifyUri: 'spotify:track:1T4iwEA2ySieXjWxjiMVWs',
							geniusLink: 'https://genius.com/The-moody-blues-your-wildest-dreams-lyrics',
							year: 1986,
							skip: false
						},
						{
							song: 'Melancholy Man',
							lyrics: [
								`His life caught`,
								`up in misery,`,
								`He doesn't think`,
								`like you and me,`,
								`'Cause he can't see`,
								`what you and I`,
								`can see`
							],
							spotifyUri: 'spotify:track:1NeQzAqahRYI09bgLbhVFN',
							geniusLink: 'https://genius.com/The-moody-blues-melancholy-man-lyrics',
							year: 1970,
							skip: false
						}
					]),
					{
						rank: Rank.joker1,
						suit: Suit.none,
						skip: false,
						design: {
							artistLines: ['Boston'],
							song: `Rock n' Roll Band`,
							lyrics: [
								`Playing for a week`,
								`in Rhode Island,`,
								`A man came to the`,
								`stage one night,`,
								`He smoked a big`,
								`cigar and drove`,
								`a cadillac car,`,
								`He said "Boys, I`,
								`think this band's`,
								`outta sight"`
							],
							lyricsSizeFactor: FontSize.smaller,
							spotifyUri: 'spotify:track:5E89Izp4YhPyNShoxiOJ1u',
							geniusLink: 'https://genius.com/Boston-rock-and-roll-band-lyrics',
							year: 1976
						}
					},
					{
						rank: Rank.joker2,
						suit: Suit.none,
						skip: false,
						design: {
							artistLines: ['Boston'],
							song: 'Foreplay / Long Time',
							lyrics: [
								`Well I'm`,
								`taking my time,`,
								`I'm just`,
								`moving along,`,
								`You'll forget`,
								`about me`,
								`after I've`,
								`been gone`
							],
							spotifyUri: 'spotify:track:39C5FuZ8C8M0QI8CrMsPkR',
							geniusLink: 'https://genius.com/Boston-foreplay-long-time-lyrics',
							year: 1976
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

interface DesignWithoutArtist extends Omit<SpotifyCardDesign, 'artistLines'> {
	skip?: boolean;
}

function createForArtist(rank: Rank, artistLines: string[], designs: DesignWithoutArtist[]): Card<SpotifyCardDesign>[] {
	return designs.map((design, index) => {
		return {
			rank: rank,
			suit: (index + 1) as Suit, // 0 is none,
			skip: design.skip,
			design: {
				artistLines: artistLines,
				...design,
			}
		};
	});
}