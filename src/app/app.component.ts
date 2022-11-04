import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

interface InputObject {
  id: bigint;
  input: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JustATest';

  loadedPosts: InputObject[] = [];

  constructor(private httpClient: HttpClient,
              private formBuilder: FormBuilder) {
  }

  input = new FormControl('', Validators.required);

  inputForm = this.formBuilder.group({
    input: this.input
  })

  onClick() {
    let url = environment.backendUrl + "/saveInput";

    return this.httpClient.post<any>(url,this.input.value).subscribe(res => {
      console.log(res);
    }, err => {
    })
  }

  onClick2(){
    let url = environment.backendUrl + "/fetchInput";

    return this.httpClient.get<InputObject[]>(url).subscribe(res =>{
      this.loadedPosts = res;
    })
  }


}
