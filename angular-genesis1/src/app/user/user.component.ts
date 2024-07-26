import { Component, Input, Output, EventEmitter} from '@angular/core';


/* Function to return a random index based in the length's array
 */


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
//@Input({ required:true}) id!: string;
//@Input({required:true}) avatar!: string;
//@Input({required:true}) name!: string;
//
// The three statement above can be replace by the following object
// chamging the inoking from 
//  this.avatar to this.user.avatar
//
//
@Input({required: true}) user!: {
  id: string;
  avatar: string;
  name: string;
};
@Output() select = new EventEmitter<string>();

get imagePath() {
  return 'assets/users/' + this.user.avatar;
}

onSelectUser (){
  this.select.emit(this.user.id);
}
}
