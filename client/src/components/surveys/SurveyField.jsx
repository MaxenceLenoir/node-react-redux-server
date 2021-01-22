import React from 'react'

export default function Surveyfield({ input, label, meta: { error, touched } }) {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  )
}

