import React from "react"


// const defaultInfo = {
//     Name: "",
//     Email: "",
//     Password: "",
//     ToS: false,
//   }

const Form = (props) => {
    // const [newUser, setNewUser]
    const { values, change, submit, disabled, errors } = props;


    const onChange = (event) => {
      const { name, value, checked, type } = event.target;
      const valueToUse = type === "checkbox" ? checked : value;
      change(name, valueToUse);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        submit();
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type="text"
                        value={values.username}
                        onChange={onChange}
                        name="username"
                    />
                </label>
            <br></br>
                <label>Email
                    <input
                        type="text"
                        value={values.email}
                        onChange={onChange}
                        name="email"
                    />
                </label>
            <br></br>
                <label>Password
                    <input
                        type="text"
                        value={values.password}
                        onChange={onChange}
                        name="password"
                    />
                </label>
            <br></br>
                <label>Terms of Service
                    <input
                        type="checkbox"
                        name="tOS"
                        checked={values.tOS}
                        onChange={onChange}
                    />
                </label>
            <br></br>
            <button disabled={disabled}>Submit</button>
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.tOS}</div>
            </div>
        </form>
    );
}

export default Form;