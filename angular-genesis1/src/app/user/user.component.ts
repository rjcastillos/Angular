import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

/* Function to return a random index based in the length's array
 */

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

/* To make dynamic text rendering from a Jason file add a property  in the component .ts file as below
 to the class ,and access it accordingly from the component .html file  
 */
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
}
