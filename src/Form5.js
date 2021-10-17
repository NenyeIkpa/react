import React from 'react'

export default class Form extends React.Component {
    state = {
        userName: '',
        firstName: '',
        lastName:  '',
        age: '',
        sex:  '',
        email: '',
        password: ''
    };

    onSubmit= () => {
        console.log(this.state)
    }

change = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
};

    render() {
        return (
            <form>
                <label>Username: </label>       
                <input name = 'userName'
                value = {this.state.userName} 
                onChange={e => this.change(e)}
                />
                  <br/>

                <label>Firstname: </label>
                <input name = 'firstName' 
                value = {this.state.firstName} 
                onChange={e => this.change(e)}
                />
                  <br/>

                <label>Lastname: </label>
                <input name = 'lastName' 
                value = {this.state.lastName} 
                onChange={e => this.change(e)}
                />
                  <br/>

                <label>Age: </label>
                <input name = 'age' 
                value = {this.state.age} 
                onChange={e => this.change(e)}
                />
                  <br/>

                
                <label>Sex: </label>
                <input name = 'sex' 
                value = {this.state.sex} 
                onChange={e => this.change(e)}
                />
                  <br/>

                <label>Email: </label>
                <input name = 'email' 
                value = {this.state.email} 
                onChange={e => this.change(e)}
                />
                  <br/>

                <label>Password: </label>
                <input name = 'password' typeof = 'password' 
                value = {this.state.password} 
                onChange={e => this.change(e)}
                //onChange={e => this.setState({password: e.target.value})}
                />
                <br/>
                <button onClick ={() => this.onSubmit()}>Submit</button>
            </form>
        )
    }
}