import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {
  private config = {
    showSlider: false,
    name: "",
    username: ""
  }

  constructor() {

  }

  getConfigData(): any {
    return localStorage.getItem("config");
  }

  setConfigData(showSlider?: boolean, name?: string, username?: string) {
    let config = {
      showSlider: false,
      name: "",
      username: ""
    };

    if(showSlider){
      config.showSlider = showSlider;
    }

    if(name){
      config.name = name;
    }

    if(username){
      config.username = username;
    }

    localStorage.setItem("config", JSON.stringify(config));

  }
}
