// TODO
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false,
            hovered: false
        };
    }
    onListItemClick() {
        this.setState({
            done: !this.state.done,
        });
    }
    onMouseOver() {
        this.setState({
            hovered: !this.state.hovered
        });
    }

    onMouseOut() {
        this.setState({
            hovered: !this.state.hovered
        });
    }

    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
            fontWeight: this.state.hovered ? 'bold' : 'normal'
        };

        return (
            <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>{this.props.todo}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul>
        {props.todos.map(todo => 
            <GroceryListItem todo={todo} />
        )}
    </ul>
);

ReactDOM.render(<GroceryList todos={['Cucumber', 'Kale', 'Bananas', 'Pickles', 'Cheese']}/>, document.getElementById("app"));