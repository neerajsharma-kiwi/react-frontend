//src/Components/create-student.component.js
// CreateStudent Component for add new student

// Import Modules
import React,
{
	useState,
	useEffect
} from "react";
import axios from 'axios';
import StudentForm
	from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
	const [formValues, setFormValues] =
		useState(
			{
				name: '',
				email: '',
				rollno: ''
			})
	// onSubmit handler
	const onSubmit =
		studentObject => {
			axios.post(process.env.REACT_APP_API_URL+'students/create-student', studentObject)
				.then(res => {
					if (res.status === 200) {
						alert('Student successfully created');
						window.location.reload("/student-list");
					}
					else {
						Promise.reject()
					}
				})
				.catch(err => alert('Something went wrong'))
		}

	// Return student form
	return (
		<StudentForm initialValues={formValues}
			onSubmit={onSubmit}
			enableReinitialize>
			Create Student
		</StudentForm>
	)
}

// Export CreateStudent Component
export default CreateStudent
