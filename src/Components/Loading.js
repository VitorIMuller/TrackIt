import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
    return (
        <Loader>
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        </Loader>
    )
}
 export default Loading