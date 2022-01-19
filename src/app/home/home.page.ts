import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
 
  taskName: any = ''; // Entered Text
  taskList = []; // Array to store tasks
  // completedTasks = []; //array to store completed tasks
  
   
  constructor(public actionSheetController: ActionSheetController) {}


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  // addTask() {
  // if (this.taskName.length > 0) {
  // let task = this.taskName;
  // this.taskList.push(task);
  // console.log(task);//for testing
  // this.taskName = '';
  // }
  // }
 

    


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

