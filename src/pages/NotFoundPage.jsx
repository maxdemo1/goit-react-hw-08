import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>Oops something goes wrong</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
