import { IIconButtonProps } from './IconButton.types'

export const IconButton = ({ Icon, onClick, className }: IIconButtonProps) => (
	<button type='button' onClick={onClick} className={className}>
		<Icon />
	</button>
)
