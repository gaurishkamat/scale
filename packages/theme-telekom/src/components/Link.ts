import { JssStyle } from "jss";

export const Link: JssStyle = {
  link: {
		color: '#00A6F0',
		'--icon-color': '#00A6F0',
		borderBottom: '1px solid transparent',
		'&:hover&:not($link--disabled)': {
			color: '#00A6F0',
			'--icon-color': '#00A6F0',
		}
	},
	'link--underline': {
    '&:hover:not($link--disabled)': {
			textDecoration: 'none',
			borderBottom: '1px solid #00A6F0'
    },
  },
};
