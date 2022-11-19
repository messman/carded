import { processEmpty } from './process-empty';
import { processSpotify } from './process-spotify';

const useProcessEmpty = false;

if (useProcessEmpty) {
	processEmpty();
}
else {
	processSpotify();
}