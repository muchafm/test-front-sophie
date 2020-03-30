import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return { fields: state.fields }
}

const FieldsList = ({ fields }) => (
    <div>
        {fields.map(f => (
            <li key={f.id}></li>
        ))}
    </div>
)
export default connect(mapStateToProps)(FieldsList)