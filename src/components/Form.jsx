import React from 'react'

const Form = () => {
  let marginLeft = ""
  return (
    <>
      <div className='p-7 form pt-10 lg:pt-11'>
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
          <div className='progess_block' data-step="1">1</div>
          <div className='progress_line'></div>
          <div className='progess_block'data-step="3">2</div>
          <div className='progress_line'></div>
          <div className='progess_block'>3</div>
          <div className='progress_line'></div>
          <div className='progess_block'>4</div>
        </div>
        <div class="mt-12">
          <form action="" className='overflow-hidden'>
            <div className="font-fields form-outer">
              <div style={{marginLeft: marginLeft}} class={`form-field-1 form-page`}>
                <h2 className='text-xl font-medium mb-5'>Contact Info:</h2>
                <span className='mb-1 block'>First Name</span>
                <input pattern="[a-z]{3,}" className='pl-2 mb-3 w-full py-2 border' type="text" name="email-1" id="" />
                <span className='mb-1 block'>Last Name</span>
                <input pattern="[a-z]{3,}" className='pl-2 w-full py-2 border border-l-slate-200' type="text" name="" id="" />
                <div className='flex justify-between mt-9'>
                  <button type="button" className='py-2 btn w-full bg_pink text-xl font-medium text-white rounded'>Next</button>
                </div>
              </div>
              <div class="form-field-2 form-page">
                <h2 className='text-xl font-medium mb-5'>Contact Info:</h2>
                <span className='mb-1 block'>Email Address</span>
                <input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className='pl-2 mb-3 w-full py-2 border' type="email" name="email-1" id="" />
                <span className='mb-1 block'>Phone Number</span>
                <input pattern=".[0-9]{6,}" className='pl-2 w-full py-2 border border-l-slate-200' type="phone-1" name="" id="" />
                <div className='flex justify-between mt-9'>
                  <button type="button" className='btn_pri bg_pink text-xl font-medium text-white rounded'>Previous</button>
                  <button type="button" className='btn_pri bg_pink text-xl font-medium text-white rounded'>Next</button>
                </div>
              </div>
              <div class="form-field-1 form-page">
                <h2 className='text-xl font-medium mb-5'>Contact Info:</h2>
                <span className='mb-1 block'>Email Address</span>
                <input className='pl-2 mb-3 w-full py-2 border' type="date" name="email-1" id="" />
                <span className='mb-1 block'>Phone Number</span>
                <select className='pl-2 bg-white w-full py-2 border' name="" id="">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className='flex justify-between mt-9'>
                  <button type="button" className='btn_pri bg_pink text-xl font-medium text-white rounded'>Previous</button>
                  <button type="button" className='btn_pri bg_pink text-xl font-medium text-white rounded'>Next</button>
                </div>
              </div>
              <div class="form-field-1 form-page">
                <h2 className='text-xl font-medium mb-5'>Contact Info:</h2>
                <span className='mb-1 block'>Username</span>
                <input className='pl-2 mb-3 w-full py-2 border' type="email" name="email-1" id="" />
                <span className='mb-1 block'>Password</span>
                <input className='pl-2 w-full py-2 border border-l-slate-200' type="phone-1" name="" id="" />
                <div className='flex justify-between mt-9'>
                  <button type="button" className='btn_pri bg_pink text-xl font-medium text-white rounded'>Previous</button>
                  <button type="submit" className='btn_pri bg_pink text-xl font-medium text-white rounded'>Submit</button>
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