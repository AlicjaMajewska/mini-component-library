/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
    large: {
        padding: '4px',
        height: '16px',
        outerBorderRadius: '8px',
    },
    medium: {
        padding: '0',
        height: '12px',
        outerBorderRadius: '4px',
    },
    small: {
        padding: '0',
        height: '8px',
        outerBorderRadius: '4px',
    }
};

const ProgressBar = ({value, size}) => {
    const style = styles[size];
    if (!style) throw new Error(`Cannot find proper styles for ${size}`);

    return (<ProgressWrapper style={{'--padding': style.padding, '--outer-border-radius': style.outerBorderRadius}}>
        <BarWrapper style={{'--outer-border-radius': style.outerBorderRadius}}>
            <Bar value={value} style={{
                '--outer-border-radius': style.outerBorderRadius,
                '--width': value + '%',
                '--height': style.height
            }
            } role="progressbar" aria-valuenow={value}
                 aria-valuemin="0"
                 aria-valuemax="100">
                <VisuallyHidden>{value}%</VisuallyHidden>
            </Bar>
        </BarWrapper>
    </ProgressWrapper>);
};

export default ProgressBar;


const ProgressWrapper = styled.div`
  background-color: ${COLORS.transparentGray15} ;
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
    border-radius:  var(--outer-border-radius);
`;

// needed for trimming of corners when progress is near full but we have padding in place
const BarWrapper = styled.div`
  border-radius:  var(--outer-border-radius);
  /*trim off corners when progress is near of full */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  text-align: center;
  border-radius: 4px 0 0 4px;
`;

