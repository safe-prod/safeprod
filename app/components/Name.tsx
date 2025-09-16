"use client"

export default Name(props) {
  return (
    {
      if (props.edit) {
        <input type="text" onChange={e => setPayments(searchName(e.target.value))} className={`${style.name} ${style.input}`} placeholder="" />
      } else {
        <div className={`${style.name}`}>{props.name}</div>
      }
    }
  )
}
