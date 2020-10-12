import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // @Input() todo:Todo;

  userEntry ="";
  alldone = 0;
  

  todoList: Todo[] =[
    {title: 'Eat Breakfast', complete: false},
    {title: 'Eat Lunch', complete: false},
    {title: 'Eat Dinner', complete:false}
  ]


  completeTask(todo:Todo){
    console.log(`${todo.title}Completed`);
    todo.complete = !todo.complete;
    console.log(`${todo.complete}`);
     if (todo.complete){
       this.alldone++;
        console.log(`tasks done ${this.alldone} total tasks:${this.todoList.length}`);
     }
     else {
       this.alldone--;
        console.log(`tasks done ${this.alldone} total tasks:${this.todoList.length}`);
     }
    
  }

  Delete(todo:Todo){
    this.todoList = this.todoList.filter(t => t.title !== todo.title);
    console.log(`Deleted ${todo.title}`);
  }

  addTask(){
    this.todoList.push( {title: this.userEntry, complete: false });
    console.log('task added')
  }


}



interface Todo {
  title: String,
  complete: boolean

}