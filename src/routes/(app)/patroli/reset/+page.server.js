import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	cookies.delete('dataPatroli');
	throw redirect(302, '/patroli');
};
