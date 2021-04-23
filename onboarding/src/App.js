import React, {useState, useEffect} from 'react';
import axios from "axios";
import * as yup from "yup";

import './App.css';
import Form from "./Form";
import schema from "./validation";
import AddUser from "./NewUser";

const defaultInfo = {
  username: "",
  email: "",
  password: "",
  tOS: false,
}

const defaultError = {
  username: "",
  email: "",
  password: "",
  tOS: "",
}

const defaultUser = [];


function App() {
  const [user, setUser] = useState(defaultUser);
  const [userInfo, setUserInfo] = useState(defaultInfo);
  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState(defaultError);


  const postNewUser = (newUserInfo) => {
    axios.post(`https://reqres.in/api/users`, newUserInfo)
    .then(res => {
      debugger
      setUser([res.data, ...user]);
      setUserInfo(defaultInfo);
    })
    .catch(err => {
      console.log(err)
    })
  }

  const updateInfo = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setError({...error, [name]: ""})
    })
    .catch(err => {
      setError({...error, [name]: err.errors[0]})
    })
    setUserInfo({...userInfo, [name]: value})
  }

  const onSubmit = () => {
    const newUser = {
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(userInfo)
    .then((res) => {
      setDisabled(!res)
    })
  }, [userInfo])



  return (
    <div>
      <Form values={userInfo} change={updateInfo} submit={onSubmit} disabled={disabled} errors={error} />
      <div>
        {user.map((item) => {
          return (
            <AddUser key={item.id} info={item} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
