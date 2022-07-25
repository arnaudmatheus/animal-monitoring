import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    }

    *:focus {
    outline: 0;
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'liga';
    }

    html {
        height: 100vh !important;
        scroll-behavior: smooth; // scroll suavizado
    }

    #root {
        height: 100vh !important;
    }

    .App {
     height: 100vh !important;
    }

    body {
        font-family: 'Poppins', sans-serif !important;
        font-size: 1rem;
        top: 0px;
        left: 0px;
        overflow-x: hidden;
        min-height: 100%;
        max-width: 100%;
        background-color: white !important;
        background-position: bottom !important;
        background-repeat: no-repeat;
        background-attachment: fixed !important;
        opacity: 1;

    small {
        font-family: 'Poppins', sans-serif !important;
    }

    @media (max-width: 1080px) {
        html {
        font-size: 93.75%; // 15px
        }
    }

    @media (max-width: 720px) {
        html {
        font-size: 87.5%; // 14px
        }
    }

    @media (max-width: 425px) {
        html {
        font-size: 81.25%; // 13px
        }
    }

    @media (max-width: 320px) {
        html {
        font-size: 75%; // 12px
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0;
        /* <-- Apparently some margin are still there even though it's hidden */
    }

    input[type='number'] {
        -moz-appearance: textfield;
        /* Firefox */
    }

    button {
        font-family: 'Poppins', sans-serif !important;

        &:focus {
        outline: none !important;
        }
    }

    &.container-table-icon {
        display: flex;
        justify-content: flex-end;
        padding-right: 1rem;

        i {
        padding: 0.3rem;
        }
    }

    svg {
        &:hover {
        #hover_blue {
            transition: 0.5s;
            fill:  ${({ theme }) => theme.colors.blueDefault} !important;
        }
        #hover_green {
            transition: 0.5s;
            fill:  ${({ theme }) => theme.colors.greenHover} !important;
        }
        #hover_red {
            transition: 0.5s;
            fill: ${({ theme }) => theme.colors.redHover} !important;
        }
        }
    }

    &.input-icon-container {
        position: relative;
        img {
        position: absolute;
        padding: 0.6rem;
        }

        i {
        position: absolute;
        padding: 0.4rem 0.6rem;
        }
    }

    &.input-icon {
        padding-left: 2.3rem !important;
    }

    &.form-label {
        color:  ${({ theme }) => theme.colors.blueFont};
        font-weight: 400;
        font-size: 0.75rem;
    }

    &.form-control {
        background-color:  ${({ theme }) => theme.colors.white} !important;
        border: 0;
        font-weight: 400 !important;
        font-family: 'Poppins', sans-serif !important;
        border-radius: 0.5rem !important;
        padding: 0.75rem;
        color:  ${({ theme }) => theme.colors.blueFont};
        margin-bottom: 1.25rem;

        @media (max-width: 1024px) {
        background:  ${({ theme }) => theme.colors.backgroundBlue} !important;
        }

        &::placeholder {
        color:  ${({ theme }) => theme.colors.blueFont};
        }

        &:focus {
        box-shadow: 0 0 0 0.1rem  ${({ theme }) => theme.colors.blueDefault};
        color:  ${({ theme }) => theme.colors.blueFont};
        }
    }

    &.text-error {
        margin-top: -1.25rem;
        margin-bottom: 1.25rem;
        margin-left: 0.625rem;
        color:  ${({ theme }) => theme.colors.red};
    }

    &.input-group {
        margin-bottom: 1.25rem;
    }

    &.input-group > .input-group-prepend > .input-group-text {
        border-radius: 0.625rem 0 0 0.625rem !important;
    }

    &.modal-backdrop {
        background: rgba(104, 170, 255, 0.5) !important;
        backdrop-filter: blur(4px);
    }

    &.MuiCircularProgress-colorPrimary {
        color:  ${({ theme }) => theme.colors.white} !important;
    }

    &.primary-button {
        background:  ${({ theme }) => theme.colors.blueDefault};
        color: ${({ theme }) => theme.colors.white};
        text-transform: unset;
        font-size: 1rem;
        padding: 0.3rem;
        height: 2.3rem;
        border-radius: 0.5rem;
        font-family: 'Poppins', sans-serif !important;
        font-weight: 400;

        @media (max-width: 1024px) {
        font-size: 0.8rem;
        }

        &:hover {
        background-color:  ${({ theme }) =>
          theme.colors.blueDefault} !important;
        }
    }
    &.secundary-button {
        background: transparent;
        color: ${({ theme }) => theme.colors.blueDefault};
        border: 2px solid ${({ theme }) => theme.colors.blueDefault};
        text-transform: unset;
        font-size: 1rem;
        padding: 0.3rem;
        height: 2.3rem;
        border-radius: 0.5rem;
        font-family: 'Poppins', sans-serif !important;
        font-weight: 400;

        @media (max-width: 1024px) {
        font-size: 0.8rem;
        }

        &:hover {
        background-color: ${({ theme }) => theme.colors.white} !important;
        }
    }

    &.link-button {
        background-color: transparent;
        border: 0;
        font-family: 'Poppins', sans-serif !important;
        color: ${({ theme }) => theme.colors.blueDefault};
        font-size: 0.75rem;
        font-weight: 500;
    }

    //////////////////---check-box---/////////////////////////

    /* Base for label styling */
    [type='checkbox']:not(:checked),
    [type='checkbox']:checked {
        position: absolute;
        left: 0;
        opacity: 0.01;
    }
    [type='checkbox']:not(:checked) + label,
    [type='checkbox']:checked + label {
        position: relative;
        padding-left: 2em;
        font-size: 1.05em;
        line-height: 1.7;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.blueFont};
        font-size: 0.7rem;
    }

    /* checkbox aspect */
    [type='checkbox']:not(:checked) + label:before,
    [type='checkbox']:checked + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1.4em;
        height: 1.4em;
        border: 1px solid ${({ theme }) => theme.colors.blueFont};
        background: #fff;
        border-radius: 0.3em;
        -webkit-transition: all 0.275s;
        transition: all 0.275s;
    }

    /* checked mark aspect */
    [type='checkbox']:not(:checked) + label:after,
    [type='checkbox']:checked + label:after {
        content: '\2713\0020';
        position: absolute;
        top: 0.525em;
        left: 0.18em;
        font-size: 1.375em;
        color: ${({ theme }) => theme.colors.blueDefault};
        line-height: 0;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
    }

    /* checked mark aspect changes */
    [type='checkbox']:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0) rotate(45deg);
        transform: scale(0) rotate(45deg);
    }

    [type='checkbox']:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1) rotate(0);
        transform: scale(1) rotate(0);
    }

    /* Disabled checkbox */
    [type='checkbox']:disabled:not(:checked) + label:before,
    [type='checkbox']:disabled:checked + label:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #e9e9e9;
    }

    [type='checkbox']:disabled:checked + label:after {
        color: #777;
    }

    [type='checkbox']:disabled + label {
        color: #aaa;
    }

    /* Accessibility */
    [type='checkbox']:checked:focus + label:before,
    [type='checkbox']:not(:checked):focus + label:before {
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 1px ${({
          theme,
        }) => theme.colors.blueDefault};
    }

    /* hover style just for information */
    label:hover:before {
        border: 2px solid ${({ theme }) => theme.colors.blueDefault} !important;
    }

    /* Make clicks pass-through */
    #nprogress {
        pointer-events: none;
    }

    #nprogress .bar {
        background: ${({ theme }) => theme.colors.blueDefault};

        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;

        width: 100%;
        height: 3px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${({ theme }) =>
          theme.colors.blueDefault}, 0 0 5px${({ theme }) =>
  theme.colors.blueDefault};
        opacity: 1;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
    }

    #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;

        border: solid 2px transparent;
        border-top-color: ${({ theme }) => theme.colors.blueDefault};
        border-left-color: ${({ theme }) => theme.colors.blueDefault};
        border-radius: 50%;

        -webkit-animation: nprogress-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
        0% {
        -webkit-transform: rotate(0deg);
        }
        100% {
        -webkit-transform: rotate(360deg);
        }
    }
    @keyframes nprogress-spinner {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-weight: 500;
    }

`;
