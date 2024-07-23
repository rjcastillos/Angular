import { Component, Input} from '@angular/core';


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
@Input() avatar!: string;
@Input() name!: string;

get imagePath() {
  return 'assets/users/' + this.avatar;
}

onSelectUser (){

}
}
