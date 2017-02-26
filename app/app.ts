//our root app component
import {Component} from '@angular/core'

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {Ng2DragDropModule} from "ng2-drag-drop";

@Component({
  selector: 'my-app',
  template: `


    <div class="row">

    <div class="col-sm-4 col-xs-4">
        <div class="panel panel-primary">
            <div class="panel-heading">Drag Items from here</div>
            <div class="panel-body scroll-list">
                
                <ul class="list-group">
                    <li draggable *ngFor="let item of vegetables"
                        [dragOverClass]="'drag-over-border'"
                        [dragData]="item" class="list-group-item" 
                        [dragScope]="item.type">
                        {{item.name}} 
                    </li>
                </ul>

                <ul class="list-group">
                    <p class="text-justify">The following items can only be dragged by their handle.</p>
                    <li draggable *ngFor="let item of fruits"
                        [dragOverClass]="'drag-over-border'"
                        [dragData]="item" class="list-group-item" 
                        [dragScope]="item.type"
                        [dragHandle]="'.drag-handle'">
                        {{item.name}}
                        <div class="pull-right"><i class="drag-handle fa fa-bars fa-lg" aria-hidden="true"></i></div> 
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="col-sm-4 col-xs-4">
        <div class="panel panel-info" droppable  [dragOverClass]="'drag-target-border'" [dropScope]="'fruit'"
             (onDrop)="onFruitDrop($event)">
            <div class="panel-heading">Drop Fruits here</div>
            <div class="panel-body scroll-list">
                <li *ngFor="let item of droppedFruits" class="list-group-item">{{item.name}}</li>
            </div>
        </div>
    </div>


    <div class="col-sm-4 col-xs-4">
        <div class="panel panel-success" droppable [dragOverClass]="'drag-target-border-green'" [dropScope]="'vegetable'"
             (onDrop)="onVegetableDrop($event)">
            <div class="panel-heading">Drop Vegetables here</div>
            <div class="panel-body scroll-list">
                <li *ngFor="let item of droppedVegetables" class="list-group-item">{{item.name}}</li>
            </div>
        </div>
    </div>
    
</div>
  `,
  styles: [`
    div.scroll-list {
      overflow: auto;
      max-height: 70vh;
    }
    
    .drag-over-border {
      border: #ff525b dashed 2px;
    }
    
    .drag-target-border {
       border: #00bfff dashed 2px;
    }

    .drag-target-border-green {
       border: #3c763d dashed 2px;
    }

    .drag-handle {
        cursor: move;
    }
   `
    ]
})
export class App {
  vegetables = [
        { name: "Carrot", type: "vegetable" },
        { name: "Onion", type: "vegetable" },
        { name: "Potato", type: "vegetable" },
        { name: "Capsicum", type: "vegetable" }];

    fruits = [
        { name: "Apple", type: "fruit" },
        { name: "Orange", type: "fruit" },
        { name: "Mango", type: "fruit" },
        { name: "Banana", type: "fruit" },
        { name: "Pear", type: "fruit" }];

    droppedFruits = [];
    droppedVegetables = [];

    onFruitDrop(e: any) {
        this.droppedFruits.push(e.dragData);
        this.removeItem(e.dragData, this.fruits);
    }

    onVegetableDrop(e: any) {
        this.droppedVegetables.push(e.dragData);
        this.removeItem(e.dragData, this.vegetables);
    }

    removeItem(item: any, list: Array<any>) {
        let index = list.map((e) => {
            return e.name
        }).indexOf(item.name);
        list.splice(index, 1);
    }
}

@NgModule({
  imports: [ BrowserModule, Ng2DragDropModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {
  
}