import React from 'react'
import { connect } from 'react-redux'

class AddFields extends React.Component {
    add = () => {
        console.log('ui 6 balles')
        //this.props.dispatch({ type: 'ADD_FIELD})
    }
    render() {
        return(
            <div>
                <h3>A field will cost you 6 euros</h3>
                <button className="add-field" type="submit" onClick={this.add}>Buy a field</button>
            </div>
        )
    }
}

export default connect()(AddFields)