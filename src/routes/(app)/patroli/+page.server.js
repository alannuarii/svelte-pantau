export const load = async ({ cookies }) => {
	try {
		if (cookies.get('dataPatroli')) {
			const dataPatroli = cookies.get('dataPatroli');
			const data = JSON.parse(dataPatroli);
			console.log(data);
			console.log(data.length)
			return { data };
		} else {
			const data = '';
			return { data };
		}
	} catch (error) {
		console.error('Terjadi kesalahan', error);
		throw error;
	}
};
