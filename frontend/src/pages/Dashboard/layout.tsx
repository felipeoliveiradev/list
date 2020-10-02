import "./styles.scss"

import { Box, Button, Column, Container, Form, Line, List, Spacer, Table, Tags, Text } from "packages";

import { ETextType } from "packages/ui/Text/interfaces";

export const layout = () => {
  return {
    children: Container({
      child: [
        Line({
          child: [
            Column({
              props: {
                size: "small",
              },
              child: [
                Spacer({ height: "0.4rem" }),
                Tags({
                  items: [
                    {
                      title: "admin"
                    }
                  ]
                }),
                Spacer({ height: "0.2rem" }),
                Text({ text: "Admin", type: ETextType.h1, style: { fontWeight: 600, fontSize: "3rem" } }),
                Text({ text: "System", type: ETextType.h2, style: { fontWeight: 600, fontSize: "3rem" } }),
                Spacer({ height: "2rem" }),
                List({
                  items: [
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
                  ]
                })
              ]
            }),
            Column({
              props: {
                backgroundColor: "#2b2e43"
              },
              child: [
                Spacer({ height: "2rem" }),
                Box({
                  child: [
                    Form({
                      props: {
                        className: "form"
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
                      ],
                      child: [
                        Line({
                          child: [
                            Container({
                              props: {
                                className: "container"
                              },
                              child: [
                                Button({
                                  text: "Buscar",
                                  props: {
                                    size: "small"
                                  }
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ],
                }),
                Box({
                  child: [
                    Table({
                      title: "Order Service",
                      columns: ["Name", "Company", "City", "State"],
                      data: [
                        ["Joe James", "Test Corp", "Yonkers", "NY"],
                        ["John Walsh", "Test Corp", "Hartford", "CT"],
                        ["Bob Herm", "Test Corp", "Tampa", "FL"],
                        ["James Houston", "Test Corp", "Dallas", "TX"],
                      ]
                    })
                  ],
                }),
              ],
            })
          ]
        }),
      ]
    })
  }
};
