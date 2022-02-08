const path = require('path');

module.exports = function () {
	return {
		webpack: {
			alias: {
				'@': path.resolve(__dirname, 'src/'),
				'@kakaoMap': path.resolve(__dirname, 'src/components/kakaoMap/'),
			},
		},
	};
};
