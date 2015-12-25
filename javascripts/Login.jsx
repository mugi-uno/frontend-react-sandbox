import React from 'react'
import { Router, Link, PropTypes  } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  signInHandler() {
    this.context.history.pushState(null, "/main");
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">ID</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputEmail3" placeholder="ID" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <div className="checkbox">
                  <label>
                    <input type="checkbox"/> Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <input type="button" onClick={() => this.signInHandler()} className="btn btn-default" value="Sign in" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  };
}

Login.contextTypes = { history: PropTypes.history }