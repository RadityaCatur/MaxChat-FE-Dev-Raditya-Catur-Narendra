import json from '@rollup/plugin-json'
import plugin from '@sveltejs/adapter-auto';

export default {
	input: 'src/main.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
    plugins: [
        json()
    ]
};