import { useRef } from "react";

function HomePage() {
    const emailInputRef = useRef()
    const feedbackInputRef = useRef()

    function onSubmitFeedback(event){
        event.preventDefault()

        const email = emailInputRef.current.value
        const text = feedbackInputRef.current.value
        const data = {
            email,
            text
        }

        fetch('/api/feedback', {
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
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={onSubmitFeedback}>
        <label>Enter your Email</label>
        <input type='email' id='email'  ref={emailInputRef}/>
        <label>Enter your feedback</label>
        <textarea id='feedback' rows="5" ref={feedbackInputRef}/>
        <button type="submit">Send Your Feedback</button>
        </form>
    </div>
  );
}

export default HomePage;
