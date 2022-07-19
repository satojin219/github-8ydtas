import { useLoaderData, Link } from 'react-router-dom';
import { getNotes } from '../notes';

export async function loader() {
  return getNotes();
}

export default function Root() {
  const notes = useLoaderData();

  return (
    <div>
      <Link to="/new">New Note</Link>
      {notes.map((note) => (
        <div key={note.id}>
          <Link to={`/note/${note.id}`}>{note.title}</Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
