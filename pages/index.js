import { useState, useEffect } from "react";
import { getNames, addName } from '../actions/name';

const IndexPage = () => {
  const [names, setNames] = useState([]);
  const [values, setValues] = useState({
    inputVal: '',
    error: '',
    success
  });

  const { inputVal, error, success } = values;

  useEffect(() => {
    getNames().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setNames(data);
      }
    })
  }, [])

  const handleChange = name => e => {
    setValues({ ...values, error: '', success: '', [name]: e.target.value });
  }
  
  const handleSubmit = e => {
    e.preventDefault();

    addName(inputVal).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, success: data.message });
      }
    });
  }

  const showNames = () => (
    <div>
      {JSON.stringify(names)}
    </div>
  )

  const showError = () => error && <div className="alert alert-danger">{error}</div>
  const showSuccess = () => success && <div className="alert alert-success">{success}</div>

  return (
    <>
      <h1>Hi there</h1>
      <p>Add your names below:</p>]

      {showNames()}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" onChange={handleChange('inputVal')} value={inputVal} />
        <input type="submit" value="Add"/>
      </form>

      {showError()}
      {showSuccess()}
    </>
  );
}

export default IndexPage;

