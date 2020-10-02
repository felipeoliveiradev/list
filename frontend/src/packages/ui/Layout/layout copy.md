// import { Banner, Box, Card, Column, Form, Line, Separator, Spacer, Table, Text } from "packages";
// import React, { useCallback, useEffect, useState } from "react";

// import { Bar } from "react-chartjs-2";
// import { Container } from "./style";
// import { ITrackingLayoutProps } from "./interfaces";
// import { Loading } from "components";

// export const Layout: React.FC<ITrackingLayoutProps> = ({ options }) => {
//   const [dataChart, setDataChart] = useState<any>(null);

//   const handleData = useCallback(async () => {
//     options.map((item) => {
//       if (item.line) {
//         item.line.map((line) => {
//           if (line.chart) {
//             line.chart.children.content.map((chart) => {
//               receiveDataChart({
//                 data: chart.data,
//                 labels: chart.labels,
//                 title: chart.title,
//               });
//               return false;
//             });
//           }

//           if (line.column) {
//             line.column.map((column) => {
//               if (column.children.content.chart) {
//                 column.children.content.chart?.children.content.map((chart) => {
//                   receiveDataChart({
//                     data: chart.data,
//                     labels: chart.labels,
//                     title: chart.title,
//                   });
//                   return false;
//                 });
//               }
//               return false;
//             });
//           }
//           return false;
//         });
//       }

//       if (item.column) {
//         item.column.map((column) => {
//           if (column.chart) {
//             column.chart.children.content.map((chart) => {
//               receiveDataChart({
//                 data: chart.data,
//                 labels: chart.labels,
//                 title: chart.title,
//               });
//               return false;
//             });
//           }
//           return false;
//         });
//       }
//       return false;
//     });
//   }, [options]);

//   useEffect(() => {
//     handleData();
//   }, [handleData]);

//   const receiveDataChart = (props: any) => {
//     const { labels, title, data } = props;
//     setDataChart({
//       labels,
//       datasets: [
//         {
//           label: title,
//           fill: false,
//           lineTension: 0.1,
//           backgroundColor: "rgba(75,192,192,0.4)",
//           borderColor: "rgba(75,192,192,1)",
//           borderCapStyle: "butt",
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: "miter",
//           pointBorderColor: "rgba(75,192,192,1)",
//           pointBackgroundColor: "#fff",
//           pointBorderWidth: 1,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: "rgba(75,192,192,1)",
//           pointHoverBorderColor: "rgba(220,220,220,1)",
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: data,
//         },
//       ],
//     });
//   };

//   return (
//     <Container>
//       {options.map(
//         (items) =>
//           items.line &&
//           items.line.map((
//             line,
//             indexLine //Line
//           ) => (
//             <React.Fragment key={indexLine}>
//               {line.separator && <Separator glutter={line.glutter} />}
//               <Line flex={2}>
//                 {line.banner &&
//                   line.banner.map((banner, index) => (
//                     <React.Fragment key={index}>
//                       <Box {...banner.style}>
//                         {banner.children?.content?.loading && <Loading />}
//                         <Banner
//                           title={banner.children?.content?.title}
//                           subtitle={banner.children?.content?.subtitle}
//                           status={banner.children?.content?.status}
//                         />
//                       </Box>
//                       {banner.children?.content?.separator && <Separator />}
//                     </React.Fragment>
//                   ))}

//                 {line.chart &&
//                   dataChart &&
//                   line.chart.map((chart, index) => (
//                     <React.Fragment key={index}>
//                       <Box {...chart.style}>
//                         {chart.children?.content.loading && <Loading />}
//                         <Bar
//                           data={dataChart}
//                           options={{
//                             responsive: true,
//                             maintainAspectRatio: false,
//                           }}
//                         />
//                       </Box>
//                       {chart.children.content.separator && <Separator />}
//                     </React.Fragment>
//                   ))}

//                 {line.card &&
//                   line.card.map((card, index) => (
//                     <React.Fragment key={index}>
//                       <Box {...card.style}>
//                         {card.children.content.loading && <Loading />}
//                         {card.children.content.status === "error" && (
//                           <Card
//                             text={card.children.content.title}
//                             number={card.children.content.content}
//                             color="#fd5c63"
//                             subtitle={card.children.content.subtitle}
//                           />
//                         )}

//                         {card.children.content.status === "success" && (
//                           <Card
//                             text={card.children.content.title}
//                             number={card.children.content.content}
//                             color="#00a78e"
//                             subtitle={card.children.content.subtitle}
//                           />
//                         )}

//                         {card.children.content.status === "warning" && (
//                           <Card
//                             text={card.children.content.title}
//                             number={card.children.content.content}
//                             color="#fbb034"
//                             subtitle={card.children.content.subtitle}
//                           />
//                         )}

//                         {card.children.content.status === "normal" && (
//                           <Card
//                             text={card.children.content.title}
//                             number={card.children.content.content}
//                             color="#037ef3"
//                             subtitle={card.children.content.subtitle}
//                           />
//                         )}
//                       </Box>
//                       {card.children.content.separator && <Separator />}
//                     </React.Fragment>
//                   ))}

//                 {line.table &&
//                   line.table.map((table, index) => (
//                     <React.Fragment key={index}>
//                       <Box {...table.style}>
//                         {table.children.content.loading && <Loading />}
//                         <Table
//                           options={table.children.content.options}
//                           columns={table.children.content.columns}
//                           data={table.children.content.data}
//                           title={table.children.content.title}
//                         />
//                       </Box>
//                       {table.children.content.separator && <Separator />}
//                     </React.Fragment>
//                   ))}

//                 {line.form &&
//                           line.form.map((form, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...form.style}>
//                                 <Form {...form.children.content} />
//                               </Box>
//                               {form.children.content.separator && <Separator />}
//                             </React.Fragment>
//                           ))}

//                 {line.column &&
//                   line.column.map((
//                     column,
//                     indexColumn // Column
//                   ) => (
//                     <React.Fragment key={indexColumn}>
//                       {column.children.content.separator && <Separator />}
//                       <Column {...column.style}>
//                         {column.children.content.banner &&
//                           column.children.content.banner.map((banner, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...banner.style}>
//                                 {banner.children.content.loading && <Loading />}
//                                 <Banner
//                                   title={banner.children.content.title}
//                                   subtitle={banner.children.content.subtitle}
//                                   status={banner.children.content.status}
//                                 />
//                               </Box>
//                               {banner.children.content.separator && <Separator />}
//                             </React.Fragment>
//                           ))}

//                         {column.children.content.chart &&
//                           dataChart &&
//                           column.children.content.chart.map((chart, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...chart.style}>
//                                 {chart.children.content.loading && <Loading />}
//                                 <Bar
//                                   data={dataChart}
//                                   options={{
//                                     responsive: true,
//                                     maintainAspectRatio: false,
//                                   }}
//                                 />
//                               </Box>
//                               {chart.children.content.separator && <Separator />}
//                             </React.Fragment>
//                           ))}

//                         {column.children.content.card &&
//                           column.children.content.card.map((card, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...card.style}>
//                                 {card.children.content.loading && <Loading />}
//                                 {card.children.content.status === "error" && (
//                                   <Card
//                                     text={card.children.content.title}
//                                     number={card.children.content.content}
//                                     color="#fd5c63"
//                                     subtitle={card.children.content.subtitle}
//                                   />
//                                 )}

//                                 {card.children.content.status === "success" && (
//                                   <Card
//                                     text={card.children.content.title}
//                                     number={card.children.content.content}
//                                     color="#00a78e"
//                                     subtitle={card.children.content.subtitle}
//                                   />
//                                 )}

//                                 {card.children.content.status === "warning" && (
//                                   <Card
//                                     text={card.children.content.title}
//                                     number={card.children.content.content}
//                                     color="#fbb034"
//                                     subtitle={card.children.content.subtitle}
//                                   />
//                                 )}

//                                 {card.children.content.status === "normal" && (
//                                   <Card
//                                     text={card.children.content.title}
//                                     number={card.children.content.content}
//                                     color="#037ef3"
//                                     subtitle={card.children.content.subtitle}
//                                   />
//                                 )}
//                               </Box>
//                               {card.children.content.separator && <Separator />}
//                             </React.Fragment>
//                           ))}

//                         {column.children.content.table &&
//                           column.children.content.table.map((table, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...table.style}>
//                                 {table.children.content.loading && <Loading />}
//                                 <Table
//                                   options={table.children.content.options}
//                                   columns={table.children.content.columns}
//                                   data={table.children.content.data}
//                                   title={table.children.content.title}
//                                 />
//                               </Box>
//                               {table.children.content.separator && <Separator />}
//                             </React.Fragment>
//                           ))}
//                        {column.children.content.form &&
//                           column.children.content.form.map((form, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...form.style}>
//                                 <Form {...form.children.content} />
//                               </Box>
//                               {form.children.content.separator && <Separator />}
//                             </React.Fragment>
//                           ))}
//                        {column.children.content.text &&
//                           column.children.content.text.map((text, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...text.style}>
//                                 <Text {...text.children.content} />
//                               </Box>
//                               {text.children.content.separator && <Separator />}
//                             </React.Fragment>
//                           ))}

                          
//                       </Column>
//                       { column.children.content.separator && (
//                         <Separator glutter={ column.children.content.glutter} />
//                       )}
//                     </React.Fragment>
//                   ))}
//               </Line>
//             </React.Fragment>
//           ))
//       )}

//       {options.map(
//         (items) =>
//           items.column &&
//           items.column.map((
//             column,
//             indexColumn //Line
//           ) => (
//             <React.Fragment key={indexColumn}>
//               {column.separator && <Separator glutter={column.glutter} />}
//               <Line>
//                 {column.banner &&
//                   column.banner.map((banner, index) => (
//                     <React.Fragment key={index}>
//                       <Box {...banner.style}>
//                         {banner.loading && <Loading />}
//                         <Banner
//                           title={banner.title}
//                           subtitle={banner.subtitle}
//                           status={banner.status}
//                         />
//                       </Box>
//                       {banner.separator && <Separator />}
//                     </React.Fragment>
//                   ))}

//                 {column.chart &&
//                   dataChart &&
//                   column.chart.map((chart, index) => (
//                     <React.Fragment key={index}>
//                       <Box {...chart.style}>
//                         {chart.loading && <Loading />}
//                         <Bar
//                           data={dataChart}
//                           options={{
//                             responsive: true,
//                             maintainAspectRatio: false,
//                           }}
//                         />
//                       </Box>
//                       {chart.separator && <Separator />}
//                     </React.Fragment>
//                   ))}

//                 {column.card &&
//                   column.card.map((card, index) => (
//                     <React.Fragment key={index}>
//                       <Box {...card.style}>
//                         {card.loading && <Loading />}
//                         {card.status === "error" && (
//                           <Card
//                             text={card.title}
//                             number={card.content}
//                             color="#fd5c63"
//                             subtitle={card.subtitle}
//                           />
//                         )}

//                         {card.status === "success" && (
//                           <Card
//                             text={card.title}
//                             number={card.content}
//                             color="#00a78e"
//                             subtitle={card.subtitle}
//                           />
//                         )}

//                         {card.status === "warning" && (
//                           <Card
//                             text={card.title}
//                             number={card.content}
//                             color="#fbb034"
//                             subtitle={card.subtitle}
//                           />
//                         )}

//                         {card.status === "normal" && (
//                           <Card
//                             text={card.title}
//                             number={card.content}
//                             color="#037ef3"
//                             subtitle={card.subtitle}
//                           />
//                         )}
//                       </Box>
//                       {card.separator && <Separator />}
//                     </React.Fragment>
//                   ))}

//                 {column.table &&
//                   column.table.map((table, index) => (
//                     <React.Fragment key={index}>
//                       <Box {...table.style}>
//                         {table.loading && <Loading />}
//                         <Table
//                           options={table.options}
//                           columns={table.columns}
//                           data={table.data}
//                           title={table.title}
//                         />
//                       </Box>
//                       {table.separator && <Separator />}
//                     </React.Fragment>
//                   ))}

//                 {column.line &&
//                   column.line.map((
//                     line,
//                     indexLine // Column
//                   ) => (
//                     <React.Fragment key={indexLine}>
//                       {line.separator && <Separator />}
//                       <Column>
//                         {line.banner &&
//                           line.banner.map((banner, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...banner.style}>
//                                 {banner.loading && <Loading />}
//                                 <Banner
//                                   title={banner.title}
//                                   subtitle={banner.subtitle}
//                                   status={banner.status}
//                                 />
//                               </Box>
//                               {banner.separator && <Separator />}
//                             </React.Fragment>
//                           ))}

//                         {line.chart &&
//                           dataChart &&
//                           line.chart.map((chart, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...chart.style}>
//                                 {chart.loading && <Loading />}
//                                 <Bar
//                                   data={dataChart}
//                                   options={{
//                                     responsive: true,
//                                     maintainAspectRatio: false,
//                                   }}
//                                 />
//                               </Box>
//                               {chart.separator && <Separator />}
//                             </React.Fragment>
//                           ))}

//                         {line.card &&
//                           line.card.map((card, index) => (
//                             <React.Fragment key={index}>
//                               <Box {...card.style}>
//                                 {card.loading && <Loading />}
//                                 {card.status === "error" && (
//                                   <Card
//                                     text={card.title}
//                                     number={card.content}
//                                     color="#fd5c63"
//                                     subtitle={card.subtitle}
//                                   />
//                                 )}

//                                 {card.status === "success" && (
//                                   <Card
//                                     text={card.title}
//                                     number={card.content}
//                                     color="#00a78e"
//                                     subtitle={card.subtitle}
//                                   />
//                                 )}

//                                 {card.status === "warning" && (
//                                   <Card
//                                     text={card.title}
//                                     number={card.content}
//                                     color="#fbb034"
//                                     subtitle={card.subtitle}
//                                   />
//                                 )}

//                                 {card.status === "normal" && (
//                                   <Card
//                                     text={card.title}
//                                     number={card.content}
//                                     color="#037ef3"
//                                     subtitle={card.subtitle}
//                                   />
//                                 )}
//                               </Box>
//                               {card.separator && <Separator />}
//                             </React.Fragment>
//                           ))}
//                       </Column>
//                       <Separator />
//                     </React.Fragment>
//                   ))}
//               </Line>
//             </React.Fragment>
//           ))
//       )}
//     </Container>
//   );
// };
