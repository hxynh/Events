import React from 'react';
import { useNavigate, Form, useNavigation, useActionData } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const errorData = useActionData();
  const navigate = useNavigate();
  const isSaving = useNavigation().state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {
        errorData && errorData.errors && 
        <ul>
          {Object.values(errorData.errors).map(error =>
            <li key={error}>
              {error}
            </li>
          )}
        </ul>
      }
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''}/>
      </p>
      <div className={classes.actions}>
        <button disabled={isSaving} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSaving}>{isSaving ? 'Submitting..' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
