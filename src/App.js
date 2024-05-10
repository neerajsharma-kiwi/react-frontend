//App.js
// Import React
import React, { useState } from "react";
//import useState from "react";
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
	from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import {
	BrowserRouter as Router, Switch,
	Route, Link
} from "react-router-dom";

// Import other React Component
import CreateStudent from
	"./Components/create-student.component";
import EditStudent from
	"./Components/edit-student.component";
import StudentList from
	"./Components/student-list.component";

// App Component
const App = () => {

	const [students, setStudents] = useState([
		{ id: 1, firstName: 'John', lastName: 'Doe', grade: 'A' },
		{ id: 2, firstName: 'Jane', lastName: 'Smith', grade: 'B' },
		{ id: 3, firstName: 'Bob', lastName: 'Jones', grade: 'C' },
	]);
	const updateStudent = (updatedStudent) => {
		setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
	};

	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Navbar bg="dark" variant="dark">
						<Container>
							<Navbar.Brand>
								<Link to={"/create-student"}
									className="nav-link">
									React Student Management App
								</Link>
							</Navbar.Brand>

							<Nav className="justify-content-end">
								<Nav>
									<Link to={"/create-student"}
										className="nav-link">
										Create Student
									</Link>
								</Nav>

								<Nav>
									<Link to={"/student-list"}
										className="nav-link">
										Student List
									</Link>
								</Nav>
							</Nav>
						</Container>
					</Navbar>
				</header>

				<Container>
					<Row>
						<Col md={12}>
							<div className="wrapper">
								<Switch>
									<Route exact path="/"
										component={CreateStudent} />
									<Route path="/create-student"
										component={CreateStudent} />
									<Route path="/edit-student/:id"
										component={EditStudent} />
									<Route path="/student-list" render={() => <StudentList students={students} />} />
								</Switch>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Router>
	);
};

export default App;