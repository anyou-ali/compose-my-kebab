import React, {Component} from 'react'
// import List from './List/List';
// import Menu from './Menu';

export default class Form extends Component {

    render() {
        return (
            <div>
                <form className="form">
                    <input value={this.props.userInput} onChange={this.props.handleChange} className="form__input" type="text" />
                    <button onClick={this.props.addCondiment} className="form__btn" type="submit">
                        +
                    </button>
                </form>
            </div>
        );
    }

}



// export default class Form extends Component {
//     // constructor(props) {
//     //     super(props);

//     //     this.state = {
//     //         userInput : "",
//     //         condiments : []
//     //     }
//     // }

//     // handleChange(e) {
//     //     this.setState({
//     //         userInput : e.target.value
//     //     });
//     // }

//     // addCondiment(e) {
//     //     e.preventDefault();
//     //     // let newCondiments = this.state.condiments;
//     //     // newCondiments.push(this.state.userInput);

//     //     this.setState({
//     //     //    condiments : newCondiments

//     //     condiments : [...this.state.condiments, this.state.userInput],
//     //     userInput : ""
//     //     })
//     // }

//     // mapCondiment() {
//     //     this.state.condiments.map(function(item) {
//     //         return item;
//     //     });
//     // }
//     // this.mapCondiment.bind(this)

//     render() {
//         return (
//             <div>
//                 <form className="form">
//                     <input value={this.props.userInput} onChange={this.props.handleChange} className="form__input" type="text" />
//                     <button onClick={this.props.addCondiment} className="form__btn" type="submit">
//                         +
//                     </button>
//                 </form>
                
//                 {/* <Menu condiments={this.state.condiments} /> */}

//                 {/* <div>
//                     <ul>
//                         {
//                             this.state.condiments.map((condiment) => {
//                                return (
//                                         <div className="menu">
//                                             <li className="list__item">
//                                                 {condiment}
//                                             </li>
//                                             <button className="list__trash-btn">
//                                                 X
//                                             </button>
//                                         </div>
//                                )
//                             })
//                         }
//                     </ul>
//                 </div> */}
//             </div>
//         );
//     }

// }
