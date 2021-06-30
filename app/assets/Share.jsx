import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Share(props) {
    return (
        <Svg
            viewBox="0 0 512 448"
            {...props}
        >
            <Path
                d="M503.691 157.836L327.687 5.851C312.281-7.454 288 3.347 288 24.015v80.053C127.371 105.907 0 138.1 0 290.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 280.814 132.917 242.316 288 240.085V328c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
                fill="#fff"
            />
            <Path
                d="M323.765 10.392h.001l176.003 151.985h.001c8.312 7.18 8.302 20.075-.001 27.246 0 0 0 0 0 0l-176.004 152 3.922 4.541-3.922-4.541C312.196 351.614 294 343.472 294 328V233.998l-6.086.088c-38.96.56-72.684 3.398-100.632 9.718-27.925 6.314-50.526 16.203-66.802 31.196-33.136 30.522-37.634 79.582-14.797 152.618l5.727-1.791-5.727 1.791c1.597 5.104-.537 9.614-4.588 12.264-4.116 2.692-9.662 3.049-14.233-.276l-3.529 4.852 3.53-4.852C44.294 408.644 6 349.434 6 290.326c0-37.208 7.777-66.659 21.577-90.012 13.792-23.339 33.83-40.975 58.98-54.202 50.569-26.595 121.32-35.126 201.512-36.045L294 110V24.015C294 8.56 312.188.393 323.765 10.392z"
                stroke="#000"
                strokeWidth={15}
            />
        </Svg>
    )
}

export default Share
