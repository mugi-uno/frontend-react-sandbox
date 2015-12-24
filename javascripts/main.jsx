import React from 'react'
import SearchForm from 'SearchForm'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  getInitialState() {
    return {
      customerId  : '00001',
      faxNo       : '000-111-2222',
      nameKana    : 'おなまえ',
      nameKanji   : 'お名前'
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
        <SearchForm />
        </div>
      </div>
    );
  }
}