(function () {
  let users = [
    {username: 'alice', password: 'alice', first: 'Alice', last: 'Wonderland', role: 'FACULTY'},
    {username: 'bob', password: 'bob', first: 'Bob', last: 'Marley', role: 'FACULTY'},
    {username: 'charlie', password: 'charlie', first: 'Charlie', last: 'Garcia', role: 'STUDENT'}
  ]
  let $tbody, $addBtn, $updateBtn
  let $usernameFld, $passwordFld, $firstFld, $lastFld, $roleFld
  let service = new AdminUserServiceClient()
  let selectedUser = {}

  function deleteUser(event) {
    console.log(event)
    const target = event.currentTarget
    const $button = $(target)
    const userId = $button.attr('id')
    // alert('delete user ' + userId)
    service.deleteUser(userId)
      .then(function() {
        users = users.filter(function(user) {
          return user._id !== userId
        })
        renderAllUsers()
      })
  }

  function renderUser(user) {
    selectedUser = user
    $usernameFld.val(user.username)
    $firstFld.val(user.first)
    $lastFld.val(user.last)
  }
  
  function updateUser() {
    const updatedUser = {
      _id: selectedUser._id,
      username: $usernameFld.val(),
      first: $firstFld.val(),
      last: $lastFld.val()
    }
    service.updateUser(selectedUser._id, updatedUser)
      .then(function(status) {
        users = users.map(function(user) {
          if(user._id === selectedUser._id) {
            return updatedUser
          } else {
            return user
          }
        })
      })
  }

  function selectUser(event) {
    const target = event.currentTarget
    const $button = $(target)
    const userId = $button.attr('id')
    service.findUserById(userId)
      .then(function (user) {
        console.log(user)
        renderUser(user)
      })
  }

  function renderAllUsers() {
    // console.log('rendering all users')
    // console.log(users)
    const template = $('.wbdv-user-row-template')[0]
    const $template = $(template)
    const clone = $template.clone()
    // console.log($template)
    $tbody.empty()
    for(let i=0; i<users.length; i++) {
      const user = users[i]
      // console.log(user)
      const copy = clone.clone()
      // copy.removeClass('wbdv-user-row-template')
      copy.find('.wbdv-username').html(user.username)
      copy.find('.wbdv-first-name').html(user.first)
      copy.find('.wbdv-last-name').html(user.last)
      copy.find('.wbdv-role').html(user.role)
      copy.find('.wbdv-delete')
        .attr('id', user._id)
        .click(deleteUser)
      copy.find('.wbdv-edit')
        .attr('id', user._id)
        .click(selectUser)
      $tbody.append(copy)
    }
  }
  
  function createUser() {
    const username = $usernameFld.val()
    const first = $firstFld.val()
    const last = $lastFld.val()

    const newUser = {
      username: username,
      first: first,
      last: last
    }

    service.createUser(newUser)
      .then(function (actualUser) {
        users.push(actualUser)
        renderAllUsers()
      })
  }
  
  function findAllUsers() {
    service.findAllUsers()
      .then(function (allUsers) {
        users = allUsers
        renderAllUsers()
      })
  }

  function main() {
    $tbody = $('tbody')
    $addBtn = $('.wbdv-add-btn')
    $addBtn.css('backgroundColor', 'yellow')

    $addBtn.click(createUser)
    $updateBtn.click(updateUser)

    $usernameFld = $('.wbdv-username-fld')
    $passwordFld = $('.wbdv-password-fld')
    $firstFld = $('.wbdv-first-fld')
    $lastFld = $('.wbdv-last-fld')
    $roleFld = $('.wbdv-role-fld')

    findAllUsers()
    
    // fetch all  H1s elements from HTML document
    const h1 = jQuery('h1')
    h1.css('color', 'red')

    const tr = jQuery('tr')
    tr.css('backgroundColor', 'blue')
      .css('color', 'white')

    const h2 = jQuery('<h2>Hello from jQuery</h2>')
    const body = jQuery('body')
    body.append(h2)

    const newTr = $('<tr><td>dan</td></tr>')
    $tbody.append(newTr)

    for(let i=0; i<users.length; i++) {
      const username = users[i].username
      const newUserRow = $('<tr><td>'+username+'</td></tr>')
      $tbody.append(newUserRow)
    }

    // renderAllUsers()
  }

  jQuery(main)

})()
