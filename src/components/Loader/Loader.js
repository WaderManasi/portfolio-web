import React from 'react'
import styles from './Loader.module.css'
function Loader() {

    return (
        <>
        <div className={styles.loading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="main-ctr">
        <svg xmlns="http://www.w3.org/2000/svg" width="294" height="241" viewBox="0 0 294 241">
          <g id="group" fill="none" fill-rule="evenodd">
            <g id="smile">
              <path id="smile-up" stroke="#FFF" stroke-width="30" d="M238.797 75.04C222.935 40.772 188.243 17 148 17c-39.62 0-73.857 23.04-90.046 56.453" stroke-linecap="round"/>
              <path id="smile-down" stroke="#FFF" stroke-width="30" d="M238.843 166c-15.863 34.268-50.554 58.04-90.797 58.04-39.62 0-73.857-23.04-90.046-56.453" stroke-linecap="round"/>
              <path id="bg" fill="#FFF" d="M43 2h211v237H43z" opacity=".1"/>
            </g>
            <path id="eye-left" fill="#FFF" d="M148 173c29.27 0 53-23.73 53-53s-23.73-53-53-53c-4.956 0-9.753.68-14.303 1.952C111.374 75.194 95 95.685 95 120c0 29.27 23.73 53 53 53z"/>
            <path id="eye-right" fill="#FFF" d="M148 173c29.27 0 53-23.73 53-53s-23.73-53-53-53c-4.016 0-7.927.447-11.687 1.293C112.665 73.615 95 94.745 95 120c0 29.27 23.73 53 53 53z"/>
            <path id="eye-to-left" fill="#FFF" d="M106 143c12.15 0 22-9.85 22-22s-9.85-22-22-22c-2.028 0-3.992.274-5.857.788C90.836 102.352 84 110.878 84 121c0 12.15 9.85 22 22 22z"/>
            <path id="eye-to-right" fill="#FFF" d="M187 143c12.15 0 22-9.85 22-22s-9.85-22-22-22c-3.286 0-6.404.72-9.204 2.012C170.242 104.496 165 112.136 165 121c0 12.15 9.85 22 22 22z"/>
          </g>
        </svg>
        <h1 class="hello"></h1>
      </div>
      </>
    )
}

export default Loader
