'use client';

import { Maybe } from 'graphql/jsutils/Maybe';
import styles from '../styles/type-writer.module.scss';
import { useEffect, useState } from 'react';

interface Roles {
	roles: Maybe<Maybe<string>[]> | undefined;
}

export default function TypeWriterEffect({ roles }: Roles) {
	const [currentRole, switchCurrentRole] = useState(0);

	useEffect(() => {
		console.log('use effect');
		switchCurrentRole((currentRole + 1) % roles?.length!);
	}, []);

	return (
		<div className={styles.typeWriter}>
			<span className={styles.firstText}>I am a </span>
			<span className={styles.secondText}>
				{roles ? roles[currentRole] : ''}
			</span>
		</div>
	);
}
