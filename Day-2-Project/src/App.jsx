import Card from "./components/Cards";
import jobs from "./components/job";

function App() {
  return (
    <div className="cards-container">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;
