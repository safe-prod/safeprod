"use client"

export default Transaction(props) {
  return (
    <div key={props.id} className={`${style.payment}`}>
      <div className={`${style.firstRow}`}>
        <Name props={props.name} />
        <Product props={props.product} />
      </div>
      <div className={`${style.secondRow}`}>
        <Amount props={props.name} />
        <Date props={props.date} />
      </div>
    </div>
  )
}
