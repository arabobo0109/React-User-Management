import React, { useState } from 'react';
import { connect } from 'react-redux';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    sex: '',
    age: '',
    password: '',
    repeat: ''
  });

  const handleCreate = e => {
    e.preventDefault();
    createUser({ userData });
  };

  const handleChange = e => {
    setUserData(e.target.value);
  };

  const handleBack = () => {
    // does push cause rerender?
    history.push('/');
  };

  return (
    <div>
      <div>
        <form onSubmit={e => handleCreate(e)}>
          <div>
            <input
              value={data}
              onChange={e => handleChange(e)}
              placeholder='firstname'
            />
          </div>
          <div>
            <input
              value={data}
              onChange={e => handleChange(e)}
              placeholder='lastname'
            />
          </div>
          <div>
            <input
              value={data}
              onChange={e => handleChange(e)}
              placeholder='sex'
            />
          </div>
          <div>
            <input
              value={data}
              onChange={e => handleChange(e)}
              placeholder='age'
            />
          </div>
          <div>
            <input
              value={data}
              onChange={e => handleChange(e)}
              placeholder='password'
            />
          </div>
          <div>
            <input
              value={data}
              onChange={e => handleChange(e)}
              placeholder='repeat'
            />
          </div>
          <div>
            <input value='Submit' type='submit' />
          </div>
        </form>
      </div>
      <div>
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default CreateUser;
