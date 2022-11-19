import { log } from './services/log/log';

export * from './process';
export * from './options/models/models';
export * from './designers/empty';
export * from './designers/spotify/spotify';

export function test(): boolean {
	log('Test');
	return true;
}