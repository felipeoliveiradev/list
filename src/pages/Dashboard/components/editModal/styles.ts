import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from "@material-ui/core";
import styled from "styled-components";
import { ISeparatorStyles, ITableStyles } from "./interfaces";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: #fff;
border-radius: 8px;

width: 70%;
height: 70%;
`;

export const Header = styled.header`
display: flex;
align-items: flex-start;
justify-content: space-between;
height: 80px;
width: 100%;
padding: 20px;
position: relative;

svg {
  transition: all ease 0.2s;
  cursor: pointer;

  &:hover {
    color: #EA5917;
  }
}
`;

export const Box = styled.div`
display: flex;

div {
position: absolute;
display: flex;
justify-content: flex-end;
align-items: flex-end;
top: -27px;
left: 10px;
background-color: #3B3B3B;
height: 80px;
width: 80px;
box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
border-radius: 4px;

svg {
  padding: 5px;
}
}

p {
  margin: 0;
  padding-left: 80px;
  font-weight: bold;
}
`;

export const Separator = styled.hr<ISeparatorStyles>`
border: 0;
height: ${(props) => props.first ? "2px" : "1.5px"};
background: #cdcdcd;
width: 98%;
`;

export const Fields = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;

span {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 5px;
}
`;

export const TableData = styled.div`
display: flex;
width: 100%;
height: 100%;
padding: 20px;
overflow: auto;
`;

export const Wrapper = styled.div`
display: flex;
`;

export const MuiTextField = styled(TextField)`
flex: 1;
margin: 5px;

.MuiFilledInput-underline:before {
  display: none;
}

.MuiFilledInput-underline:after {
  display: none;
}
`;

export const MuiTable = styled(Table)`
margin: 5px;
`;
export const MuiTableBody = styled(TableBody)``;
export const MuiTableCell = styled(TableCell)<ITableStyles>`
color: ${(props) => props.header && "#fff"};
font-weight: bold;
background-color: ${(props) => props.header ? "#999" : "#cdcdcd"};
`;
export const MuiTableHead = styled(TableHead)``;
export const MuiTableRow = styled(TableRow)``;
export const MuiTableContainer = styled(TableContainer)``;