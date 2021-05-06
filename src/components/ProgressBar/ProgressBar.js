/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';
import './Progress.css'


function ProgressBar({skill='Python',percent='30%'}) {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full  xbg-blue-300">
            {skill}
          </span>
        </div>
        <div className="text-right">
          <span className="text-sm font-semibold inline-block p-1 rounded-full xbg-blue-400">
            {percent}
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-4 mb-4 text-sm flex rounded-xl bg-gray-300">
        <div style={{ width: `${percent}` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400 shim h-12"></div>
      </div>
    </div>
  )
}

export default ProgressBar


