import React from 'react'
import classNames from 'classnames'

import './brand.scoped.scss'



/**
 * @param {Object} props:
 *      @property {string} externalClass : adds external class to the component
 *      @property {string} krdColor : determines the color of the krd text
 *      @property {string} carsColor : determines the color of the cars text
 * 
 * @return {Element} : brand svg element
 */
export default function Brand(props) {
    return (
        <div className={classNames("brand", props.className)} style={{ ...props.style }}>
            <svg id="brand-logo" style={{ height: '100%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.73 21.2">
                <g id="krd" data-name="krd" style={{ fill: props?.krdColor ? props.krdColor : "var(--body-oposite-color)" }}>
                    <path d="M9.84,9.4h7.68L14,18.92,27.28,9.4h8.56L22,20l7.68,10.6H21.12l-7.84-9.52L9.8,30.6H2.12Z" transform="translate(-2.12 -9.4)" />
                    <path d="M37.76,9.4H55.6a3.78,3.78,0,0,1,2.22.6,4.25,4.25,0,0,1,1.34,1.52,6.63,6.63,0,0,1,.66,2,12.25,12.25,0,0,1,.18,2,5.39,5.39,0,0,1-1,3.36A7.37,7.37,0,0,1,56.5,21a12,12,0,0,1-3.32,1.12,30.52,30.52,0,0,1-3.42.46l7.84,8H49L40.8,23l-.44.32L37.72,30.6H30Zm14.48,6.12a1.13,1.13,0,0,0-.12-.54c-.08-.15-.28-.22-.6-.22h-8L41.2,21l3.52-3.56h6.4A.88.88,0,0,0,52,16.9a2.27,2.27,0,0,0,.26-.94Z" transform="translate(-2.12 -9.4)" />
                    <path d="M85,21a27.78,27.78,0,0,1-3.38,4.42,16.54,16.54,0,0,1-3.78,3,16.08,16.08,0,0,1-4.52,1.7,26.4,26.4,0,0,1-5.6.54h-10L65.48,9.4h17.4a4.24,4.24,0,0,1,3.48,1.32,5.13,5.13,0,0,1,1.08,3.36,10.83,10.83,0,0,1-.6,3.38A12.41,12.41,0,0,1,85,21ZM71.28,14.8l-3.8,10.4h1a7.31,7.31,0,0,0,2.24-.42,16.59,16.59,0,0,0,2.56-1.1,15.46,15.46,0,0,0,2.36-1.54,7.12,7.12,0,0,0,1.64-1.74,8.79,8.79,0,0,1,.52-.72,3.43,3.43,0,0,0,.52-.92c.16-.43.33-.84.5-1.24a2.88,2.88,0,0,0,.26-1.12,2.06,2.06,0,0,0-.3-1.14,1.16,1.16,0,0,0-1.06-.46Z" transform="translate(-2.12 -9.4)" />
                </g>
                <g id="krd" data-name="krd" style={{ fill: props?.carsColor ? props.carsColor : "#ed1c24" }}>
                    <path d="M89.21,20.8a10.37,10.37,0,0,1,.84-4,13,13,0,0,1,2.28-3.68,12.7,12.7,0,0,1,3.32-2.7,8,8,0,0,1,4-1.06h16.52c-.78,1-1.56,2-2.34,2.86a26.94,26.94,0,0,1-2.58,2.54h-10.4a2.13,2.13,0,0,0-1.1.34,5.4,5.4,0,0,0-1.12.9,7.3,7.3,0,0,0-1,1.26A6.77,6.77,0,0,0,97,18.68a5.71,5.71,0,0,0-.32,1.64,3.78,3.78,0,0,0,.4,1.62,6.47,6.47,0,0,0,1,1.58,6.14,6.14,0,0,0,1.36,1.2,2.6,2.6,0,0,0,1.42.48h9.56c-.62.91-1.31,1.83-2.08,2.78a17.52,17.52,0,0,1-2.68,2.62h-3.2a26.57,26.57,0,0,1-4.84-.44,13,13,0,0,1-4.24-1.54,8.45,8.45,0,0,1-3-3,9,9,0,0,1-1.14-4.76Z" transform="translate(-2.12 -9.4)" />
                    <path d="M131.09,30.6l-.84-4.52a5,5,0,0,1-.58.92c-.34.45-.71.93-1.12,1.44s-.82,1-1.22,1.4a3.51,3.51,0,0,1-.88.76H109.53c0-.21.08-.31.08-.28V30.2L124,11.8a3.35,3.35,0,0,1,.48-.64,9.57,9.57,0,0,1,.78-.78,10,10,0,0,1,.84-.68,1.3,1.3,0,0,1,.7-.3h6.72a1,1,0,0,1,.74.44,4.21,4.21,0,0,1,.58,1.08,13.12,13.12,0,0,1,.42,1.34l.3,1.18,2.64,17.16Zm-9-5.36h8.12l-1.4-9.4-6.72,9Z" transform="translate(-2.12 -9.4)" />
                    <path d="M147.77,9.4h17.84a3.77,3.77,0,0,1,3.66,2.12,6.55,6.55,0,0,1,.6,2,16.3,16.3,0,0,1,.14,2,5.45,5.45,0,0,1-1,3.36,7.37,7.37,0,0,1-2.5,2.1,12,12,0,0,1-3.32,1.12,31.15,31.15,0,0,1-3.42.46l7.84,8h-8.56L150.81,23l-.44.32-2.64,7.28h-7.68Zm14.48,6.12a1.13,1.13,0,0,0-.12-.54c-.08-.15-.28-.22-.6-.22h-8L151.21,21l3.52-3.56h6.4a.89.89,0,0,0,.86-.54,2.27,2.27,0,0,0,.26-.94Z" transform="translate(-2.12 -9.4)" />
                    <path d="M187,23.88v-.24a2,2,0,0,0-.12-.66.44.44,0,0,0-.44-.34h-8a4.06,4.06,0,0,1-2.16-.58,6,6,0,0,1-1.66-1.48,6.53,6.53,0,0,1-1.06-2,6.69,6.69,0,0,1-.36-2.12,5.21,5.21,0,0,1,.56-2.18A10.89,10.89,0,0,1,175.21,12a8.49,8.49,0,0,1,2-1.84,4,4,0,0,1,2.24-.74h20.4a31.09,31.09,0,0,1-2.1,2.72c-.79.91-1.66,1.81-2.62,2.72h-13.2c-.3,0-.55.2-.76.6a2.13,2.13,0,0,0-.32,1v.2s.05.09.16.18l.24.22a1.41,1.41,0,0,0,.46.3,2.07,2.07,0,0,0,.34.14h7.6a4,4,0,0,1,2.24.62,5.08,5.08,0,0,1,1.5,1.56,7.32,7.32,0,0,1,.84,2,8.79,8.79,0,0,1,.26,2v.24A5.93,5.93,0,0,1,194,26.1a9.11,9.11,0,0,1-1.26,2.18,7.25,7.25,0,0,1-1.8,1.66,3.82,3.82,0,0,1-2.1.66h-20.4a10.3,10.3,0,0,1,.82-1.28c.41-.59.85-1.18,1.32-1.78s.9-1.13,1.3-1.6.64-.7.72-.7h13.6c.4,0,.63-.12.7-.36a3.1,3.1,0,0,0,.1-.76Z" transform="translate(-2.12 -9.4)" />
                </g>
            </svg>
        </div>
    )
}
