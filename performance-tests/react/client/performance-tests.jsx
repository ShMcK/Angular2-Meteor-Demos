var cx = React.addons.classSet;

Table = React.createClass({
  templateName: "table",
  mixins: [ReactMeteor.Mixin],
  startMeteorSubscriptions: function () {
    // automatically wrapped in Tracker.autorun
    Meteor.subscribe('items');
  },
  getMeteorState: function () {
    return {
      items: () => {
        if (this.props.running) {
          return Items.find({}, {limit: this.props.limit}).fetch()
        } else {
          return [];
        }
      }
    }
  },
  renderRows: function () {
    return this.state.items().map((row) => {
      console.log(row);
      return (<tr key={row._id}>
        <td>Index</td>
        <td style={{"color": row.color}}>&#9679;</td>
        <td>{row.profile.name}</td>
        <td>{row.profile.surname}</td>
        <td>{row.profile.name} {row.profile.surname}</td>
        <td>{row.profile.username}</td>
        <td>{row.profile.email}</td>
        <td>{row.number}</td>
        <td>{row.title}</td>
        <td>{row.description}</td>
      </tr>);
    });
  },
  render: function () {
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
        <tr>
          <th>Index</th>
          <th className="mdl-data-table__cell--non-numeric">Color</th>
          <th className="mdl-data-table__cell--non-numeric">Name</th>
          <th className="mdl-data-table__cell--non-numeric">Surname</th>
          <th className="mdl-data-table__cell--non-numeric">Full Name</th>
          <th className="mdl-data-table__cell--non-numeric">Username</th>
          <th className="mdl-data-table__cell--non-numeric">Email</th>
          <th>Number</th>
          <th className="mdl-data-table__cell--non-numeric">Title</th>
          <th className="mdl-data-table__cell--non-numeric">Paragraph</th>
        </tr>
        </thead>

        {this.renderRows()}

      </table>);
  }
});

Counts = React.createClass({
  templateName: "counts",
  getCounts: function () {
    return [10, 100, 500, 1000, 2000, 3000, 4000, 5000];
  },
  renderCounts: function () {
    return this.getCounts().map((count) => {
      return (<button key={count} onClick={()=>{this.props.changeLimit(count)}} className="mdl-button"
                      id="count-{count}">{count}</button>);
    });
  },
  render: function () {
    return (<section className="mdl-grid">
      <div className="mdl-cell mdl-cell--10-col counts">
        <span className="title">Item Count:&nbsp;</span>

        {this.renderCounts()}

        <button id="run" onClick={this.props.run}
                className="mdl-button mdl-button--primary mdl-js-button mdl-button--raised mdl-js-ripple-effect">Run
        </button>
        <button id="reset" onClick={() => {this.props.changeLimit(0)}}
                className="mdl-button mdl-button--accent mdl-js-button mdl-button--raised mdl-js-ripple-effect">Reset
        </button>
      </div>
    </section>);
  }
});

App = React.createClass({
  getInitialState: function () {
    return {
      limit: 1,
      running: false
    }
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
  render: function () {
    return (<div>
      <Counts changeLimit={this._changeLimit} run={this._run}/>
      <Table limit={this.state.limit} running={this.state.running}/>
    </div>);
  }
});

Meteor.startup(function () {
  React.render(<App />, document.getElementById("app-target"));
});