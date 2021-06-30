import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeartFill(props) {
    return (
        <Svg
            viewBox="0 0 392 368"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M195.998 32.194c108.731-111.769 380.583 83.815 0 335.307-380.583-251.468-108.731-447.076 0-335.307z"
                fill="#fff"
            />
            <Path
                d="M191.697 36.378l4.301 4.42 4.301-4.42C251.455-16.208 341.808 3.199 374.15 66.359c15.973 31.193 17.963 73.679-7.655 124.222-25.393 50.098-77.901 107.992-170.497 169.719-92.596-61.721-145.104-119.612-170.497-169.709C-.117 140.05 1.873 97.563 17.846 66.368 50.188 3.205 140.54-16.207 191.697 36.378z"
                stroke="#000"
                strokeWidth={10}
            />
        </Svg>
    )
}

export default HeartFill
