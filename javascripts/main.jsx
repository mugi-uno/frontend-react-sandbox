import React from 'react'
import SearchForm from 'SearchForm'

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.data = {
      customerId  : '00001',
      email       : 'hoge@example.com',
      faxNo       : '000-111-2222',
      nameKana    : 'おなまえ',
      nameKanji   : 'お名前'
    };
  }

  render() {
    return (
      <div className="row">
        <div>メインだよ！！！</div>
        <div className="col-xs-12">
        <SearchForm data={this.data} />
        </div>
      </div>
    );
  }
}