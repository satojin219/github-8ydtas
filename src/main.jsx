import Root, { loader as rootLoader } from "./routes/root";
import NewNote, {
  action as newNoteAction,
} from "./routes/new-note";
import Note, {
  loader as noteLoader,
  action as noteAction,
} from "./routes/note";

createRoot(document.getElementById("root")).render(
  <DataBrowserRouter>
    <Route path="/" element={<Root />} loader={rootLoader}>
      <Route
        path="new"
        element={<NewNote />}
        action={newNoteAction}
      />
    <Route
        path="note/:noteId"
        element={<Note />}
        loader={noteLoader}
        action={noteAction}
        errorElement={<div>Note not found</div>}
        />
      </Route>
  </DataBrowserRouter>
);