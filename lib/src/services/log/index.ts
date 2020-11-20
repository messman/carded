export function log(...args: any[]): void {
	console.log('[carded] ', new Date().toLocaleTimeString(), ...args);
}