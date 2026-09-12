import { Link } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <h1>Vite + React</h1>
      <p>Deployed to One9x Pages.</p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p className="note">
        This app routes in the browser, which is why it is deployed with{' '}
        <code>--spa</code>. Open <code>/about</code> directly and hard-refresh:
        without that flag it would 404.
      </p>
    </main>
  );
}
