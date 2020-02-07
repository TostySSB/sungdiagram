import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const FormContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 30%;
    margin-top: 100px;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
    padding-bottom: 30px;
`;

const AddForm = props => {
  return (
    <FormContainer>
        <h1 style={{}}>Add Item</h1>
      <form onSubmit={props.handleSubmit}>
        <label>
          Item:
          <input
            name="name"
            type="text"
            value={props.form.name}
            onChange={props.handleChange}
          />
        </label>
        <br />
        <label>
          Important:
          <input
            name="isImportant"
            type="checkbox"
            checked={props.form.isImportant}
            onChange={props.handleChange}
          />
        </label>
        <br />
        <label>
          For Yourself:
          <input
            name="isSelf"
            type="checkbox"
            checked={props.form.isSelf}
            onChange={props.handleChange}
          />
        </label>
        <br />
        <label>
          Urgent:
          <input
            name="isUrgent"
            type="checkbox"
            checked={props.form.isUrgent}
            onChange={props.handleChange}
          />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </FormContainer>
  );
};

AddForm.propTypes = {
  form: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default AddForm;
