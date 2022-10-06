import * as CryptoJS from 'crypto-js';
import fetchIntercept from 'fetch-intercept';

fetchIntercept.register({
  request: function(url, config) {
    // Modify the url or config here
    config.headers.name="Aravindh"
    console.log(config);
    return [url, config];
  },

  requestError: function(error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function(response) {
    // Modify the reponse object
    return response;
  },

  responseError: function(error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});

class ConfigClass {
  apiUrl = process.env.REACT_APP_ENDPOINT;
  

  async PostFetch(url, filter) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter)
    };
    return await fetch(`${this.apiUrl}${url}`, requestOptions).then((response) => response.json()).then((data) => {
      return data;
    });
  }

  encrypt(value) {
    return CryptoJS.AES.encrypt(value, CryptoJS.enc.Hex.parse(process.env.REACT_APP_PUBLIC_KEY), { iv: CryptoJS.enc.Hex.parse(process.env.REACT_APP_PUBLIC_IV) }).toString();
  }

  decrypt(textToDecrypt) {
    return CryptoJS.AES.decrypt(textToDecrypt, CryptoJS.enc.Hex.parse(process.env.REACT_APP_PUBLIC_KEY), { iv: CryptoJS.enc.Hex.parse(process.env.REACT_APP_PUBLIC_IV) }).toString(CryptoJS.enc.Utf8);
  }
}
const Config = new ConfigClass();
export default Config;