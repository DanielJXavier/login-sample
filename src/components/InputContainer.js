import styled from '@emotion/styled'

export default styled.div`
    display: grid;
    row-gap: 24px;

    > div {
        > label {
            font-size: 11px;
            font-weight: 600;
            color: #c1bfc0;
            text-transform: uppercase;
        }

        > input {
            width: 100%;
            padding: 6px 3px;
            color: #686868;
            background: none;
            border: none;
            border-bottom: solid 3px #4d7e84;
            text-transform: uppercase;
        }
    }

    > button {
        padding: 9px 0;
        font-weight: 600;
        color: #fff;
        background-color: #248f87;
        border: none;
        border-radius: 3px;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
        }
    }
`