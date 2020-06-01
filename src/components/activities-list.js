import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Activity = props => (
  <tr>
    <td>{props.activity.username}</td>
    <td>{props.activity.description}</td>
    <td>{props.activity.duration}</td>
    <td>{props.activity.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/"+props.activity._id}>edit</Link> | <a href="#" onClick={() => {props.deleteActivities(props.activity._id)} }>delete</a>
    </td>
  </tr>
)

class ActivitiesList extends Component {
  constructor(props) {
    super(props);

    this.state = { activities: [] };

    this.deleteActivities = this.deleteActivities.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/activities/')
      .then(res => {
        this.setState({ activities: res.data })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deleteActivities(id) {
    axios.delete('http://localhost:5000/activities/'+id)
      .then(res => console.log(res.data));
    this.setState({
      activities: this.state.activities.filter(el => el._id !== id)
    })
  }

  activityList() {
    return this.state.activities.map(currentactivity => {
      return (
        <Activity activity={currentactivity} deleteActivities={this.deleteActivities} key={currentactivity._id} />
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Logged Activities</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.activityList() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ActivitiesList;