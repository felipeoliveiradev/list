import { Box, Button, Column, Container, Form, Line, Spacer, Text } from "packages";

import { ETextType } from "packages/ui/Text/interfaces";
import { LoginController } from "../core/controller";

export const config = (props: any) => {
  const controller = new LoginController();
  const { state, history } = props;
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
                Text({
                  text: "Seja Bem Vindos",
                  type: ETextType.h1,
                  style: { fontWeight: 600, padding: 0, margin: 0 }
                }),
                Spacer({height: "0.5rem"}),
                Text({
                  text: "Esse sistema foi feto para agilizar o seu trabalho",
                  type: ETextType.h2,
                  style: { fontWeight: 100, padding: 0, margin: 0 }
                })
              ],
              style: { backgroundColor: "#2b2e43", display: "flex", justifyContent: "center", paddingLeft: "10%" }
            }),
            Column({
              content: [
                Form({
                  inputs: [
                    {
                      title: "username",
                      name: "username",
                      placeholder: "admin",
                      type: "text",
                      onChange: () => {
                        if (state.errorState?.error) {
                          state.errorState?.setError(false)
                        }
                      },
                      style: { padding: 0 },
                      error: state.errorState?.error,
                    },
                    {
                      title: "password",
                      name: "password",
                      placeholder: "***********",
                      type: "password",
                      onChange: () => {
                        if (state.errorState?.error) {
                          state.errorState?.setError(false)
                        }
                      },
                      error: state.errorState?.error,
                    }
                  ],
                  content: [
                    Container({
                      child: [
                        Button({
                          text: "Logar",
                          props: {
                            type: "submit",
                            style: {
                              backgroundColor: state.errorState?.error ? "red" : "#02c567",
                              color: "#fff",
                              fontWeight: 300,
                              display: "flex",
                              justifyContent: "center",
                              borderRadius: "5px",
                              padding: 10,
                              marginBottom: 10,
                              cursor: "pointer"
                            },
                          }
                        }),
                        Spacer({}),
                        Button({
                          text: "Cadastrar",
                          props: {
                            style: {
                              backgroundColor: "#2b2e43",
                              color: "#7e808d",
                              fontWeight: 300,
                              display: "flex",
                              justifyContent: "center",
                              borderRadius: "5px",
                              padding: 10,
                              marginBottom: 10,
                              cursor: "pointer"
                            },
                            onClick: () => {
                            }
                          }
                        })
                      ],
                      style: { flex: 1, maxHeight: 50 }
                    })
                  ],
                  props: {
                    style: {
                      display: "flex",
                      flex: 1,
                      maxWidth: 300,
                      maxHeight: 300,
                      padding: "1rem",
                      flexDirection: "column",
                      justifyContent: "center"
                    },
                    onSubmit: async (e: any) => {
                      e.preventDefault();
                      console.log(state.errorState.error)
                      const values = {
                        username: e.target[0].value,
                        password: e.target[1].value,
                      }
                      await controller.login(state, values, history)
                    },
                  }
                })
              ],
              style: {
                maxWidth: 500,
                backgroundColor: "#2f3247",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }
            })
          ]
        }),
      ]
    })
  }
};
