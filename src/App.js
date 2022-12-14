import './App.css';
import { useFormik } from 'formik';


const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (values.age.length > 2) {
    errors.age = 'Must be 2 Numbers or less';
  }
  if (!values.Number) {
    errors.Number = 'Required';
  } else if (values.Number.length > 10) {
    errors.Number = 'Must be 10 Numbers';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.Position) {
    errors.Position = 'Required';
  } else if (values.Position) {
  }
  if (!values.Terms) {
    errors.Terms = 'Required';
  } else if (values.Terms) {
  }
  return errors;
};


function App() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      Number: '',
      Position: '',
      Terms: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='App'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}
        <label htmlFor="Number">Number</label>
        <input
          id="Number"
          name="Number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Number}
        />
        {formik.touched.Number && formik.errors.Number ? (
          <div>{formik.errors.Number}</div>
        ) : null}
        <label htmlFor="Gender">Gender</label><br></br>
        <input type="radio" id="Male" name='Gender'
          value={formik.values.Male}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
        <label for="Male">Male</label><br></br>
        <input type="radio" id="Female" name='Gender'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Female}/>
        <label for="Female">Female</label><br></br>
        <select id="Position"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Position}
        >
          <option value="0">Select The Position</option>
          <option value="Manager">Manager</option>
          <option value="Engineer">Engineer</option>
          <option value="Employee">Employee</option>
        </select>
        {formik.touched.Position && formik.errors.Position ? (
          <div>{formik.errors.Position}</div>
        ) : null}
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <input type="checkbox" id="Terms" name='Terms'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Terms}
        />
        <label htmlFor="Terms">Agree With The Terms</label>
        {formik.touched.Terms && formik.errors.Terms ? (
          <div>{formik.errors.Terms}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div >
  );
}

export default App;
