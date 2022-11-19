import { log } from './services/log/log';

export * from './services/';
export * from './models';

export function test(): boolean {
	log('Test');
	return true;
}