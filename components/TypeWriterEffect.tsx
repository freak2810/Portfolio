import { Maybe } from '../graphql/__generated__';
import styles from '../styles/type-writer.module.scss';

interface Roles {
	roles: Maybe<Maybe<string>[]> | undefined;
}

export default function TypeWriterEffect({ roles }: Roles) {
	return (
		<div className={styles.typeWriter}>
			<span className={styles.secondText}>{roles ? roles[0] : ''}</span>
		</div>
	);
}
