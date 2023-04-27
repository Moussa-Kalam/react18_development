import React, { FormEvent, useRef } from "react";

const Form = () => {
  // Use ref Hook to access input field
  // Always initialize your variables with null
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // It is better to post the data to the server as an object
  let person = { name: "", age: 0, DateOfBirth: new Date(), email: "" };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevent to the form to be submitted to server by default

    // If the element is not null, provide its value to the right input field
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    if (dobRef.current !== null)
      person.DateOfBirth = new Date(dobRef.current.value);
    if (emailRef.current !== null) person.email = emailRef.current.value;

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* ref={nameRef} is used to reference the value of the input from the user */}
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="DOB" className="form-label">
          Date Of Birth
        </label>
        <input ref={dobRef} id="DOB" type="date" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
