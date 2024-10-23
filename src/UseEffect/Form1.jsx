//Create a form that logs the submitted data to the console when the form is submitted.
// Requirements:
// •	Use useState to manage form input values.
// •	Use useEffect to log the submitted data whenever the form is submitted.
// •	Include input fields for name and email.
import React, { useState, useEffect } from 'react';

const Form1= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ name, email });
  };

  useEffect(() => {
    if (submittedData) {
      console.log('Submitted Data:', submittedData);
    }
  }, [submittedData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form1;



