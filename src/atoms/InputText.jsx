import React from 'react'

function InputText(props) {
  const {value, setValue} = props
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{props.text}</span>
      </div>
      <input type={props.type} placeholder={"Masukan " + props.text} className="input input-bordered w-full max-w-xs" min="0" tabIndex={props.tabindex} value={value} 
      onChange={(e) => setValue(e.target.value)} />
    </label>
  )
}

export default InputText