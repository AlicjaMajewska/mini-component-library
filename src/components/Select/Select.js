import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);
// `chevron-down` ID with the `Icon`
    return (
        <Wrapper>
            <NativeSelect value={value} onChange={onChange}>

                {children}
            </NativeSelect>
            <PresentationalBit>{displayedValue}
                <IconWrapper style={{'--icon-size': '24px'}}>
                    <Icon id='chevron-down' strokeWidth={1} size={24}/>
                </IconWrapper>
            </PresentationalBit>
        </Wrapper>
    );
};

export default Select;

const Wrapper = styled.div`
width: max-content;
position: relative; 
`;

const NativeSelect = styled.select`
// is in front and fills available container
    position: absolute;
    top: 0; left:0;
    opacity: 0;
    width: 100%;
    height: 100%;
      -webkit-appearance: none;
`;


const PresentationalBit = styled.div`
 background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  
  ${NativeSelect}:focus + & { // when native element is focused, then apply those styles to the current element -  PresentationalBit
  outline: 1px dotted #212121; // default for chrome
    outline: 5px auto -webkit-focus-ring-color;
  }
  
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

`
const IconWrapper = styled.div` // we introduce another wrapper for icon to be able to position in conveniently 
position: absolute;
width: var(--icon-size);
height: var(--icon-size);
top: 0;
bottom: 0;
margin: auto  ;
right: 10px;
pointer-events: none; // clicking on icon wrapper is passed down to native select element
`;

