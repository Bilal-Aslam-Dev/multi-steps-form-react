import React from 'react'

const Form = () => {
  const [count, setCount] = React.useState(0)
  const [formData, setFormData] = React.useState(
    {
        firstName: "", 
        lastName: "", 
        email: "", 
        phoneNumber: "", 
        date: "",
        gender: "",
        username: "",
        password: ""
    }
  )

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
  }

  let marginLeft = ""
  if (count === 1) {
    marginLeft = "-25%"
  } else if (count === 2) {
    marginLeft = "-50%"
  } else if (count === 3) {
    marginLeft = "-75%"
  } else {
    marginLeft = ""
  }
  
  function increment() {
    setCount(prevState => prevState + 1)
    if (count > 2) {
      setCount(3)
    }
  }
  function decrement() {
    setCount(prevState => prevState - 1)
    if (count < 1) {
      setCount(0)
    }
  }
  
  return (
    <>
      <div className='p-7 overflow-hidden form pt-10 lg:pt-11'>
        <div>
          <h1 className='text-center text-4xl font-semibold'>Signup Form</h1>
        </div>
        <div className='flex mt-10 font-medium justify-center gap-6 align-center'>
          <p>Name</p>
          <p>Contact</p>
          <p>Birth</p>
          <p>Submit</p>
        </div>
        <div className="progress__bar gap-1 mt-2 flex justify-center">
          <div className={`${count > 0 && "active"} progess_block`}>1</div>
          <div className={`${count > 0 && "active__line"} progress_line`}></div>
          <div className={`${count > 1 && "active"} progess_block`}>2</div>
          <div className={`${count > 1 && "active__line"} progress_line`}></div>
          <div className={`${count > 2 && "active"} progess_block`}>3</div>
          <div className={`${count > 2 && "active__line"} progress_line`}></div>
          <div className={`${count > 3 && "active"} progess_block`}>4</div>
        </div>
        <div className="mt-12">
          <form action="" className='overflow-hidden'>
            <div className="font-fields form__wrapper">
              <div style={{marginLeft: marginLeft}} className={`form-field-1 field__page`}>
                <h2 className='text-xl font-medium mb-5'>Contact Info:</h2>
                <span className='mb-1 block'>First Name</span>
                <input 
                  tabIndex="-1" 
                  pattern="[a-z]{3,}" 
                  className='pl-2 mb-3 w-full py-2 border' 
                  type="text" 
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  id=""
                />
                <span className='mb-1 block'>Last Name</span>
                <input 
                  tabIndex="-1"
                  pattern="[a-z]{3,}" 
                  className='pl-2 w-full py-2 border border-l-slate-200'
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  id="" 
                />
                <div className='flex justify-between mt-9'>
                  <button 
                    onClick={increment} 
                    tabIndex="-1" 
                    type="button" 
                    className='py-2 btn w-full bg_pink text-xl font-medium text-white rounded'>
                      Next
                  </button>
                </div>
              </div>
              <div className="form-field-2 field__page">
                <h2 className='text-xl font-medium mb-5'>Contact Info:</h2>
                <span className='mb-1 block'>Email Address</span>
                <input 
                  tabIndex="-1" 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                  className='pl-2 mb-3 w-full py-2 border' 
                  type="email" 
                  name="email"
                  onChange={handleChange}
                  value={formData.email} 
                  id="" 
                />
                <span className='mb-1 block'>Phone Number</span>
                <input 
                  tabIndex="-1" 
                  pattern=".[0-9]{6,}" 
                  className='pl-2 w-full py-2 border border-l-slate-200' 
                  type="phone-1" 
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  id="" 
                />
                <div className='flex justify-between mt-9'>
                  <button 
                    onClick={decrement} type="button" 
                    className='btn_pri bg_pink text-xl font-medium text-white rounded'  
                    tabIndex="-1">
                    Previous
                  </button>
                  <button 
                    onClick={increment} 
                    type="button" 
                    className='btn_pri bg_pink text-xl font-medium text-white rounded'  
                    tabIndex="-1">
                    Next
                  </button>
                </div>
              </div>
              <div className="form-field-3 field__page">
                <h2 className='text-xl font-medium mb-5'>Contact Info:</h2>
                <span className='mb-1 block'  tabIndex="-1">Date</span>
                <input  
                  tabIndex="-1" 
                  className='pl-2 mb-3 w-full py-2 border' 
                  type="date" 
                  name="date"
                  onChange={handleChange}
                  value={formData.date} 
                  id="" 
                />
                <span className='mb-1 block'  tabIndex="-1">Gender</span>
                <select  
                  tabIndex="-1" 
                  className='pl-2 bg-white w-full py-2 border' 
                  name="gender"
                  onChange={handleChange}
                  value={formData.gender}
                  id=""
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className='flex justify-between mt-9'>
                  <button 
                    onClick={decrement} 
                    type="button" 
                    className='btn_pri bg_pink text-xl font-medium text-white rounded' 
                    tabIndex="-1">
                    Previous
                  </button>
                  <button 
                    onClick={increment} 
                    type="button" 
                    className='btn_pri bg_pink text-xl font-medium text-white rounded' 
                    tabIndex="-1">
                    Next
                  </button>
                </div>
              </div>
              <div className="form-field-4 field__page">
                <h2 className='text-xl font-medium mb-5'>Contact Info:</h2>
                <span className='mb-1 block'>Username</span>
                <input 
                  tabIndex="-1" 
                  className='pl-2 mb-3 w-full py-2 border' 
                  type="text" 
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  id="" 
                />
                <span className='mb-1 block'>Password</span>
                <input 
                  tabIndex="-1" 
                  className='pl-2 w-full py-2 border border-l-slate-200' 
                  type="phone-1" 
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  id="" 
                />
                <div className='flex justify-between mt-9'>
                  <button 
                    onClick={decrement} 
                    type="button" 
                    className='btn_pri bg_pink text-xl font-medium text-white rounded'  
                    tabIndex="-1">
                    Previous
                  </button>
                  <button 
                    type="submit" 
                    className='btn_pri bg_pink text-xl font-medium text-white rounded'  
                    tabIndex="-1">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form