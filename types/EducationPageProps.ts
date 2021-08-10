export interface EducationInstituteProps {
	id: string;
	instituteName: string;
	caption?: string;
	courseName: string;
	duration: string;
	location: string;
	marksPercentage: string;
	description?: string;
}

export interface CompanyProps {
	id: string;
	role: string;
	name: string;
	duration: string;
	jobType: string;
	achievements?: string;
}

export default interface EducationPageProps {
	institutes: EducationInstituteProps[];
	companies: CompanyProps[];
}
