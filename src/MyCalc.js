import React , {Component} from "react";
class MyCalc extends Component{
    constructor(){
        super();
        this.state={num1:0,num2:0,result:0};
    }
    handleTextChange=(evt)=>
    {
        if(evt.target.name==="tbnum1")
        {
            this.setState({num1:evt.target.value});
        }
        else if(evt.target.name==="tbnum2"){
            this.setState({num2:evt.target.value});
        }

}

handleButtonClick=(evt)=>{
    if(evt.target.name==="btnSum"){
        var r = parseFloat(this.state.num1)+parseFloat(this.state.num2);
        this.setState({result:"Sum is"+r});
    }
    else if(evt.target.name==="btnSub"){
        var r = (parseFloat(this.state.num1))-parseFloat((this.state.num2))
        this.setState({result:"Subtraction is "+r});
    }
    else if(evt.target.name==="btnDiv"){
        var r = parseFloat(this.state.num1)/(parseFloat(this.state.num2))
        this.setState({result:"Division is "+r});
    }
    else if(evt.target.name==="btnMulti"){
        var r = parseFloat(this.state.num1)*parseFloat(this.state.num2)
        this.setState({result:"Multiplication is "+r});
    }
}

render()
{
    return(<center>
                <div>
                <h1>My Calculator</h1>
                <table>
                    <tr>
                        <td>First Number</td>
                        <td> <input type="number" placeholder="Input Number" onChange={this.handleTextChange} name="tbnum1"></input> </td>
                    </tr>

                    <tr>
                    <td>Second Number</td>
                        <td> <input type="number" placeholder="Input Number" onChange={this.handleTextChange} name="tbnum2" /></td>
                    </tr>

                    <tr>
                    <td>Result</td>
                    <td>
                        <input type="text" value={this.state.result}/>
                    </td>
                    </tr>

                    <tr>
                        <td> <button type="submit" name="btnSum" onClick={this.handleButtonClick}>Sum</button></td>
                    </tr>
                    <tr>
                        <td> <button type="submit" name="btnSub" onClick={this.handleButtonClick}>Sub</button></td>
                    </tr>
                    <tr>
                        <td> <button type="submit" name="btnDiv" onClick={this.handleButtonClick}>Div</button></td>
                    </tr>
                    <tr>
                        <td> <button type="submit" name="btnMulti" onClick={this.handleButtonClick}>Multi</button></td>
                    </tr>
                </table>
                </div>
            </center>
            );
}
}
export default MyCalc;