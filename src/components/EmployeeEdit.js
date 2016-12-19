import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';


class EmployeeEdit extends React.Component {

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
     const { name, phone, shift } = this.props;
     console.log(name, phone, shift);
     this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  render() {
      return (
        <Card>
          <EmployeeForm />
          <CardSection>
            <Button WhenPress={this.onButtonPress.bind(this)} >Save Changes</Button>
          </CardSection>
        </Card>
      );
  }
}

const mapStateProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateProps, { employeeUpdate, employeeSave })(EmployeeEdit);