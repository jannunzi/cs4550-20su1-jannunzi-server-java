

class List extends React.Component {
  state = {
    items: [
      {id: '123', title: 'Title 1'},
      {id: '234', title: 'Title 2'},
      {id: '345', title: 'Title 3'},
    ]
  }

  render() {
    return(
      <ul>
        {
          this.state.items.map(item =>
            <li key={item.id}>
              {item.title}
            </li>
          )
        }
      </ul>
    )
  }
}

ReactDOM.render(<List/>, document.getElementById('list'))
