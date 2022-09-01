import { Link } from 'react-router-dom';

const Page2: React.FC = () => (
  <div>
    <h2>Page2</h2>
    <Link to="page2/100">URL Parameter</Link>
    <br />
    <Link to="page2/100?name=Alice">Query Parameter</Link>
  </div>
);

export default Page2;
