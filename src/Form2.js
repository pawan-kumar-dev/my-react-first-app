import { Form, Formik } from "formik";
import React from "react";

const Form2 = () => {
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          address: "",
          gender: "",
          play: false,
          sing: false,
          reading: false,
          state: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, values, handleChange }) => (
          <Form>
            <input
              type="text"
              placeholder="Firstname"
              name="firstName"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              type="text"
              placeholder="Lastname"
              name="lastName"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <textarea
              name="address"
              onChange={(e) => handleChange(e)}
            ></textarea>
            <br />
            <div>
              Gender:
              <input
                type="radio"
                value="Male"
                name="gender"
                onChange={(e) => handleChange(e)}
                checked={values.gender === "Male"}
              />
              : Male
              <br />
              <input
                type="radio"
                value="Female"
                name="gender"
                onChange={(e) => handleChange(e)}
                checked={values.gender === "Female"}
              />
              : Female
              <br />
            </div>
            Hobbies : <br />
            Play:
            <input
              type="checkbox"
              name="play"
              onChange={(e) => handleChange(e)}
              checked={values.play}
            />
            Sing:
            <input
              type="checkbox"
              name="sing"
              onChange={(e) => handleChange(e)}
              checked={values.sing}
            />
            Reading:
            <input
              type="checkbox"
              name="reading"
              onChange={(e) => handleChange(e)}
              checked={values.reading}
            />
            <br />
            Select State:
            <select
              value={values.state}
              name="state"
              onChange={(e) => handleChange(e)}
            >
              <option>Select STate</option>
              <option value="MH">Maharashtra</option>
              <option value="GOA">Goa</option>
              <option value="U.P.">UP</option>
            </select>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form2;
