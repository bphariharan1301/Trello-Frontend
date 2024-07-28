// pages/index.js
import Layout from './components/Layout';
import Header from './components/Header';
// import TaskBoard from './components/TaskCard';

const tasksToDo = [
  { title: 'Implement User Authentication', dueDate: '2024-08-15', priority: 'Urgent', time: '1 hr ago' },
];

const tasksInProgress = [
  { title: 'Design Home Page UI', dueDate: '2024-08-15', priority: 'Medium', time: '1 hr ago' },
];

const tasksUnderReview = [
  { title: 'Integrate Cloud Storage', dueDate: '2024-08-20', priority: 'Urgent', time: '2 days ago' },
];

const tasksFinished = [
  { title: 'Test Cross-browser Compatibility', dueDate: '2024-07-30', priority: 'Medium', time: '4 days ago' },
];

const Home = () => {
  return (
    <Layout>
      <Header />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TaskBoard title="To do" tasks={tasksToDo} />
        <TaskBoard title="In progress" tasks={tasksInProgress} />
        <TaskBoard title="Under review" tasks={tasksUnderReview} />
        <TaskBoard title="Finished" tasks={tasksFinished} />
      </div> */}
    </Layout>
  );
};

export default Home;
