import React from 'react';
import Icon from '@ant-design/icons';

const BellSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.684375em"
    height="1.815em"
    viewBox="0 0 26.95 29.02"
    focusable="false"
    data-icon="bell"
    fill="currentColor"
    aria-hidden="true"
  >
    <g>
      <path
        d="M26.94,22.8a2,2,0,0,1-.61,1.46,2,2,0,0,1-1.45.61H17.61a4,4,0,0,1-1.22,2.93,4.13,4.13,0,0,1-5.86,0,4,4,0,0,1-1.22-2.93H2.06A2,2,0,0,1,.6,24.26,2,2,0,0,1,0,22.8a13.16,13.16,0,0,0,1.47-1.42,13.13,13.13,0,0,0,1.38-1.94A14,14,0,0,0,4,16.87a19,19,0,0,0,.81-3.33,25.78,25.78,0,0,0,.32-4.21A6.71,6.71,0,0,1,7.06,4.76a8,8,0,0,1,5-2.57,1.51,1.51,0,0,1-.12-.63,1.46,1.46,0,0,1,.45-1.1,1.56,1.56,0,0,1,2.21,0A1.5,1.5,0,0,1,15,1.56a1.51,1.51,0,0,1-.13.63,8,8,0,0,1,5,2.57,6.72,6.72,0,0,1,1.9,4.57,26.93,26.93,0,0,0,.31,4.21,19,19,0,0,0,.81,3.33,14.72,14.72,0,0,0,1.21,2.57,13.29,13.29,0,0,0,1.37,1.94A15.25,15.25,0,0,0,26.94,22.8ZM13.73,27.46a.23.23,0,0,0-.19-.26h-.07a2.34,2.34,0,0,1-2.33-2.33.23.23,0,0,0-.2-.26h-.06a.24.24,0,0,0-.26.2v.06a2.85,2.85,0,0,0,2.85,2.85.22.22,0,0,0,.26-.2A.06.06,0,0,0,13.73,27.46Z"
        transform="translate(0.01 0)"
      />
    </g>
  </svg>
);

const BellIcon = props => <Icon component={BellSvg} {...props} />;

export default BellIcon;
