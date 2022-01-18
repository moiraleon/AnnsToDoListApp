import { Component } from '@angular/core';
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

openModalButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})    

closeModalButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    const modal = button.closest
    closeModal(modal)
  })
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
 
   openModal(modal) {
    if (modal == null) return 
     modal.classList.add('active')
    overlay.classList.add('active') 
   }

   closeModal(modal) { 
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active') 
    }
    


//not actually storing information in an array or consoling completedTasks array
// markTaskCompleted(index) {
//   let task = this.taskName;
//   this.completedTasks.push(task);
//   console.log((this.completedTasks[0]).toString); //for testing
//   this.taskList.splice(index, 1);
// }

// deleteTask(index) {
//   this.taskList.splice(index, 1);
//   }

}

