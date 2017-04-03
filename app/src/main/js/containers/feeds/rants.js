import React, { Component } from 'react';
import RantCard from '../rant/rant_card';
import { connect } from 'react-redux';
import { fetch } from '../../actions/rants';
import { STATE } from '../../consts/state';
import { FEED } from '../../consts/feed';

class Rants extends Component {
<<<<<<< HEAD
=======
  /* Ignore for now, not always running componentDidMount() {
    const { rants } = this.props;

    document.body.onscroll = () => {
      console.log(document.body.scrollTop, document.body.scrollHeight, window.innerHeight * 2);
      console.log(document.body.scrollTop > document.body.scrollHeight - (window.innerHeight * 2));

      if (document.body.scrollTop > document.body.scrollHeight - (window.innerHeight * 2) && rants.state !== STATE.LOADING) {
        console.log('Load Rants');
        this.props.fetch(rants.feedType, 25, rants.page);
      }
    }
  } */

>>>>>>> upstream/two_column
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
<<<<<<< HEAD
    const { rants } = this.props;
=======
>>>>>>> upstream/two_column
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
<<<<<<< HEAD
    if (windowBottom + (windowHeight * 2) >= docHeight && rants.state !== STATE.LOADING) {
      this.props.fetch(
        this.props.rants.feedType,
        25,
        25 * this.props.rants.page,
      );
    }
  }
  render() {
    const { rants } = this.props;
    if (rants.state === STATE.LOADING  && rants.currentRants.length === 0) {
      return (
        <div>
          <div id="loaderCont" >
=======
    if (windowBottom >= docHeight) {
      this.props.fetch(
        this.props.rants.feedType,
        100,
        this.props.rants.page,
      );
    }
  }

  render() {
    const { rants } = this.props;

    if (rants.state === STATE.LOADING && rants.currentRants.length === 0) {
      return (
        <div>
          <div id="loaderCont" style={{ height: 'calc(100vh - 36px - 30px)' }}>
>>>>>>> upstream/two_column
            <div className="loader" id="loader1" />
            <div className="loader" id="loader2" />
          </div>
        </div>
      );
    }
    return (
<<<<<<< HEAD
      <div className="row rantContainer" >
        {
        rants.currentRants.map((currentRants, index) => {
          const key = `column${index}`;
          return (
            <div className="rants col s6" id={key} key={key} >
              {
                currentRants.map(rant => <RantCard rant={rant} key={rant.id} />)
              }
            </div>
          );
        })
        }
=======
      <div className="row" id="rantsFeed" >
        <div className="rants" >
          {
            rants.currentRants.map(rant => <RantCard rant={rant} key={rant.id} />)
          }
        </div>
>>>>>>> upstream/two_column
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rants: state.rants,
  };
}

<<<<<<< HEAD
=======

>>>>>>> upstream/two_column
export default connect(mapStateToProps, { fetch })(Rants);
