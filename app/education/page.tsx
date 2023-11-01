import client from '../../graphql/client';
import GET_EDUCATION_PAGE_PROPS from '../../graphql/queries/EDUCATION_PAGE_QUERY.ts';

export default function Education() {
	return null;
}

const getData = async () => {
	const { data } = await client.query({
		query: GET_EDUCATION_PAGE_PROPS,
		// variables: {
		// 	educationId: 'ckrxc4bpsc6th0d56wsbjt696',
		// 	employmentId: 'cks5gxjigb1q90b5854xkas8p',
		// },
	});

	console.log(data);

	// return {
	// 		institutes: data.educationDetail.educationInstitutes,
	// 		companies: data.companyDetail.companies,
	// };
};
