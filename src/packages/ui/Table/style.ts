import { pxToRem } from "helper";
import MUIDataTable from "mui-datatables";
import styled from "styled-components";

export const Container = styled.div`
  .MuiPaper-root{
    box-shadow: none !important;
    background: transparent !important;
    font-family: 'Poppins', sans-serif !important;
    font-weight: 300;
    p{
      color: #fff;
    }
    svg{
        color: #fff !important;
      }
      div{
        color: #fff !important;
      }
  }
  .MuiToolbar-root{
    padding-left: 0;
    h6{
      font-family: 'Poppins', sans-serif !important;
      font-weight: 500;
      font-size: 26px;
    }
  }
  .MuiTableRow-root{
    border-bottom: transparent 2rem;
    background: #2f3247;
    margin-bottom: ${pxToRem(10)};
    font-family: 'Poppins', sans-serif !important;
    td{
      border: none;
      border-bottom:10px solid #2f3247;
      div{
        color: #8c8e99 !important;
        font-family: 'Poppins', sans-serif !important;
        font-weight: 400;
      }
    }
    &:hover{
      background: #2f3247!important;
      td{
        border-bottom:10px solid #2f3247;
        div{
          color: #fff !important;
        }
      }
    }
  }

  .MuiTableCell-head{
    background: transparent !important;
    border: none !important;
    color: #fff !important;
    font-family: 'Poppins', sans-serif !important;
    font-weight: 300;
  }
  .MuiTableSortLabel-root.MuiTableSortLabel-active{
    color: #fff !important;

  }
`;

export const StyledMuiDatable = styled(MUIDataTable)`
thead{
  tr{
    background-color:transparent !important;
  }
}
`;