import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    typography: {
      fontFamily: string;
    };
    colors: {
      background: string;
      backgroundColor: string;
      footer: string;
      footerText: string;
      header: string;
      headerText: string;
      overlay: string;
      primary: string;
      secundary: string;
      text: string;
      border: string;
      boxShadow: string;
      black: string;
    };
    measures: {
      borderRadius: number;
    };
    query: {
      cellphone: number;
      tablet: number;
      desktop: number;
    };
    animations: {
      transition: string;
      afterTransition: string;
    };
  }
}
