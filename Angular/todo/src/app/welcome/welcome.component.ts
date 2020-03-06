import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name:string = "";
  messageFromService:string;
  errorMessage:string;

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  showWelcomeMessage(){
    this.service.executeHelloWorldBeanService(this.name).subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorMessage(error)
    );
  }

  handleResponse(response){
    this.messageFromService = response.message;
  }

  handleErrorMessage(error){
    this.errorMessage = error;
  }
}
