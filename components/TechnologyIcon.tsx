import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away-subtle.css';

import Icon, { IconProps } from './Icon';

interface ToolTipProps extends IconProps {
	content?: string;
}

export default function TechnologyIcon(props: ToolTipProps) {
	return (
		<Tippy animation='shift-away-subtle' content={props.content || props.name}>
			<div className='cursor-pointer'>
				<Icon {...props} />
			</div>
		</Tippy>
	);
}
