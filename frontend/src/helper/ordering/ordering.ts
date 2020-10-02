export const Ordering = (data: any, sortBy: string, recent: boolean) => {
  if (recent) {
    const result = data.sort((a: any, b: any) =>
      a[sortBy] < b[sortBy] ? 1 : -1
    );
    return result;
  } else {
    const result = data.sort((a: any, b: any) =>
      a[sortBy] > b[sortBy] ? 1 : -1
    );
    return result;
  }
};
