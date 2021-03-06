import React from 'react';
import DispensariesShowItem from './dispensaries_show_item';
import Footer from '../footer/footer';

class DispensariesShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDispensaries();
  }

  render() {
    const { dispensaries } = this.props;
    return (
      <div className="dispensaries-show">
        <ul>
          <br />
          <br />
          <h2 className="featured-dispensaries">Dispensaries</h2>
          <div className="dispensaries">
            {
              dispensaries.map(dispensary => (
                <DispensariesShowItem key={`dispensary${dispensary.id}`} dispensary={dispensary} />
              )
              )
            }
          </div>
        </ul>
        <Footer/>
      </div>
    )
  }
}

export default DispensariesShow;
