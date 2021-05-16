import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector : 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    cropWidth : number = 75
    
    //This a input property which will receieve input from it's container. This is the way to pass the data to Nested component.
    @Input() rating : number = 0;

    //Emitting an event to pass data back to the container.In this case even will pass an string to the container throught the event
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void {
        this.cropWidth = this.rating * 75/4
    }

    //This method will be called on click of rating stars and then it will emit a event with string data to the container.
    onClick() : void {
        this.ratingClicked.emit(`The rating of the product is ${this.rating}.`);
    }

}