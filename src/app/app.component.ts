import { Component, OnInit } from '@angular/core';
import { CatService, Cat } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  providers: [CatService],
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  Records: Array<Cat>;

  title = 'AngularTest - xx';  
  constructor(private apiService: CatService) { }

  ngOnInit() {
    this.apiService.getAllCats().subscribe(data => {
      this.Records = data;
    });
  }
}
