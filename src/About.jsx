import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        You reached this page without the server knowing the route exists. That
        is what <code>--spa</code> buys.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </main>
  );
}
