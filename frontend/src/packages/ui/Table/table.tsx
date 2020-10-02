import { Container, StyledMuiDatable } from "./style";

import { IMuiDataTableProps } from "./interfaces";
import React from "react";

export const Table = (props: IMuiDataTableProps) => {
  const {
    columns,
    data,
    title,
    options
  } = props;
  return (
    <Container>
      <StyledMuiDatable
        title={title}
        columns={columns}
        data={data}
        options={options}
        />
    </Container>
  );
};
