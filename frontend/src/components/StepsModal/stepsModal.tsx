// import React, { useRef, useState, useContext, useEffect } from "react";
// import { AppContext } from "context";
// import { Button, Container, Form, Steps, Header, List } from "./style";
// import { Column, Line } from "packages";
// import Carousel from "react-elastic-carousel";
// import { VscClose } from "react-icons/vsc";
// import {
//   IStepsProps,
//   IErrorData,
//   IBypass,
//   IResultRefsSubmit,
// } from "./interfaces";
// import Input from "packages/ui/Input/input";

// export const StepsModal: React.FC<IStepsProps> = ({
//   bypass,
//   steps,
//   title,
//   onSubmit,
// }) => {
//   const [step, setStep] = useState<number>(0);
//   const [error, setError] = useState<Array<IErrorData>>([]);
//   const { actions, state } = useContext(AppContext.Context);
//   var carrousel = useRef<any>();

//   useEffect(() => {
//     let allData: Array<IErrorData> = [];
//     let titles: Array<IBypass> = [];
//     bypass?.map((item, index) => {
//       titles.push({
//         title: item.title,
//         index,
//       });
//     });

//     steps?.map((item, index) => {
//       item.inputs.map((input) => {
//         allData.push({
//           name: input.name,
//           state: false,
//           bypass: titles.find((t) => t.index === index),
//           message: "",
//         });
//         return false;
//       });
//       return false;
//     });
//     setError(allData);
//   }, [bypass, steps]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     let allDataRefs: Array<IResultRefsSubmit> = [];
//     let anyError: boolean = false;
//     let allData = [...error];
//     await steps?.map((item, index) => {
//       item.inputs.map((input) => {
//         if (!input.ref.current.value) {
//           if (input.required) {
//             allData.filter((t) =>
//               t.name === input.name
//                 ? Object.assign(t, {
//                     state: true,
//                     message: "Campo obrigatório",
//                   })
//                 : t
//             );
//             if (index === steps.length - 1) {
//               anyError = true;
//               // Verification if it is the last step of the step by step to take no action, therefore, preventing the carousel and parameterized data from taking other actions.
//               return false;
//             }
//             carrousel.current.goTo(Number(index));
//             setStep(index);
//             anyError = true;
//           }
//           return false;
//         } else {
//           if (
//             input.minLength &&
//             input.ref.current.value.length < input.minLength
//           ) {
//             allData.filter((t) =>
//               t.name === input.name
//                 ? Object.assign(t, {
//                     state: true,
//                     message: `Mínimo de caracteres é de: ${input.minLength}`,
//                   })
//                 : t
//             );
//             anyError = true;
//             carrousel.current.goTo(Number(index));
//             setStep(index);
//           }
//           return false;
//         }
//       });
//       return false;
//     });
//     steps?.map((item) =>
//       item.inputs.map((input) => {
//         allDataRefs.push({
//           fieldName: input.name,
//           value: input.ref.current.value,
//         });
//         return false;
//       })
//     );
//     setError(allData);
//     if (!anyError) {
//       onSubmit && onSubmit(allDataRefs);
//     }
//     return;
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     let allData = [...error];
//     allData.map((item) => {
//       if (item.name === event.target.name && item.state) {
//         Object.assign(item, { state: false });
//       }
//       return false;
//     });
//     setError(allData);
//   };

//   if (bypass && steps && title) {
//     return (
//       <Container
//         error={error.find((t) => t.state === true)}
//         disabled={step > 0 ? false : true}
//       >
//         <Header>
//           <VscClose
//             onClick={() =>
//               actions.overlayAction.setOptions({
//                 ...state.overlay.options,
//                 state: false,
//               })
//             }
//             size={22}
//           />
//         </Header>
//         <h3>{title}</h3>
//         <Steps>
//           {bypass.map((item, index) => (
//             <React.Fragment key={index}>
//               <List
//                 error={error.filter((t) => t.bypass?.title === item.title)}
//                 step={step}
//                 index={index}
//               >
//                 <span>{index + 1}</span>
//                 <label>{item.title}</label>
//               </List>
//               <List
//                 error={error.filter((t) => t.bypass?.title === item.title)}
//                 step={step}
//                 index={index}
//               >
//                 <div />
//               </List>
//             </React.Fragment>
//           ))}
//         </Steps>
//         <Form onSubmit={handleSubmit}>
//           <Carousel
//             ref={carrousel}
//             itemsToShow={1}
//             showArrows={false}
//             enableSwipe={false}
//             enableMouseSwipe={false}
//             pagination={false}
//           >
//             {steps &&
//               steps.map((item, index) => (
//                 <Line key={index} direction="column" width="100%">
//                   <Column>
//                     {item.inputs.map((inputs) => (
//                       <Input
//                         ref={inputs.ref}
//                         key={inputs.name}
//                         error={
//                           inputs.required
//                             ? error.find((t) => t.name === inputs.name)
//                             : undefined
//                         }
//                         onChange={handleChange}
//                         message={
//                           inputs.required ||
//                           inputs.maxLength ||
//                           inputs.minLength
//                             ? error.find((t) => t.name === inputs.name)?.message
//                             : "Campo Obrigatório"
//                         }
//                         name={inputs.name}
//                         title={inputs.title}
//                         type={inputs.type ? inputs.type : "text"}
//                         maxLength={inputs.maxLength}
//                       />
//                     ))}
//                   </Column>
//                 </Line>
//               ))}
//           </Carousel>
//           <Column width="100%">
//             <div className="containerButton">
//               <Button
//                 onClick={() => {
//                   if (step > steps.length - 1) {
//                     setStep((s) => s - 2);
//                     carrousel.current.goTo(Number(step - 2));
//                     return;
//                   }
//                   setStep((s) => s - 1);
//                   carrousel.current.goTo(Number(step - 1));
//                 }}
//                 disabled={step > 0 ? false : true}
//                 color="#cdcdcd"
//                 type="button"
//               >
//                 Voltar
//               </Button>
//               <Button
//                 onClick={() => {
//                   if (step < steps.length - 1) {
//                     setStep((s) => s + 1);
//                     carrousel.current.goTo(Number(step + 1));
//                   }
//                   if (step === steps.length - 1) {
//                     setStep((s) => s + 1);
//                   }
//                 }}
//                 type={step > steps.length - 1 ? "submit" : "button"}
//               >
//                 {step >= steps.length - 1 ? "Enviar" : "Próximo"}
//               </Button>
//             </div>
//           </Column>
//         </Form>
//       </Container>
//     );
//   }
//   return <></>;
// };
export {}