import carded = require('@messman/carded');
const { process } = carded;
import { getEmptyOptions } from './process-empty';
import { getSpotifyOptions } from './process-spotify';

const useProcessEmpty = false;

if (useProcessEmpty) {
	process(getEmptyOptions());
}
else {
	process(getSpotifyOptions());
}