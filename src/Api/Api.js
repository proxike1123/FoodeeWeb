import RequestHelper from "./request.helper";
import { URL } from "./config";

export default class Api {
  static login({ username, password }) {
    return RequestHelper.post(URL + "admin/login", {
      username,
      password,
    });
  }
  //   static checkLogin() {
  //     return RequestHelper.get(URL + 'api/login-check');
  //   }
  //   static register({phone, username, email, password, confirm_password}) {
  //     return RequestHelper.post(URL + 'api/register', {
  //       phone,
  //       username,
  //       email,
  //       password,
  //       confirm_password,
  //     });
  //   }

  //   static sendCode({email}) {
  //     return RequestHelper.post(URL + 'api/password/recover', {email});
  //   }
  //   static checkCode({code_reset_password}) {
  //     return RequestHelper.post(URL + 'api/password/recover/checkcode', {
  //       code_reset_password,
  //     });
  //   }
  //   static resetPassword({new_password, re_password, email}) {
  //     return RequestHelper.put(URL + 'api/password/recover/reset', {
  //       new_password,
  //       re_password,
  //       email,
  //     });
  //   }
  //   static changePassword({new_password, re_password, current_password}) {
  //     return RequestHelper.put(URL + 'api/customer/password/change', {
  //       new_password,
  //       re_password,
  //       current_password,
  //     });
  //   }
  //   static adminReset({phone}) {
  //     return RequestHelper.put(URL + 'api/password/admin/reset', {
  //       phone,
  //     });
  //   }
  //   static homeInfo() {
  //     return RequestHelper.get(URL + 'api/informations', {});
  //   }
  //   static listServices() {
  //     return RequestHelper.get(URL + 'api/services', {});
  //   }
  //   static giftNews() {
  //     return RequestHelper.get(URL + 'api/news/1', {});
  //   }
  //   static getNews() {
  //     return RequestHelper.get(URL + 'api/news/4', {});
  //   }
  //   static getSaleNews() {
  //     return RequestHelper.get(URL + 'api/news/2', {});
  //   }
  //   static getServicesNews() {
  //     return RequestHelper.get(URL + 'api/news/3', {});
  //   }
  //   static getAgencies() {
  //     return RequestHelper.get(URL + 'api/agencies', {});
  //   }
  //   static getCustomerInfo({id}) {
  //     return RequestHelper.get(URL + `api/customers/${id}`, {});
  //   }
  //   static uploadAvatar({id, data, config}) {
  //     return RequestHelper.post(URL + `api/customers/${id}`, data, config);
  //   }
  //   static repairServices() {
  //     return RequestHelper.get(URL + 'api/repairs');
  //   }
  //   static getNotification() {
  //     return RequestHelper.get(URL + 'api/notifications');
  //   }
  //   static getPolicy() {
  //     return RequestHelper.get(URL + 'api/membership');
  //   }
  //   static getQrInfo() {
  //     return RequestHelper.get(URL + 'api/customer/qrcode');
  //   }
  //   static getGift(id) {
  //     return RequestHelper.get(URL + `api/customer/${id}/gift`);
  //   }
  //   static getProduct(data) {
  //     return RequestHelper.get(URL + 'api/products', data);
  //   }
  //   static getCategories() {
  //     return RequestHelper.get(URL + 'api/categories');
  //   }
  //   static getFilterInfo() {
  //     return RequestHelper.get(URL + 'api/filterinfo');
  //   }
  //   static getHistoryServices() {
  //     return RequestHelper.get(URL + 'api/customer/service/history/list');
  //   }
  //   static getServicesDetail({stt_rec, date}) {
  //     return RequestHelper.get(URL + 'api/customer/service/history', {
  //       stt_rec,
  //       date,
  //     });
  //   }
  //   static filterSetvices({serviceType, dateFrom, dateTo}) {
  //     return RequestHelper.get(URL + 'api/customer/service/history/filter', {
  //       serviceType,
  //       dateFrom,
  //       dateTo,
  //     });
  //   }
  //   static productInfo({id}) {
  //     return RequestHelper.get(URL + `api/product/${id}`);
  //   }
}
