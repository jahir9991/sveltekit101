declare global {
	namespace App {
		interface Platform {
			env?: {
				jobless: KVNamespace;
				jobdb: D1Namespace;

			};
		}
	}
}

export {};
