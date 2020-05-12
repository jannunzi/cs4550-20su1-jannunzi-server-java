(function () {
  let users = [
    {username: 'alice', password: 'alice', first: 'Alice', last: 'Wonderland', role: 'FACULTY'},
    {username: 'bob', password: 'bob', first: 'Bob', last: 'Marley', role: 'FACULTY'},
    {username: 'charlie', password: 'charlie', first: 'Charlie', last: 'Garcia', role: 'STUDENT'}
  ]
  let $tbody, $addBtn
  let $usernameFld, $passwordFld, $firstFld, $lastFld, $roleFld

  function renderAllUsers() {
    console.log('rendering all users')
    console.log(users)
    const template = $('.wbdv-user-row-template')[0]
    const $template = $(template)
    const clone = $template.clone()
    console.log($template)
    $tbody.empty()
    for(let i=0; i<users.length; i++) {
      const user = users[i]
      console.log(user)
      const copy = clone.clone()
      // copy.removeClass('wbdv-user-row-template')
      copy.find('.wbdv-username').html(user.username)
      copy.find('.wbdv-first-name').html(user.first)
      copy.find('.wbdv-last-name').html(user.last)
      copy.find('.wbdv-role').html(user.role)
      $tbody.append(copy)
    }
  }
  
  function createUser() {
    const username = $usernameFld.val()
    const first = $firstFld.val()

    console.log(username, first)
    const newUser = {
      username: username,
      first: first
    }

    users.push(newUser)
    renderAllUsers()
  }

  function main() {
    $tbody = $('tbody')
    $addBtn = $('.wbdv-add-btn')
    $addBtn.css('backgroundColor', 'yellow')

    $addBtn.click(createUser)

    $usernameFld = $('.wbdv-username-fld')
    $passwordFld = $('.wbdv-password-fld')
    $firstFld = $('.wbdv-first-fld')
    $lastFld = $('.wbdv-last-fld')
    $roleFld = $('.wbdv-role-fld')

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

    renderAllUsers()
  }

  jQuery(main)

})()
