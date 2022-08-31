import React from "react";

class ContactsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = ({value:""})
        this.ChangeStateValue = this.ChangeStateValue.bind(this)
        this.submitData = this.submitData.bind(this)
    }
    ChangeStateValue(e) {
        // console.log(e.target.value);
        this.setState({value: e.target.value})
    }



    submitData(e){
        e.preventDefault()
        console.log(this.state);
    }

    render() {
        return(
            <div>
                {console.log(this.state.value)}
              
            </div>
        )
    }
}

export default ContactsPage;