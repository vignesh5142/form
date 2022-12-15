import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

function ValidationYup() {
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
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Invalid email address")
                .required("Please enter email"),
                firstName: Yup.string().required("Please enter firstName"),
                lastName: Yup.string().required("Please enter lastName"),
                age: Yup.number().required("Please enter age"),
                Number: Yup.number().required("Please enter Phone Number"),
                Position: Yup.string().required("Please choose the Position"),
                Terms: Yup.string().required("Please accept the Terms"),
        }),

    });
    return (
        <div >
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
                    onBlur={formik.handleBlur} />
                <label for="Male">Male</label><br></br>
                <input type="radio" id="Female" name='Gender'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Female} />
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
    )
}

export default ValidationYup