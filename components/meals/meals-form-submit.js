'use client';
import classes from './meals-form-submit.module.css';
import { useFormStatus } from 'react-dom';
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  console.log('why is thsi ha');

  return (
    // <h1>hello</h1>
    <button className={classes.button} disable={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
