export interface EducationInstitute {
	id: string;
	instituteName: string;
	caption?: string;
	courseName: string;
	duration: string;
	location: string;
	marksPercentage: string;
	description?: string;
}

export default interface EducationPageProps {
	institutes: EducationInstitute[];
}
