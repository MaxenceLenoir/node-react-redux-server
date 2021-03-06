import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fields } from './formField';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const renderValues = () => {
    return (
      fields.map(({label, name}) => {
        return (
          <div key={name}>
            <label>{label}</label>
            <div>{formValues[name]}</div>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {renderValues()}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button 
        onClick={() => submitSurvey(formValues, history)}
        className="green white-text btn-flat right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
