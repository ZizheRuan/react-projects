console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title:'Some Title',
    subtitle:'my subtitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();//stop page whole-refresh
    const option = e.target.elements.option.value;
    console.log(option);
    if (option) {
        app.options.push(option);//push into array;
        e.target.elements.option.value = '';
        //reset the new comer array to empty array.
    }
    renderApp();
};

const removeAll = () => {
    app.options = [];
    console.log('removed all options!')
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); //0-1
    const option = app.options [randomNum]
    alert(option);
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderApp = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}:</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}:</p>
            
            <button disabled={app.options.length==0} onClick={onMakeDecision}> What should I do?</button>

            <button onClick = {removeAll}>Remove All</button>

            {
                numbers.map((number) => {
                    return <p key = {number}> Number:{number} </p>
                })
            }

            <ol>
                {
                app.options.map((option) => <li key = {option}> Option:{option} </li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type = "text" name = "option"/>
                <button>Add Option</button>
            </form>
            
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();




