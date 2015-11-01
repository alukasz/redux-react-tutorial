import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    return this.props.pair || [];
  },
  getVotes: function(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  },
  sumOfVotes: function() {
    return this.props.tally.reduce(function(a, b) {
      return a + b;
    }, 0);
  },
  getVotesBlockWidth: function(entry) {
    return ((this.getVotes(entry) / this.sumOfVotes()) * 100) + '%';
  },
  render: function() {
    return <div className="results">
      <div className="tally">
        {this.getPair().map(entry =>
          <div key={entry} className="entry">
            <h1>{ entry }</h1>
            <div className="voteVisualization">
              <div className="votesBlock"
                   style={{width: this.getVotesBlockWidth(entry)}}>
              </div>
            </div>
            <div className="voteCount">
              {this.getVotes(entry)}
            </div>
          </div>
        )}
      </div>
    </div>;
  }
});
