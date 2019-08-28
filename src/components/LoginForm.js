import styled from '@emotion/styled'

export default styled.div`
    position: absolute;
    right: 24px;
    width: 325px;
    background-color: #fff;
    border-radius: 8px;
    display: grid;
    grid-template-rows: 1fr auto;
    overflow: hidden;
    box-shadow: 5px 2px 10px 0 rgba(0, 0, 0, 0.5);

    > div {
        &:first-of-type {
            padding: 64px 32px 48px;
            display: grid;
            row-gap: 24px;

            > h1 {
                font-size: 24px;
                color: #47646a;
                text-transform: uppercase;
            }

            > a {
                font-size: 12px;
                font-weight: 600;
                color: #959394;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &:last-of-type {
            padding: 18px 0;
            background-color: #dbe4e3;
            border-top: solid 1px #d5d8d9;
            text-align: center;

            > p {
                color: #3a6c69;

                > a {
                    color: #3a6c69;
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`