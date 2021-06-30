import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Pause(props) {
    return (
        <Svg
            viewBox="0 0 20 20"
            {...props}
        >
            <Path
                d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                fill='rgba(0,0,0,0.4)'
            />
            <Path d="M11 7h2v6h-2V7zM7 7h2v6H7V7z" fill='rgba(0,0,0,0.4)' />
        </Svg>
    )
}

export default Pause
