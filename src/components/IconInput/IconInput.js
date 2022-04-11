import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        '--font-size': `${14 / 16}rem`,
        '--border-width': 1 + 'px',
        '--icon-size': 16 + 'px',
    },
    large: {
        '--font-size': `${18 / 16}rem`,
        '--border-width': 2 + 'px',
        '--icon-size': 24 + 'px',
    }
}

const IconInput = ({
                       label,
                       icon,
                       width = 250,
                       size,
                       placeholder,
                   }) => {
    const style = STYLES[size];

    if (!style) throw new Error(`Cannot find proper styles for ${size}`);

    return (<Wrapper style={{}}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper style={{'--icon-size': style['--icon-size']}}>
            <Icon id={icon} size={(style['--icon-size'])}/>
        </IconWrapper>
        <CustomInput style={{...style, '--width': width + 'px'}} placeholder={placeholder}/>
    </Wrapper>);
};

export default IconInput;

const Wrapper = styled.label`
position: relative;
display: block;
color: ${COLORS.gray700};

&:hover {
  color:  ${COLORS.black};
}
`;

const CustomInput = styled.input`
border:none;
border-bottom-color:  ${COLORS.black};
border-bottom-style:  solid;
border-bottom-width:  var(--border-width);

font-weight: 700;
font-size: var(--font-size);
color:inherit;

outline-offset: 4px;
width: var(--width);
padding: 8px;
padding-left: calc(var(--icon-size) + 4px);

::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
}
`;

const IconWrapper = styled.div`
  font-weight: 700;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0; // no side margin
  height: var(--icon-size);
  width: var(--icon-size);
`;
