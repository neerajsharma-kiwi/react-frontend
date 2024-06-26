//src/Components/student-list.component.js
import React,
{
	useState,
	useEffect
} from "react";
import axios
	from "axios";
import { Table }
	from "react-bootstrap";
import StudentTableRow
	from "./StudentTableRow";
import { Link }
	from "react-router-dom";

const StudentList = () => {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_API_URL + "students/")
			.then(({ data }) => {
				setStudents(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const DataTable = () => {
		return students.map((res, i) => {
			return <StudentTableRow
				obj={res} key={i} />;
		});
	};

	return (
		<>
		<div className="alignment">
			<Link className="edit-link"
						to={"/create-student"}>
						Add Student
					</Link>
		</div>
		<div className="table-wrapper">
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Roll No</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{DataTable()}</tbody>
			</Table>
		</div>
		</>
	);
};

export default StudentList;
