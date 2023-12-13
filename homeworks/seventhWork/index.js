import {} from './round.js';
import {} from './markerAndRefilableMarker.js';

class User {
  constructor (options) {
    this.name = options.name;
    this.role = options.role;
  }
  getName() {
    console.log(this.name);
  }
  getRole() {
    if(this.role === 'admin' || this.role === 'user') {
      console.log(this.role);
    } else {
      alert('U write wrong role');
    }

  }
  login() {
    console.log('login');
  }
}

const user1 = new User({
  name: "Petro",
  role: "admin",
})
const user2 = new User({
  name: "Mike",
  role: "user",
})
const user3 = new User({
  name: "ALla",
  role: "user",
})

class Admin extends User {
  // constructor (options){
  //   this.addUser = options.addUser;
  //   this.removeUser = options.removeUser;
  //   this.changeUserRole = options.changeUserRole;
  //   this.getAllUsers = options.getAllUsers;
  //   this.removeAllUsers = options.removeAllUsers;
  // }
  addUser() {
    console.log("addUser");
  }
  removeUser() {
    console.log("removeUser");
  }
  changeUserRole() {
    console.log("changeUserRole");
  }
}

const admin = new Admin({

})

// console.log(user)
// console.log(admin)
user1.getName();
user2.getName();
user3.getName();
user.getRole();
admin.addUser();
user.addUser();