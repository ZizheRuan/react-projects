class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Action ></Action>
                <Options ></Options>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    //In React, a render must be included in a class declaration.
    render (){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render (){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                contains many options here.
                <Option />
            </div>
        );
    }
}

class Option extends React.Component{
    render (){
        return (
            <div>
                <button>Options</button>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render (){
        return (
            <div>
                <button>AddOption</button>
            </div>
        );
    }
}


// const jsx = (// in tradition, leave a space.
//     <div>
//         <Header /> 
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));