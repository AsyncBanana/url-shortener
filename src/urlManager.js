import { query as q, Client as Fauna } from "faunadb";
const FaunaClient = new Fauna({
	secret: FAUNA_KEY,
	fetch: (input, init) => {
		if (init.signal) {
			delete init.signal;
		}
		return fetch(input, init);
	},
});
export async function processUrl(id) {}
export async function createUrl(url) {}
