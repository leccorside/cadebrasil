import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WpserviceService {

  postlink = "http://localhost/projetos/classificados/wp-json/wp/v2/ad_post";
  postcat = "";

  constructor() { }
}
