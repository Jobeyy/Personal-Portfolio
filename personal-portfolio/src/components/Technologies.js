import React from 'react'

function Technologies() {
const imgSize = "75"

    return (
        <div className='tech d-flex flex-row w-100 mb-5 justify-content-around'>
          <div className='icons'>
            <img className="images"width={imgSize} height={imgSize} src="https://img.icons8.com/color/150/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
          </div>
          <div className='icons'>
            <img width={imgSize} height={imgSize} src='https://img.icons8.com/color/150/python--v1.png' alt="python--v1"/>
          </div>
          <div className='icons'>
            <img width={imgSize} height={imgSize} src="https://img.icons8.com/plasticine/150/react.png" alt="react"/>
          </div>
          <div className='icons'>
            <img width={imgSize} height={imgSize} src="https://img.icons8.com/ios/150/express-js.png" alt="express-js"/>
          </div>
          <div className='icons'>
            <img width={imgSize} height={imgSize} src="https://img.icons8.com/color/150/javascript--v1.png" alt="javascript--v1"/>
          </div>
          <div className='icons'>
            <img width={imgSize} height={imgSize} src="https://img.icons8.com/color/150/html-5--v1.png" alt="html-5--v1"/>
          </div>
          <div className='icons'>
            <img width={imgSize} height={imgSize} src="https://img.icons8.com/color/150/css3.png" alt="css3"/>
          </div>
        </div>
    )
}

export default Technologies