function AdminUserServiceClient() {
  this.createUser = createUser;
  this.findAllUsers = findAllUsers;
  this.findUserById = findUserById;
  this.deleteUser = deleteUser;
  this.updateUser = updateUser;
  // replace jannunzi with your own unique identifier ... do not use jannunzi
  this.url = 'https://wbdv-generic-server.herokuapp.com/api/jannunzi/users';
  var self = this;
  function createUser(user) {
    console.log('creating user')
    console.log(user)
    const userString = JSON.stringify(user)
    console.log(userString)

    return fetch(self.url, {
      method: 'POST',
      body: userString,
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function(response) {
        return response.json()
      })


  }
  function findAllUsers() {
    return fetch(self.url)
      .then(function(response) {
        return response.json()
    })
  }
  function findUserById(userId) {
    return fetch(self.url + '/' + userId)
      .then(function(response) {
        return response.json()
      })
  }
  function updateUser(userId, user) {
    return fetch(self.url + '/' + userId, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function(response) {
        return response.json()
      })
  }
  function deleteUser(userId) {
    console.log('removing user: ' + userId)
    return fetch(self.url + '/' + userId, {
      method: 'DELETE'
    })
      .then(function(response) {
        return response.json()
      })
  }
}
