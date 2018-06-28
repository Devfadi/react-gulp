import React from "react";
import Questionlist from "./questionlist.jsx";
import Scorebox from "./scorebox.jsx";
import Results from "./results.jsx";

class App extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state = {
                questions:
                [
                    {
                        id: 1,
                        text: "What is the capital of Pakistan",
                        choices: [
                            {
                                id: "a",
                                text: "Peshawar"
                            },
                            {
                                id: "b",
                                text: "Dehli"
                            },
                            {
                                id: "c",
                                text: "Islamabad"
                            },
                            {
                                id: "d",
                                text: "Karachi"
                            },
                        ],
                        correct : "c"
                    },
                    {
                        id: 2,
                        text: "What is the Nick name of mehran",
                        choices: [
                            {
                                id: "a",
                                text: "Cherga"
                            },
                            {
                                id: "b",
                                text: "Begamjan"
                            },
                            {
                                id: "c",
                                text: "Chele"
                            },
                            {
                                id: "d",
                                text: "Confuse"
                            },
                        ],
                        correct : "b"
                    },
                    {
                        id: 3,
                        text: "What is the capital of KPK",
                        choices: [
                            {
                                id: "a",
                                text: "Peshawar"
                            },
                            {
                                id: "b",
                                text: "Dehli"
                            },
                            {
                                id: "c",
                                text: "Islamabad"
                            },
                            {
                                id: "d",
                                text: "Karachi"
                            },
                        ],
                        correct : "a"
                    },
                    {
                        id: 4,
                        text: "When Pakistan Came into beaing",
                        choices: [
                            {
                                id: "a",
                                text: "13 August 1947"
                            },
                            {
                                id: "b",
                                text: "14 August 1947"
                            },
                            {
                                id: "c",
                                text: "15 August 1947"
                            },
                            {
                                id: "d",
                                text: "16 August 1947"
                            },
                        ],
                        correct : "b"
                    },
                ],
                score: 0,
                current: 1
            };
        }
    }
    
    setCurrent(current)
    {
        this.setState({current});
    }
    
     setScore(score)
    {
        this.setState({score});
    }
    
    render()
    {
        if(this.state.current > this.state.questions.length){
           var scorebox = '';
            var results =  <Results {...this.state} />
           }
           else{
           var scorebox = <Scorebox {...this.state} />
               var results =  '';
           }
        return(
        <div>
           {scorebox}
            <Questionlist {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
            {results}
        </div>
        );
    }
}
module.exports = App;