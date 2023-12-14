class User {
  constructor(options) {
    this.name = options.name;
    this.role = options.role;
  }
  getName() {
    console.log(this.name);
  }
  getRole() {
    if (this.role === 'admin' || this.role === 'user') {
      console.log(this.role);
    } else {
      alert('U write wrong role');
    }
  }
  login() {
    console.log('login');
  }
  logout() {
    console.log('logout');
  }
  сhangeName() {
    console.log('сhangeName');
  }
  changePassword() {
    console.log('changePassword');
  }
}

const user = new User({
  name: 'Petro',
  role: 'admin',
});

class Admin extends User {
  addUser() {
    console.log('addUser');
  }
  removeUser() {
    console.log('removeUser');
  }
  changeUserRole() {
    console.log('changeUserRole');
  }
  getAllUsers() {
    console.log('getAllUsers');
  }
  removeAllUsers() {
    console.log('removeAllUsers');
  }
}

const admin = new Admin({});

console.log(user);
console.log(admin);
user.getName();
admin.addUser();
admin.removeAllUsers();
