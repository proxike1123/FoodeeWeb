import axios from "axios";
// import {Alert} from 'react-native';
// import {EventRegister} from '.';
// import {event} from '../constants/event';
//import {getToken} from '../stores';

const instance = axios.create({
  timeout: 30000,
  validateStatus: false,
});

const handleForceLogout = async (data) => {
  // if (data.data.message && data.data.message == 'Unauthenticated.') {
  //   const token = await getToken();
  //   if (token) {
  //     EventRegister.emit(event.forceLogout);
  //   }
  // }
};

export default class RequestHelper {
  static async getHeader(config = {}) {
    //const token = await getToken();
    return {
      "Content-Type": "application/json",
      //Authorization: token && `Bearer ${token}`,
      ...config,
    };
  }

  static async get(url, params) {
    const header = await this.getHeader();
    console.log(url);
    return instance
      .get(url, {
        headers: header,
        params: params,
        mode: "cors",
      })
      .then((data) => {
        //handleForceLogout(data);
        return data.data;
      })
      .catch((e) => {
        throw e;
      });
  }

  static async post(url, data, config, isLogin) {
    console.log(url);
    return instance({
      method: "POST",
      url: url,
      headers: await this.getHeader(config),
      data: data,
      mode: "cors",
    })
      .then((data) => {
        handleForceLogout(data);
        return data.data;
      })
      .catch((e) => {
        throw e;
      });
  }

  static async put(apiUrl, data, config) {
    console.log(apiUrl);
    return instance({
      method: "PUT",
      url: apiUrl,
      headers: await this.getHeader(config),
      data: data,
      mode: "cors",
    })
      .then((data) => {
        //handleForceLogout(data);
        return data.data;
      })
      .catch((e) => {
        throw e;
      });
  }

  static async delete(apiUrl, data) {
    console.log(apiUrl);
    return instance({
      method: "DELETE",
      url: apiUrl,
      headers: await this.getHeader(),
      data: data,
      mode: "cors",
    })
      .then((data) => {
        //handleForceLogout(data);
        return data.data;
      })
      .catch((e) => {
        throw e;
      });
  }
}
