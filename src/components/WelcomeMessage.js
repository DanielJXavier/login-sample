import styled from '@emotion/styled'

export default styled.div`
    width: 400px;
    padding: 64px;
    background-color: #36a59c;
    border-radius: 8px;
    display: grid;
    row-gap: 36px;
    justify-items: center;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);

    > h2 {
        font-size: 28px;
        color: #fff;
        text-transform: uppercase;
    }

    > P {
        font-size: 15px;
        color: #8be6dd;
        text-align: center;
        line-height: 1.3;
    }
`