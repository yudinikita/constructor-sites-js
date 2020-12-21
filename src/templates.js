import {row, col, css} from './utils';

function title(block) {
	const {tag = 'h1', styles} = block.options;
	return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
	return row(col(`<p>${block.value}</p>`), css(block.options.styles));
}

function columns(block) {
	const htmlColumn = block.value.map(col).join('');
	return row(htmlColumn, css(block.options.styles));
}

function image(block) {
	const {imageStyle, alt, styles} = block.options;
	return row(`<img src="${block.value}" alt="${alt}" style="${imageStyle}" />`, css(styles));
}

export const templates = {
	title,
	text,
	columns,
	image
};