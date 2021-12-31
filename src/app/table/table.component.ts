import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public userArray: any =[];
  constructor(private http: HttpClient){
    this.http.get('./assets/frameworks.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.userArray.push(row.toString().trim());
            }
            console.log(this.userArray);
        },
        error => {
            console.log(error);
        }
    );
  }

  ngOnInit() {
  }

}