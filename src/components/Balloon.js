import styled from '@emotion/styled'

export default styled.div`
    position: relative;
    padding: 32px 40px;
    color: #286d8a;
    background-color: #f7ff1e;
    border-radius: 50%;
    font-size: 32px;
    font-weight: 700;
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.25);

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: -7px;
        width: 35px;
        height: 25px;
        background-color: inherit;
        border-radius: 0 0 30px 0;
        transform: rotateZ(-2deg);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: -16px;
        width: 24px;
        height: 27px;
        background-color: #36a59c;
        border-radius: 0 0 50px 0;
        transform: rotateZ(-2deg);
    }
`