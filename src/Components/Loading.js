import Loader from "react-loader-spinner";

function Loading({ height, width }) {
    return (
        <Loader 
            type="ThreeDots"
            color="#FFF"
            height={height}
            width={width}
        />
    );
}

export default Loading