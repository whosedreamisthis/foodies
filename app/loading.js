import classes from './loading.module.css';
export default function mealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
