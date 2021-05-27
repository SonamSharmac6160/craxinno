import React from "react";
import * as Styled from "../pages/page.styled";


type Props = {
  input: Object,
  label: string,
  type: string,
  meta: Object,
  showTime: string,
  children: Object,
  data: string,
  value: string
};

const renderInput = ({ placeholder, id, className, data, icon, disabled, input, type, meta: { touched, error } }: Props) => {
  return (
    <div className="input-group mb-3">
      <input  {...input} type={type} placeholder={placeholder} disabled={disabled} id={id} className="form-control" />
      {touched && (error && <Styled.error>{error}</Styled.error>)}
    </div>
  );
}


export {
  renderInput
};
