class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>Tarefas</h3>
          <TodoList items={this.state.items} handleRemoveItem={this.handleRemoveItem} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              O que precisa ser feito?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Adicionar #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleRemoveItem(e) {
      e.preventDefault();
      let itemsFiltered = this.state.items.filter(function(value){
        return value.id != e.target.id
      });
      this.setState({ items: itemsFiltered });
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { items: [], text: '' };
    }
   
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
          <div>
             <li id={item.id} key={item.id}>{item.text}</li>
             <button id={item.id} onClick={this.props.handleRemoveItem}>"x"</button>
          </div>
          ))}
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('todos-example')
  );