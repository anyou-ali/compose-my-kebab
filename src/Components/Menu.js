import React, { Component } from 'react'

export default class Menu extends Component {
    
    // condimentElt(item) {
    //     return <li>{item}</li>;
    // };


    render() {
        // let condimentsUser = this.props.condiments;
        // let condimentsList = condimentsUser.map(this.condimentElt);
        // console.log(condimentsUser);
        let delCondiment = this.props.deleteCondiment;

        return (
            <div>
                <ul className="menu">
                    {
                        this.props.condiments.map(function(condiment, index) {
                            return (
                                <div key={index} className="menu__list">
                                    <li className="list__item">
                                        {condiment}
                                    </li>
                                    <button onClick={delCondiment.bind(this, index)} className="list__trash-btn">
                                        X
                                    </button>
                                </div>
                            ) 
                        })
                    }
                </ul>
            </div>
        )
    }
}



// import React from 'react'

// export default function Menu(props) {
//     // const condiments = props.condiments;
//     // const listCondiments = condiments.map(condiment => {
//     //     return <div> {condiment} </div>
//     // })


//     // for(let i = 0; i < condiments.length; i++) {
//     //     condiments[i];
//     // }

//     condimentList() {

//     };

//     // console.log(condiments);

//     return (
//         <div className="menu">
//             <ul className="menu__list">
//                 {
                    
//                 }
//             </ul>
//         </div>
//     )
// }
