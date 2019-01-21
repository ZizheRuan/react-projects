// let details = "";
// let wordOnButton = "Show details";

// const showDetails = () => {
//     if (wordOnButton == "Show details"){
//         wordOnButton = "Show less";
//         details = "details";
//     }
//     else {
//         wordOnButton = "Show details";
//         details = "";
//     }
//     renderApp();
// }

// const appRoot = document.getElementById('app');// can be put in ReactDOM.render...

// const renderApp = () => {
//     const template = ( //can use  other names other than template
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {showDetails}> {wordOnButton} </button>
//             <p>{details}</p>
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// }

// renderApp();






//define constructor for two reasons: bind methods & set up default state
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        //binding
        this.state = {
            state: false
        };
    }

    render(){
        return(
            <div>
                <h1>Visibility</h1>
                <button onClick = {this.handleShowMore}>Show More</button>
                <button onClick = {this.handleShowLess}>Show Less</button>
                <p>{this.details}</p>
            </div>
        )
    }

}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
