import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: [],
    }
  }
  componentDidMount() {
    //why won't template strings work here   vvvvvv
    axios.get('http://localhost:3005/students?class=' + this.props.match.params.class).then( res => {
      this.setState({ students: res.data })
    })
  }

  render() {
    let studentsArr = this.state.students.map((student,i) => {
      return (<Link key={ i } to={`/student/${this.props.match.params.class}/${student.id}`}><h3>{ student.first_name } { student.last_name }</h3></Link>);
    })
    return (
      <div className="box">
        <Link to={`/`}><button>&laquo;</button></Link>
        <h1>{ this.props.match.params.class }</h1>
        <h2>ClassList: </h2>
          {studentsArr}
      </div>
    )
  }
}