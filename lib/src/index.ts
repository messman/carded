import { log } from './services/log';

export * from './process';
export * from './options/models';
export * from './designers/empty';
export * from './designers/spotify';

export function test(): boolean {
	log('Test');
	return true;
}