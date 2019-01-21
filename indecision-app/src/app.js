class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one','Thing two','Thing four'];

        return(
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <Action />
                <Options options = {options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render (){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert('handlePick');
    }
    render (){
        return (//just reference to handlePick, not call it, so don't use {this.handlePick()}
            <div>
                <button onClick = {this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    handleRemove (){
        alert('handleRemove');
    }
    render(){
        return(
            <div>
                <button onClick = {this.handleRemove}>Remove All</button>
                {//optionText is to pass the option name to its child class "Option"
                    this.props.options.map((option)=> <Option key={option} optionText = {option}/> )
                }
                <Option />
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
    //function that handling submitted form need an attribute, to handle the attribute.
    handleAddOption(e) {
        e.preventDefault();
        //trim: remove all spaces before and after the value
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
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