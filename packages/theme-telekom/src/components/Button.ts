import { JssStyle } from 'jss';

export const Button: JssStyle = {
	button: {
		fontFamily: 'TeleGrotesk Next Bold',
		paddingLeft: 22,
		paddingRight: 22,
		paddingTop: 8,
		paddingBottom: 8,
		height: 'unset',
		minHeight: 42,
		lineHeight: '24px',
		whiteSpace: 'nowrap',
		'&, &:focus, &.focus': {
			borderColor: '#e20074',
			background: '#e20074',
			color: '#fff',
			'--icon-color': '#fff'
		},
		'&:hover, &.hover': {
			borderColor: '#F90984',
			background: '#F90984',
			color: '#fff',
			'--icon-color': '#fff',
		},
		'&:active, &.active, &.selected': {
			borderColor: '#CB0068',
			background: '#CB0068',
			color: '#fff',
			'--icon-color': '#fff',
		}
	},
	'button--variant-secondary': {
		'&, &:focus, &.focus': {
			borderColor: '#111111',
			background: 'none',
			color: '#161616',
			'--icon-color': '#161616',
		},
		'&:hover, &.hover': {
			borderColor: '#E20074',
			background: 'none',
			color: '#E20074',
			'--icon-color': '#e20074',
		},
		'&:active, &.active, &.selected': {
			borderColor: '#CB0068',
			background: 'none',
			color: '#CB0068',
			'--icon-color': '#cb0068',
		}
	},
	'button--disabled': {
		'&, &:hover': {
			background: '#CDCDCD',
			border: '1px solid #CDCDCD',
			color: '#999999',
			'--icon-color': '#999999',
			opacity: 1
		},
		'&$button--variant-secondary, &$button--variant-secondary:hover': {
			background: 'none',
			border: '1px solid #CDCDCD',
			color: '#CDCDCD',
			'--icon-color': '#cdcdcd'
		},
	},
	'button--size-small': {
		minHeight: 32,
		fontSize: 12,
		paddingLeft: 14,
		paddingRight: 14,
		paddingTop: 4,
		paddingBottom: 4,
		lineHeight: '16px',
		'&$button--icon-only': {
			height: 32,
			width: 32,
			padding: 0
		}
	},
	'button--icon-only': {
		height: 42,
		width: 42,
		padding: 0,
	}
}
