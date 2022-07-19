import { Form, redirect } from "react-router-dom";
import { createNote } from "../notes";

export async function action({ request }) {
  const formData = await request.formData();
  const note = await createNote({
    title: formData.get("title"),
    content: formData.get("content"),
  });
  return redirect(`/note/${note.id}`);
}

export default function NewNote() {
  // ...
}