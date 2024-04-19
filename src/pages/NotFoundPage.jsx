import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Helmet>
        <title>Oops page</title>
      </Helmet>
      <h2>Oops something goes wrong</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
