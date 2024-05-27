/* eslint-disable react/no-unknown-property */
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

import './Icons.css';

const Icons = () => (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="android" viewBox="0 0 14 16" fill="currentColor">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="M11.2 5.2H2.8c-.2 0-.3.1-.3.3v6.7c0 .2.2.3.3.3h1.5v2.3c0 .5.4.9 1 .9s1-.4 1-.9v-2.3h1.4v2.3c0 .5.4.9 1 .9s1-.4 1-.9v-2.3h1.5c.2 0 .3-.1.3-.3V5.5c.1-.2-.1-.3-.3-.3zM1 5.2c-.6 0-1 .4-1 .9V10c0 .5.4.9 1 .9s1-.4 1-.9V6.1c0-.5-.4-.9-1-.9zm12 0c-.6 0-1 .4-1 .9V10c0 .5.4.9 1 .9s1-.4 1-.9V6.1c0-.5-.5-.9-1-.9zM2.9 4.7h8.3c.2 0 .4-.2.3-.4-.3-1.2-1.1-2.3-2.2-2.9L10 .3c0-.1 0-.2-.1-.2-.1-.1-.2-.1-.3 0l-.7 1.2C8.3 1 7.7.9 7 .9s-1.3.1-1.9.4L4.4.1C4.3 0 4.2 0 4.1 0c-.1.1-.1.2 0 .3l.7 1.2c-1.1.6-2 1.6-2.2 2.9-.1.1.1.3.3.3zm6.2-2.1c.2 0 .4.2.4.4s-.2.3-.4.3-.4-.2-.4-.4.2-.3.4-.3zm-4.2 0c.2 0 .4.2.4.4s-.2.4-.4.4-.4-.2-.4-.4.2-.4.4-.4z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="macos" viewBox="0 0 42 42" fill="currentColor">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="M23.091,14.018 L23.091,13.676 L22.028,13.749 C21.727,13.768 21.501,13.832 21.349,13.94 C21.197,14.049 21.121,14.2 21.121,14.393 C21.121,14.581 21.196,14.731 21.347,14.842 C21.497,14.954 21.699,15.009 21.951,15.009 C22.112,15.009 22.263,14.984 22.402,14.935 C22.541,14.886 22.663,14.817 22.765,14.729 C22.867,14.642 22.947,14.538 23.004,14.417 C23.062,14.296 23.091,14.163 23.091,14.018 Z M21,0.25 C9.421,0.25 0.25,9.421 0.25,21 C0.25,32.58 9.421,41.75 21,41.75 C32.579,41.75 41.75,32.58 41.75,21 C41.75,9.421 32.58,0.25 21,0.25 Z M25.028,12.549 C25.126,12.274 25.264,12.038 25.443,11.842 C25.622,11.646 25.837,11.495 26.089,11.389 C26.341,11.283 26.622,11.23 26.931,11.23 C27.21,11.23 27.462,11.272 27.686,11.355 C27.911,11.438 28.103,11.55 28.264,11.691 C28.425,11.832 28.553,11.996 28.647,12.184 C28.741,12.372 28.797,12.571 28.816,12.78 L27.983,12.78 C27.962,12.665 27.924,12.557 27.87,12.458 C27.816,12.359 27.745,12.273 27.657,12.2 C27.568,12.127 27.464,12.07 27.345,12.029 C27.225,11.987 27.091,11.967 26.94,11.967 C26.763,11.967 26.602,12.003 26.459,12.074 C26.315,12.145 26.192,12.246 26.09,12.376 C25.988,12.506 25.909,12.665 25.853,12.851 C25.796,13.038 25.768,13.245 25.768,13.473 C25.768,13.709 25.796,13.921 25.853,14.107 C25.909,14.294 25.989,14.451 26.093,14.58 C26.196,14.709 26.321,14.808 26.466,14.876 C26.611,14.944 26.771,14.979 26.945,14.979 C27.23,14.979 27.462,14.912 27.642,14.778 C27.822,14.644 27.938,14.448 27.992,14.19 L28.826,14.19 C28.802,14.418 28.739,14.626 28.637,14.814 C28.535,15.002 28.403,15.162 28.241,15.295 C28.078,15.428 27.887,15.531 27.667,15.603 C27.447,15.675 27.205,15.712 26.942,15.712 C26.63,15.712 26.349,15.66 26.096,15.557 C25.844,15.454 25.627,15.305 25.447,15.112 C25.267,14.919 25.128,14.684 25.03,14.407 C24.932,14.13 24.883,13.819 24.883,13.472 C24.881,13.133 24.93,12.825 25.028,12.549 Z M13.175,11.287 L14.009,11.287 L14.009,12.028 L14.025,12.028 C14.076,11.905 14.143,11.794 14.225,11.698 C14.307,11.601 14.401,11.519 14.509,11.45 C14.616,11.381 14.735,11.329 14.863,11.293 C14.992,11.257 15.128,11.239 15.27,11.239 C15.576,11.239 15.835,11.312 16.045,11.458 C16.256,11.604 16.406,11.814 16.494,12.088 L16.515,12.088 C16.571,11.956 16.645,11.838 16.736,11.734 C16.827,11.63 16.932,11.54 17.05,11.466 C17.168,11.392 17.298,11.336 17.439,11.297 C17.58,11.258 17.728,11.239 17.884,11.239 C18.099,11.239 18.294,11.273 18.47,11.342 C18.646,11.411 18.796,11.507 18.921,11.632 C19.046,11.757 19.142,11.909 19.209,12.087 C19.276,12.265 19.31,12.463 19.31,12.681 L19.31,15.662 L18.44,15.662 L18.44,12.89 C18.44,12.603 18.366,12.38 18.218,12.223 C18.071,12.066 17.86,11.987 17.586,11.987 C17.452,11.987 17.329,12.011 17.217,12.058 C17.106,12.105 17.009,12.171 16.929,12.256 C16.848,12.34 16.785,12.442 16.74,12.56 C16.694,12.678 16.671,12.807 16.671,12.947 L16.671,15.662 L15.813,15.662 L15.813,12.818 C15.813,12.692 15.793,12.578 15.754,12.476 C15.715,12.374 15.66,12.287 15.587,12.214 C15.515,12.141 15.426,12.086 15.323,12.047 C15.219,12.008 15.103,11.988 14.974,11.988 C14.84,11.988 14.716,12.013 14.601,12.063 C14.487,12.113 14.389,12.182 14.307,12.27 C14.225,12.359 14.161,12.463 14.116,12.584 C14.072,12.704 14,12.836 14,12.978 L14,15.661 L13.175,15.661 L13.175,11.287 Z M15.068,32.226 C11.243,32.226 8.844,29.568 8.844,25.326 C8.844,21.084 11.243,18.417 15.068,18.417 C18.893,18.417 21.283,21.084 21.283,25.326 C21.283,29.567 18.893,32.226 15.068,32.226 Z M22.15,15.651 C22.009,15.687 21.865,15.705 21.717,15.705 C21.499,15.705 21.3,15.674 21.119,15.612 C20.937,15.55 20.782,15.463 20.652,15.35 C20.522,15.237 20.42,15.101 20.348,14.941 C20.275,14.781 20.239,14.603 20.239,14.407 C20.239,14.023 20.382,13.723 20.668,13.507 C20.954,13.291 21.368,13.165 21.911,13.13 L23.091,13.062 L23.091,12.724 C23.091,12.472 23.011,12.279 22.851,12.148 C22.691,12.017 22.465,11.951 22.172,11.951 C22.054,11.951 21.943,11.966 21.841,11.995 C21.739,12.025 21.649,12.067 21.571,12.122 C21.493,12.177 21.428,12.243 21.378,12.32 C21.327,12.396 21.292,12.482 21.273,12.576 L20.455,12.576 C20.46,12.383 20.508,12.204 20.598,12.04 C20.688,11.876 20.81,11.734 20.965,11.613 C21.12,11.492 21.301,11.398 21.511,11.331 C21.721,11.264 21.949,11.23 22.196,11.23 C22.462,11.23 22.703,11.263 22.919,11.331 C23.135,11.399 23.32,11.494 23.473,11.619 C23.626,11.744 23.744,11.894 23.827,12.07 C23.91,12.246 23.952,12.443 23.952,12.66 L23.952,15.661 L23.119,15.661 L23.119,14.932 L23.098,14.932 C23.036,15.05 22.958,15.157 22.863,15.252 C22.767,15.347 22.66,15.429 22.541,15.496 C22.421,15.563 22.291,15.615 22.15,15.651 Z M27.653,32.226 C24.736,32.226 22.753,30.698 22.615,28.299 L24.514,28.299 C24.662,29.67 25.987,30.578 27.802,30.578 C29.543,30.578 30.794,29.67 30.794,28.429 C30.794,27.355 30.034,26.706 28.275,26.262 L26.561,25.836 C24.097,25.225 22.977,24.104 22.977,22.261 C22.977,19.992 24.959,18.417 27.784,18.417 C30.544,18.417 32.47,20.001 32.544,22.279 L30.664,22.279 C30.534,20.908 29.414,20.065 27.746,20.065 C26.088,20.065 24.94,20.917 24.94,22.149 C24.94,23.121 25.662,23.696 27.422,24.14 L28.867,24.501 C31.618,25.168 32.748,26.252 32.748,28.197 C32.747,30.679 30.784,32.226 27.653,32.226 Z M15.068,20.12 C12.447,20.12 10.808,22.13 10.808,25.325 C10.808,28.511 12.447,30.521 15.068,30.521 C17.68,30.521 19.328,28.511 19.328,25.325 C19.329,22.13 17.68,20.12 15.068,20.12 Z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="windows" viewBox="0 0 14 16" fill="currentColor">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M0 13.7L6.5 14.6 6.5 8.4 0 8.4z" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M0 7.6L6.5 7.6 6.5 1.3 0 2.2z" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M7.2 14.7L15.9 15.9 15.9 8.4 15.9 8.4 7.2 8.4z" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M7.2 1.2L7.2 7.6 15.9 7.6 15.9 0z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="ios" viewBox="0 0 512 512" fill="currentColor">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="M395.748 272.046c-.646-64.841 52.88-95.938 55.271-97.483-30.075-44.01-76.925-50.039-93.62-50.736-39.871-4.037-77.798 23.474-98.033 23.474-20.184 0-51.409-22.877-84.476-22.276-43.458.646-83.529 25.269-105.906 64.19-45.152 78.35-11.563 194.42 32.445 257.963 21.504 31.104 47.146 66.038 80.813 64.79 32.421-1.294 44.681-20.979 83.878-20.979 39.196 0 50.215 20.979 84.524 20.335 34.888-.648 56.991-31.699 78.347-62.898 24.694-36.084 34.862-71.019 35.462-72.812-.775-.354-68.031-26.119-68.705-103.568zM331.28 81.761C349.149 60.082 361.21 30.005 357.92 0c-25.739 1.048-56.938 17.145-75.405 38.775-16.57 19.188-31.075 49.813-27.188 79.218 28.734 2.242 58.065-14.602 75.953-36.232z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="router" viewBox="0 0 30 30" fill="currentColor">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="M17.646 2.332a1 1 0 0 0-.697 1.719 6.984 6.984 0 0 1 0 9.898 1 1 0 1 0 1.414 1.414c3.507-3.506 3.507-9.22 0-12.726a1 1 0 0 0-.717-.305zm-12.662.654A1 1 0 0 0 4 4v14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H12V9a1 1 0 0 0-1.016-1.014A1 1 0 0 0 10 9v9H6V4a1 1 0 0 0-1.016-1.014zm9.834 2.176a1 1 0 0 0-.697 1.717 2.985 2.985 0 0 1 0 4.242 1 1 0 1 0 1.414 1.414 5.014 5.014 0 0 0 0-7.07 1 1 0 0 0-.717-.303zM5 21a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="edit" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="delete" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m3 6h2 16" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="m19 6v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2-2v-14m3 0v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m10 11v6" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m14 11v6" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="back" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m19 12h-14" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m12 19-7-7 7-7" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="dashboard" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2-2z" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m9 22v-10h6v10" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="filters" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m22 3h-20l8 9.46v6.54l4 2v-8.54z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="log" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m14 2h-8a2 2 0 0 0 -2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-12z" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m14 2v6h6" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m16 13h-8" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m16 17h-8" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="m10 9h-1-1" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="setup" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <circle cx="12" cy="12" r="10"></circle>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <line x1="12" y1="17" x2="12" y2="17"></line>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="settings" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <circle cx="12" cy="12" r="3" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="m19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1 -2.83 0l-.06-.06a1.65 1.65 0 0 0 -1.82-.33 1.65 1.65 0 0 0 -1 1.51v.17a2 2 0 0 1 -2 2 2 2 0 0 1 -2-2v-.09a1.65 1.65 0 0 0 -1.08-1.51 1.65 1.65 0 0 0 -1.82.33l-.06.06a2 2 0 0 1 -2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0 -1.51-1h-.17a2 2 0 0 1 -2-2 2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0 -.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51v-.17a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 -.33 1.82v.08a1.65 1.65 0 0 0 1.51 1h.17a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-.09a1.65 1.65 0 0 0 -1.51 1z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="refresh" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <polyline points="23 4 23 10 17 10"></polyline>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <polyline points="1 20 1 14 7 14"></polyline>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="dns_privacy" viewBox="0 0 30 30" stroke="none" fill="currentColor"
                strokeLinecap="round" strokeLinejoin="round">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                d="M15 3C10.57 3 6.701 5.419 4.623 9h2.39a10.063 10.063 0 0 1 4.05-3.19c-.524.89-.961 1.973-1.3 3.19h2.108c.79-2.459 1.998-4 3.129-4s2.339 1.541 3.129 4h2.107c-.338-1.217-.774-2.3-1.299-3.19A10.062 10.062 0 0 1 22.989 9h2.389C23.298 5.419 19.43 3 15 3zm7.035 9.129c-1.372 0-2.264.73-2.264 1.842 0 .896.538 1.463 1.579 1.66l.75.15c.65.13.898.3.898.615 0 .375-.37.635-.91.635-.6 0-1.014-.265-1.049-.68h-1.38c.023 1.097.93 1.776 2.37 1.776 1.491 0 2.399-.717 2.399-1.904 0-.903-.504-1.412-1.63-1.63l-.734-.142c-.6-.118-.851-.3-.851-.611 0-.378.336-.62.844-.62.509 0 .891.28.923.682h1.336c-.024-1.053-.948-1.773-2.28-1.773zm-16.185.148v5.696h2.39c1.712 0 2.662-1.033 2.662-2.903 0-1.779-.966-2.793-2.662-2.793H5.85zm6.933.004v5.692h1.373v-3.235h.076l2.377 3.235h1.149V12.28h-1.373v3.203h-.076l-2.372-3.203h-1.154zm-5.486 1.16h.682c.912 0 1.449.596 1.449 1.657 0 1.128-.51 1.713-1.45 1.713h-.681v-3.37zM4.623 21C6.701 24.581 10.57 27 15 27c4.43 0 8.299-2.419 10.377-6h-2.389a10.063 10.063 0 0 1-4.049 3.19c.524-.89.96-1.973 1.297-3.19H18.13c-.79 2.459-1.996 4-3.127 4-1.131 0-2.339-1.541-3.129-4h-2.11c.339 1.217.776 2.3 1.3 3.19A10.056 10.056 0 0 1 7.013 21h-2.39z"></path>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="question" width="20px" height="20px">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <g transform="translate(-982.000000, -454.000000) translate(416.000000, 440.000000) translate(564.000000, 12.000000)"
               fill="none" fillRule="evenodd">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <circle stroke="currentColor" strokeWidth="1.5" cx="12" cy="12" r="9.25" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <path
                    d="M11.011 13.915c0-.627.076-1.126.227-1.498.15-.372.427-.738.829-1.1.401-.36.669-.653.802-.88.133-.226.2-.464.2-.715 0-.757-.346-1.136-1.039-1.136-.329 0-.592.102-.79.306-.197.204-.3.485-.309.843H9c.009-.856.283-1.525.822-2.01.54-.483 1.276-.725 2.208-.725.941 0 1.671.23 2.19.689.52.46.78 1.108.78 1.945 0 .381-.084.74-.253 1.079-.169.338-.464.714-.886 1.126l-.54.517a1.85 1.85 0 00-.578 1.15l-.027.41H11.01zm-.193 2.063c0-.3.101-.547.303-.742.202-.195.46-.292.776-.292.315 0 .574.097.776.292a.988.988 0 01.303.742.98.98 0 01-.297.733c-.197.193-.458.289-.782.289s-.585-.096-.783-.289a.98.98 0 01-.296-.733z"
                    fill="currentColor" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </g>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="network" viewBox="0 0 50 50" fill="currentColor" strokeLinecap="round"
                strokeLinejoin="round">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="M 25 7 C 15.941406 7 7.339844 10.472656 0.78125 16.773438 L 0.0625 17.464844 L 5.59375 23.230469 L 6.320313 22.539063 C 11.378906 17.679688 18.015625 15 25 15 C 31.984375 15 38.621094 17.679688 43.683594 22.539063 L 44.40625 23.230469 L 49.941406 17.464844 L 49.21875 16.769531 C 42.660156 10.46875 34.058594 7 25 7 Z M 25 19 C 19.046875 19 13.394531 21.28125 9.085938 25.421875 L 8.363281 26.113281 L 13.921875 31.90625 L 14.644531 31.210938 C 17.464844 28.496094 21.144531 27 25 27 C 28.855469 27 32.535156 28.496094 35.355469 31.210938 L 36.078125 31.90625 L 41.636719 26.113281 L 40.917969 25.421875 C 36.605469 21.28125 30.953125 19 25 19 Z M 25 31 C 22.15625 31 19.453125 32.089844 17.390625 34.074219 L 16.671875 34.765625 L 25 43.441406 L 33.328125 34.765625 L 32.609375 34.074219 C 30.546875 32.089844 27.84375 31 25 31 Z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="location" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round"
                strokeLinejoin="round">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="M12,2C8.134,2,5,5.134,5,9c0,5,7,13,7,13s7-8,7-13C19,5.134,15.866,2,12,2z M12,11.5c-1.381,0-2.5-1.119-2.5-2.5 c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C14.5,10.381,13.381,11.5,12,11.5z" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="cross" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <line x1="18" y1="6" x2="6" y2="18"></line>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <line x1="6" y1="6" x2="18" y2="18"></line>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="plus" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <line x1="12" y1="5" x2="12" y2="19"></line>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <line x1="5" y1="12" x2="19" y2="12"></line>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="update" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="M19 12c0-3.866-3.134-7-7-7-2.1476 0-4.0692.967-5.3533 2.4895M5.0007 12c0 3.866 3.134 7 7 7 2.1476 0 4.0692-.967 5.3533-2.4895" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M3 12.849L5.017 11 7 13M21 11.151L18.983 13 17 11" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="privacy" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="M2.5866 12.3095C6.794 7.3586 11.1651 5.7805 15.7 7.5755m2.4625 1.4893c1.0875.8216 2.1525 1.9173 3.2428 3.1815M2.6235 12.2657c2.0598 2.3114 3.8824 3.8055 5.4679 4.4823M11.0093 17.5762c3.5788.4657 6.8214-1.2685 10.3071-5.3102M4.33 21.33L20.319 2.697" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M10.2684 14.379c-2.5431-2.023 0-6.5648 3.6615-4.183" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path
                d="M17.3386 18.4244c-1.0523 1.6302-2.7179 2.8256-5.3388 2.8256-2.6208 0-4.2863-1.1953-5.3386-2.8255-1.754-2.7172-1.8987-6.5446-1.9098-8.3217C7.0486 9.172 9.743 8.75 11.9998 8.75c2.2571 0 4.9519.4222 7.2492 1.3528-.0116 1.777-.1563 5.6044-1.9104 8.3216z" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M12 14v2" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M8 9c0-2.688.0284-6 3.8654-6S16 6.2023 16 9" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="list" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M4 6h16M4 10h13M4 14h16M4 18h8.591" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="detailed_list" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M4 6h16M4 10h16V6H4zM4 14h16v4H4zM4 18h8.591" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="magnifier" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <circle id="Oval" cx="9.5" cy="9.5" r="5.5"></circle>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M14,14 L19,19" id="Line"></path>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="arrow-left" viewBox="0 0 24 24" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <path d="M14 6l-6 6 6 6" stroke="#888" strokeWidth="1.5" fill="none"
                          fillRule="evenodd" strokeLinecap="round" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </svg>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </svg>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="arrow-down" viewBox="0 0 24 24" fill="currentColor">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <svg xmlns="http://www.w3.org/2000/svg">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <path fillRule="evenodd" d="M6.2 8.2a.64.64 0 0 1 .94 0L12 13.32l4.86-5.1a.64.64 0 0 1 .94 0c.27.27.27.71 0 .98l-5.33 5.6a.64.64 0 0 1-.94 0L6.2 9.2a.72.72 0 0 1 0-.98Z" clipRule="evenodd"/>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </svg>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="arrow-right" viewBox="0 0 24 24" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <path d="M10 6l6 6-6 6" stroke="#888" strokeWidth="1.5" fill="none"
                      fillRule="evenodd" strokeLinecap="round" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </svg>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="info" viewBox="0 0 24 24" fill="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <path
                    d="M64 1C29.3 1 1 29.3 1 64s28.3 63 63 63 63-28.3 63-63S98.7 1 64 1zm0 118C33.7 119 9 94.3 9 64S33.7 9 64 9s55 24.7 55 55-24.7 55-55 55z" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <path d="M60 54.5h8v40h-8zM60 35.5h8v8h-8z" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </svg>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="auto" width="24" height="24" viewBox="0 0 24 24" fill="none">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="1.5" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path fillRule="evenodd" clipRule="evenodd" d="M12 3V21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="dark" width="24" height="24" viewBox="0 0 24 24" fill="none">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M3.80737 15.731L3.9895 15.0034C3.71002 14.9335 3.41517 15.0298 3.23088 15.2512C3.0466 15.4727 3.00545 15.7801 3.12501 16.0422L3.80737 15.731ZM14.1926 3.26892L14.3747 2.54137C14.0953 2.47141 13.8004 2.56772 13.6161 2.78917C13.4318 3.01062 13.3907 3.31806 13.5102 3.58018L14.1926 3.26892ZM12 20.2499C8.66479 20.2499 5.79026 18.2708 4.48974 15.4197L3.12501 16.0422C4.66034 19.4081 8.05588 21.7499 12 21.7499V20.2499ZM20.25 11.9999C20.25 16.5563 16.5563 20.2499 12 20.2499V21.7499C17.3848 21.7499 21.75 17.3847 21.75 11.9999H20.25ZM14.0105 3.99647C17.5955 4.89391 20.25 8.13787 20.25 11.9999H21.75C21.75 7.43347 18.6114 3.60193 14.3747 2.54137L14.0105 3.99647ZM13.5102 3.58018C13.9851 4.6211 14.25 5.77857 14.25 6.99995H15.75C15.75 5.5595 15.4371 4.1901 14.875 2.95766L13.5102 3.58018ZM14.25 6.99995C14.25 11.5563 10.5563 15.2499 5.99999 15.2499V16.7499C11.3848 16.7499 15.75 12.3847 15.75 6.99995H14.25ZM5.99999 15.2499C5.30559 15.2499 4.63225 15.1643 3.9895 15.0034L3.62525 16.4585C4.38616 16.649 5.18181 16.7499 5.99999 16.7499V15.2499Z" fill="currentColor" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="light" width="24" height="24" viewBox="0 0 24 24" fill="none">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75Z" fill="currentColor" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path fillRule="evenodd" clipRule="evenodd" d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C13.9987 10.896 13.104 10.0013 12 10Z" fill="currentColor" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="chevron-down" width="24" height="24" viewBox="0 0 24 24">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <g fill="none" fillRule="evenodd">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <path d="M0 0h24v24H0z" fill="#878787" fillOpacity=".01" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M8.036 10.93l3.93 4.07 4.068-3.93" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </g>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="calendar" fill="none" height="24" viewBox="0 0 24 24" width="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <rect x="4" y="5.5" width="16" height="14" rx="3" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M12 4V7" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M8 4L8 7" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M16 4V7" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M9.7397 15.5V11L8 13" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M14.7397 15.5V11L13 13" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="watch" fill="none" height="24" viewBox="0 0 24 24" width="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <circle cx="12" cy="12" r="9" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M16.1215 12.1213H11.8789V7.87866" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="bullets" width="24" height="24" viewBox="0 0 24 24">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path fillRule="evenodd" clipRule="evenodd" d="M12 7C11.1716 7 10.5 6.32843 10.5 5.5C10.5 4.67157 11.1716 4 12 4C12.8284 4 13.5 4.67157 13.5 5.5C13.5 6.32843 12.8284 7 12 7Z" fill="currentColor" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path fillRule="evenodd" clipRule="evenodd" d="M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z" fill="currentColor" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path fillRule="evenodd" clipRule="evenodd" d="M12 20C11.1716 20 10.5 19.3284 10.5 18.5C10.5 17.6716 11.1716 17 12 17C12.8284 17 13.5 17.6716 13.5 18.5C13.5 19.3284 12.8284 20 12 20Z" fill="currentColor" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <symbol id="check" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <path d="M5 11.7665L10.5878 17L19 8" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </symbol>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </svg>
);

export default Icons;
