const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: 'eeb8c48270c3876b404516b12903509f',
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
