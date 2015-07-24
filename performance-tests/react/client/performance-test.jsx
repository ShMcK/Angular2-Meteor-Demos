App = React.createClass({
  mixins: [ReactMeteor.Mixin],
  startMeteorSubscriptions: function () {
    Meteor.subscribe('items');
  },
  getMeteorState: function () {
    return {
      items: () => {
        if (this.state.running) {
          return Items.find({}, {limit: this.state.limit}).fetch()
        } else {
          return [];
        }
      }
    }
  },
  getInitialState: function () {
    return {
      limit: 1,
      running: false
    }
  },
  renderRows: function () {
    return this.state.items().map((row) => {
      var names = row.names.map((name, index) => {
        return (<td key={index}>{{name}}</td>);
      });
      return (<tr key={row._id}>{names}</tr>);
    });
  },
  getCounts: function () {
    return [10, 100, 500, 1000, 2000, 3000, 4000, 5000];
  },
  renderCounts: function () {
    return this.getCounts().map((count) => {
      return (<button key={count} onClick={()=>{this._changeLimit(count)}} className="mdl-button"
                      id="count-{count}">{count}</button>);
    });
  },
  getNumbers: function () {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  },
  renderTableHeads: function () {
    return this.getNumbers().map((number) => {
      return (<th className="mdl-data-table__cell--non-numeric">{{number}}</th>);
    })
  },
  _run: function () {
    this.setState((prevState, currentProps) => {
      return {running: true};
    });
  },
  _changeLimit: function (newLimit) {
    console.log(newLimit);
    this.setState({running: false, limit: newLimit});
  },
  _findWaldos: function () {
    console.log('find waldo!');
  },
  render: function () {
    return (<section className="pt">
      <div className="pt__options">
        <div className="pt__options--counts">
          {this.renderCounts()}
        </div>

        <button id="run" onClick={this._run}
                className="mdl-button mdl-button--primary mdl-js-button mdl-button--raised mdl-js-ripple-effect">Run
        </button>
        <button id="reset" onClick={() => {this._changeLimit(0)}}
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Reset
        </button>
        <button id="find-waldos" onClick={this._findWaldos}
                className="mdl-button mdl-button--accent mdl-button--raised">
          Find Waldos
        </button>
      </div>
      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
        <tr>
          {this.renderTableHeads()}
        </tr>
        </thead>

        {this.renderRows()}

      </table>
    </section>);
  }
});

Meteor.startup(function () {
  React.render(<App />, document.getElementById("app-target"));
});