import { ICallApi, ICallApiExtenal } from "./interfaces";
import axios, { AxiosResponse } from "axios";

// http://172.31.3.249:7002
export const callApi = <T extends object>(props: ICallApi<T>) => {
  const { method, path, header, data, url } = props;
  return fetch(
    `${url || "http://165.227.201.192:81"}/${path}`,
    header
      ? {
          body: data,
          headers: header
            ? {
                Authorization: `Basic ${localStorage.getItem("user")}`
              }
            : {
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${localStorage.getItem("user")}`,
                "Accept-Encoding": "gzip, deflate",
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "Access-Control-Allow-Origin": "*"
              },
          method
        }
      : {
          body: data,
          method
        }
  )
    .then(async (res) => {
      if (
        res.status === 201 ||
        res.status === 203 ||
        res.status === 301 ||
        res.status === 204 ||
        res.status === 304
      ) {
        return res.text().then((text) => {
          return text ? JSON.parse(text) : {};
        });
      }
      if (res.status === 204) {
        return res;
      }

      return res.text().then((text) => {
        throw text ? JSON.parse(text) : {};
      });
    })
    .catch((err) => {
      return err;
    });
};

export const callApiExtenal = (
  props: ICallApiExtenal
): Promise<AxiosResponse<any> | undefined> => {
  const { data, method, url, path } = props;
  const header: any = {
    Accept: "*/*",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`
  };

  return axios({
    data,
    headers: header,
    method,
    url: `${url || "https://alltracking.app/api"}/${path}`
  })
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
    })
    .catch((err) => {
      if (err.request) {
        throw JSON.parse(err.request.response);
      } else {
        throw err;
      }

    });
};
