
import React, { Component } from 'react'

import { ThreeDots } from 'react-loader-spinner'

function Loader({className}) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ margin: '20px' }}
          wrapperClass="custom-loader"
          visible={true}
        />
      </div>
    )
}

export default Loader