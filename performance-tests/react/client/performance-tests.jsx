Meteor.subscribe('items');

Table = React.createClass({
  getRows() {
    return Items.find({}, {limit: 10});
  },
  renderRows() {
    return this.getRows().map((row) => {
      return (<tr>
        <td style="color: {task.color}">&#9679;</td>
        <td>{row.profile.name}</td>
        <td>{row.profile.surname}</td>
        <td>{row.profile.name} {row.profile.surname}</td>
        <td>{row.profile.username}</td>
        <td>{row.profile.email}</td>
        <td>{row.number}</td>
        <td>{row.title}</td>
        <td>{row.description}</td>
      </tr>);
      // <td>{index}</td>
    });
  },
  render() {
    return (
      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
        <tr>
          <th>Index</th>
          <th class="mdl-data-table__cell--non-numeric">Color</th>
          <th class="mdl-data-table__cell--non-numeric">Name</th>
          <th class="mdl-data-table__cell--non-numeric">Surname</th>
          <th class="mdl-data-table__cell--non-numeric">Full Name</th>
          <th class="mdl-data-table__cell--non-numeric">Username</th>
          <th class="mdl-data-table__cell--non-numeric">Email</th>
          <th>Number</th>
          <th class="mdl-data-table__cell--non-numeric">Title</th>
          <th class="mdl-data-table__cell--non-numeric">Paragraph</th>
        </tr>
        </thead>

        {this.renderRows()}

      </table>);
  }
});

Counts = React.createClass({
  getTasks() {
    return [10, 100, 500, 1000, 2000, 3000, 4000, 5000];
  },
  renderTasks() {
    return this.getTasks().map((task) => {
      return (<button class="mdl-button" id="count-{task}" value="{task}">{task}</button>);
    });
  },
  render() {
    return (<section class="mdl-grid">
      <div class="mdl-cell mdl-cell--10-col counts">
        <span class="title">Item Count:&nbsp;</span>

        {this.renderTasks()}

        <button id="run"
                class="mdl-button mdl-button--primary mdl-js-button mdl-button--raised mdl-js-ripple-effect">Run
        </button>
        <button id="reset"
                class="mdl-button mdl-button--accent mdl-js-button mdl-button--raised mdl-js-ripple-effect">Reset
        </button>
      </div>
    </section>);
  }
});


Meteor.startup(function () {
  React.render(<Table />, document.getElementById("table-target"));
  React.render(<Counts />, document.getElementById("counts-target"));
});