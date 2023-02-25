import React from 'react'
import { connect } from 'react-redux'

const Alert = (props) => {
  return (
    <div>
      {props.alert.map(e=>{
        return <p className={`text-${e.type}`} key={e.id}>{e.msg}</p>
      })}
    </div>
  )
}
const mapStateToProps =state=>{
  return{
    alert : state.alert
  }
}
export default connect(mapStateToProps)(Alert)
