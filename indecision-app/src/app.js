class IndecisionApp extends React.Component {
    constructor (props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing four']
        }
    }

    handleDeleteOptions() {
        this.setState(()=>{
            return{
                options: []
            }
        })
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length); //0-1
        const option = this.state.options [randomNum]
        alert(option);
    }

    handleAddOption(option) {
        console.log(option);
    }

    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick}
          />
          <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOption} 
          />
          <AddOption 
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
    render() {
      return (
        <div>
          <button 
                //pass up to the Action Part in render(), then pass up to handlePick() function 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
            >
                What should I do?
            </button>
        </div>
      );
    }
  }

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component{
    render (){
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    //function that handling submitted form need an attribute, to handle the attribute.
    handleAddOption(e) {
        e.preventDefault();
        //trim: remove all spaces before and after the value
        const option = e.target.elements.option.value.trim();
        if(option){
            this.props.handleAddOption(option);
        }

    }

    render (){
        return (
            <div>
                <form onSubmit = {this.handleAddOption}>
                    <input type = "text" name = "option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));