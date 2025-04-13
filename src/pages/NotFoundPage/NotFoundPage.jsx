import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Not Found! Please follow this
        <Link to="/">link</Link>
      </p>
    </div>
  );
}
