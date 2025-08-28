import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Applicant, ApplicantApi, Configuration } from "./client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <UserList />
      </header>
    </div>
  );
}

function UserList() {
  const api = new ApplicantApi(new Configuration({ basePath: "http://localhost:8000" }));
  const [applicants, setApplicants] = React.useState<Applicant[]>([]);

  const fetchApplicants = async () => {
    const applicants = await api.apiV1ApplicantsList();
    setApplicants(applicants.data);
  };

  React.useEffect(() => {
    fetchApplicants();
  }, []);

  return (
    <ul>
      {applicants.map((u) => (
        <li key={u.id}>
          <strong>{u.name}</strong> - {u.email}
        </li>
      ))}
    </ul>
  );
}

export default App;
