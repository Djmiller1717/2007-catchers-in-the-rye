import React, {Component} from 'react'
import axios from 'axios'

class UserInfo extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            message: ''
        }
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.submit = this.submit.bind(this)
    }
    setUsername(ev){
      this.setState({username: ev.target.value})
    }
    setPassword(ev){
      this.setState({password: ev.target.value})
    }
    async submit(ev){
        ev.preventDefault()
        try{
          let response
          if(this.props.type === 'login') response = (await axios.post('/api/login',this.state)).data
          else if(this.props.type === 'create') response = (await axios.post('/api/user/create',this.state)).data
          this.setState({ message: response.message })
        }catch(err){
          console.error(err)
          if(this.props.type === 'login') this.setState({message: 'Log in failed - check username and/or password'})
          else if(this.props.type === 'create') this.setState({message: 'Could not create account'})
        }
    }
    render(){
        return (
            <>
              <form onSubmit={this.submit}>
                <label>
                  Username
                  <input
                    onChange={this.setUsername}
                  />
                </label>
                <label>
                  Password
                  <input
                    onChange={this.setPassword}
                    type="password"
                  />
                </label>
                <button type='submit'>Login</button>
              </form>
              <p>{this.state.message}</p>
            </>
          );
    }
}

export default UserInfo