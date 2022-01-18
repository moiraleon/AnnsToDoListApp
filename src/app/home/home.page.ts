import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
 
  taskName: any = ''; // Entered Text
  taskList = []; // Array to store tasks
  completedTasks = []; //array to store completed tasks
   
  constructor() {}

  addTask() {
  if (this.taskName.length > 0) {
  let task = this.taskName;
  this.taskList.push(task);
  console.log(task);//for testing
  this.taskName = '';
  }
  }

//not actually storing information in an array or consoling completedTasks array
markTaskCompleted(index) {
  let task = this.taskName;
  this.completedTasks.push(task);
  console.log((this.completedTasks[0]).toString); //for testing
  this.taskList.splice(index, 1);
}

deleteTask(index) {
  this.taskList.splice(index, 1);
  }

}

