import { Form } from "react-router-dom";

export default function NewNote() {
  return (
    <Form method="post">
      <p>
        <label>
          Title
          <br />
          <input type="text" name="title" />
        </label>
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <br />
        <textarea
          id="content"
          name="content"
          rows="10"
          cols="30"
        />
      </p>
      <p>
        <button type="submit">Save</button>
      </p>
    </Form>
  );
}