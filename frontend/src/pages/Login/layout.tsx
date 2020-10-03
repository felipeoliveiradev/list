import { Box, Button, Column, Container, Form, Line, Spacer, Text } from "packages";

import { ETextType } from "packages/ui/Text/interfaces";
import { LoginController } from "./core/controller";

export const layout = (props: any) => {
  const controller = new LoginController();
  const { state, history } = props;
  return {
    children: Container({
      child: [
        Line({
          child: [
            Column({
              props: {
                style: {backgroundColor: "#2b2e43"},
                centered: "all",
              },
              child: [
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
              ]
            }),
            Column({
              props: {
                  size: "medium",
                  centered: "all",
                  style: {backgroundColor: "#2f3247"}
              },
              child: [
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
                  child: [
                    Container({
                      child: [
                        Button({
                          text: "Logar",
                          props: {
                            model: state.errorState.error && "error",
                            type: "submit"
                          }
                        }),
                        Spacer({}),
                        Button({
                          text: "Cadastrar",
                          props: {
                            model: "dark",
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
                      maxWidth: 300,
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
              ]
            })
          ]
        }),
      ]
    })
  }
};
