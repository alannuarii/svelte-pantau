export const generateUniqueCode = () => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let uniqueCode = '';

	for (let i = 0; i < 5; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		uniqueCode += characters.charAt(randomIndex);
	}

	const timestamp = Date.now().toString();

	uniqueCode = `${uniqueCode}${timestamp}`;
	return uniqueCode;
};
