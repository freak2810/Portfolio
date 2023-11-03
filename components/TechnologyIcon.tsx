import Icon, { IconProps } from './Icon';
import styles from '../styles/tooltip.module.scss';

interface ToolTipProps extends IconProps {
	content?: string;
}

// animation='shift-away-subtle' content={props.content || props.name}

export default function TechnologyIcon(props: ToolTipProps) {
	return (
		<div className={styles.tooltip}>
			<span className={styles.tooltiptext}>{props.content || props.name}</span>
			<div className='cursor-pointer'>
				<Icon {...props} />
			</div>
		</div>
	);
}
