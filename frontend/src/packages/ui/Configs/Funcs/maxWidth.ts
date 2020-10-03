export const maxWidth = (size?: string | number) => {
  switch (size) {
    case "small":
      return pxToRem(300);
    case "medium":
        return pxToRem(500);   
    case "large":
          return pxToRem(700);     
    default:
      return;
  }
}