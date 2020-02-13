import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
  width: 350px;
  margin-top: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 30px;
`;

const FormList = styled.ul`
  list-style-type: none;
  padding: 10px;
`;

const Label = styled.label`
  font-size: 2em;
  font-weight: bold;
  display: inline-block;
  margin-right: 20px;
`;

const ListElement = styled.li`
    display: flex;
    justify-content: space-between;
    padding: .6em;
`;

const CheckBox = styled.input.attrs({
  type:'checkbox'
})`
    width: 30px;
    height: 20px;
    bottom: 1px;
`;

const SubmitButton = styled.button`
  margin-left: 65%;
  font-size: 1.1em;
  height: 32px;
  width: 30%;
`;

const AddForm = props => {
  return (
    <FormContainer className="formCard">
      <h1>Add Item</h1>
      <form onSubmit={props.handleSubmit}>
        <FormList>
          <ListElement>
            <Label htmlFor="name">Item:</Label>
            <input
              id="name"
              name="name"
              type="text"
              value={props.form.name}
              onChange={props.handleChange}
            />
          </ListElement>
          <ListElement>
            <Label htmlFor="isImportant">
              Important:
              <CheckBox
                id="isImportant"
                name="isImportant"
                type="checkbox"
                checked={props.form.isImportant}
                onChange={props.handleChange}
              />
            </Label>
          </ListElement>
          <ListElement>
            <Label>
              Fit:
              <CheckBox
                name="isFit"
                type="checkbox"
                checked={props.form.isFit}
                onChange={props.handleChange}
              />
            </Label>
          </ListElement>
          <ListElement>
            <Label>
              Urgent:
              <CheckBox
                name="isUrgent"
                type="checkbox"
                checked={props.form.isUrgent}
                onChange={props.handleChange}
              />
            </Label>
          </ListElement>
        </FormList>
        <SubmitButton type="submit">Submit</SubmitButton>
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
