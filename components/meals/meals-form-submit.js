'use client';
import classes from './meals-form-submit.module.css';
import { useFormStatus } from 'react-dom';
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    // <h1>hello</h1>
    <button className={classes.button} disabled={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
