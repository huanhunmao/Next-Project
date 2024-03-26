import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
    const emailInputRef = useRef()
  function registrationHandler(event) {
    const data = {email:emailInputRef.current.value}
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
