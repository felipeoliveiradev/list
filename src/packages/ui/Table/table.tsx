import React from "react";
import { Container, StyledMuiDatable } from "./style";
import { IMuiDataTableProps } from "./interfaces";

export const Table: React.FC<IMuiDataTableProps> = ({
  columns,
  data,
  title,
  options
}) => {
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
