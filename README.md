# carded

A tool for creating poker-sized playing cards that show song lyrics and a Spotify code on them.
Used to create gift playing card sets.

**Note:** this project is being done as part of a holiday gift, so it is likely to be rushed, imperfect, and highly specialized.

## Process

1. Specify what should go on each card in a config file (rank, suit, song lyric, artist, year, spotify URI).
2. Use `canvas` to render onto a temporary canvas.
3. Export that canvas as an image of the correct size.
4. (Cache config file to make changes faster.)
5. Manually upload result images to a site like [makeplayingcards.com](https://www.makeplayingcards.com/) to create a deck of cards.

