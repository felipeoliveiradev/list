import { Box, Button, Column, Container, Form, Hr, Line, List, Spacer, Tags, Text } from "packages";

import { ETextType } from "packages/ui/Text/interfaces";
import { useHistory } from "react-router-dom";

export const config = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let history = useHistory();
  return {
    children: Container({
      style: {
        backgroundColor: "#000",
        color: "#fff",
        fontWeight: 100
      },
      child: [
        Line({
          content: [
            Column({
              content: [
                Tags({items: [
                  {
                    title: "admin"
                  }
                ]}),
                Spacer({ height: "0.2rem"}),
                Text({text: "Admin", type: ETextType.h1, style:{fontWeight: 600, fontSize: "3rem"}}),
                Text({text: "System", type: ETextType.h2, style:{fontWeight: 600, fontSize: "3rem"}}),
                Spacer({ height: "2rem"}),
                List({items: [
                  {
                    icon: "",
                    title: "NOME",
                    subtitle: "Felipe"
                  },
                  {
                    icon: "",
                    title: "SOBRENOME",
                    subtitle: "Oliveira"
                  },
                  {
                    icon: "",
                    title: "USUARIO",
                    subtitle: "admin"
                  },
                  {
                    icon: "",
                    title: "EMAIL",
                    subtitle: "admin@admin.com"
                  },
                  {
                    icon: "",
                    title: "CELULAR",
                    subtitle: "(11) 9 8128-2919"
                  },
                ]})
              ],
              style: {
                maxWidth: 300,
                backgroundColor: "#2b2e43",
                color: "#000",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                paddingTop: "1rem",
                paddingLeft: "3rem"
              }
            }),
            Column({
              content: [
                Spacer({height: "2rem"}),
                Box({
                  child: [
                    Form({
                      props: {
                        style:{
                        display: "flex"
                        }
                      },
                      inputs: [
                      {
                        name: "teste",
                        type: "date",
                        title: "Start Date"
                      },
                      {
                        name: "teste",
                        type: "date",
                        title: "End Date"
                      },
                      {
                        name: "teste",
                        type: "text",
                        title: "Client Name"
                      },
                      {
                        name: "teste",
                        type: "text",
                        title: "Phone"
                      },
                      {
                        name: "teste",
                        type: "text",
                        title: "E-mail"
                      },
                    ]})
                  ],
                  style:{
                    flex: "unset"
                  }
                }),
                Box({
                  child: [
                    Text({
                      text: "Seja Bem Vindos",
                      type: ETextType.h1,
                      style: { fontWeight: 600, padding: 0, margin: 0 }
                    })
                  ],
                  style:{
                    flex: "unset"
                  }
                }),
              ],
              style: { backgroundColor: "#2b2e43" }
            })
          ]
        }),
      ]
    })
  }
};
