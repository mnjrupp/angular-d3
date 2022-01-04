import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AppGlobals} from '../app.global';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public csvArray: any =[];
  constructor(private http: HttpClient){
    this.http.get('./assets/frameworks.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 0; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.csvArray.push(row.toString().trim());
            }
            console.log(this.csvArray);
            //AppGlobals.csvData=this.csvArray;
        },
        error => {
            console.log(error);
        }
    );
  }

  ngOnInit() {
  }

}