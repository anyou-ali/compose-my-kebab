import React, {Component} from 'react'
import List from './List/List';
import Menu from './Menu/Menu';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput : "",
            condiments : []
        }
    }

    handleChange(e) {
        this.setState({
            userInput : e.target.value
        });
    }

    addCondiment(e) {
        e.preventDefault();
        // let newCondiments = this.state.condiments;
        // newCondiments.push(this.state.userInput);

        this.setState({
        //    condiments : newCondiments

        condiments : [...this.state.condiments, this.state.userInput],
        userInput : ""
        },() => console.log(this.state))
    }

    render() {
        return (
            <div>
                <form className="form">
                    <input value={this.state.userInput} onChange={this.handleChange.bind(this)} className="form__input" type="text" />
                    <button onClick={this.addCondiment.bind(this)} className="form__btn" type="submit">
                        +
                    </button>
                </form>
                
                <div>
                    <ul>
                        {
                            this.state.condiments.map((condiment) => {
                               return (
                                        <div className="menu">
                                            <li className="list__item">
                                                {condiment}
                                            </li>
                                            <button className="list__trash-btn">
                                                X
                                            </button>
                                        </div>
                               )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

}
