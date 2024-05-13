//App.js
// Import React
import React, { useState,Suspense } from "react";
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
// App Component
const App = () => {

	const [students, setStudents] = useState([]);
	const StudentList = React.lazy(() => import("./Components/student-list.component"));
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
								</Switch>
								<Suspense fallback={<div>Loading...</div>}>
									<Switch>
									<Route path="/student-list" render={() => <StudentList students={students} />} />
									</Switch>
								</Suspense>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Router>
	);
};

export default App;
