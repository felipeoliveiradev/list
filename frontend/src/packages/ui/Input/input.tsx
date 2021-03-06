import { Container, InputGroup } from "./style";
import React, { forwardRef } from "react";

import { IInput } from "./interfaces";

const Input: React.RefForwardingComponent<HTMLInputElement, IInput> = (
  { title, error, message,type,  ...rest },
  ref
) => {
  return (
    <Container>
      <InputGroup error={error}>
        <span>{title}</span>
        <input ref={ref}  {...rest} type={type} />
        {error && message && <span>{message}</span>}
      </InputGroup>
    </Container>
  );
};

export default forwardRef(Input);
