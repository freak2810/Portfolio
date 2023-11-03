'use client';

import { useEffect, useState } from 'react';
import { Maybe } from '../graphql/__generated__';
import styles from '../styles/type-writer.module.scss';

interface Roles {
	roles: Maybe<Maybe<string>[]> | undefined;
}

export default function TypeWriterEffect({ roles }: Roles) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(index => (index + 1) % (roles?.length || 0));
		}, 3800);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.typeWriter}>
			<span className={styles.secondText}>{roles ? roles[index] : ''}</span>
		</div>
	);
}
