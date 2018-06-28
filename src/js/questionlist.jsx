import React from "react";

import Question from "./question.jsx";

class Questionlist extends React.Component
{
    render()
    {
        return(
        <div className="questions">
            {
                    this.props.questions.map(question =>{
                        if(question.id == this.props.current){
                       return <Question question={question} key={question.id} {...this.props} />
                           }
                    })
                }
        </div>
        );
    }
}
module.exports = Questionlist;