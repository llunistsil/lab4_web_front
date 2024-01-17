
const PrivateRoute = (props) => {

    props.accessFunction().then((result) => {
        if (!result) {
            props.onFail();
        }
    });

    return (
        props.element
    );
}

export default PrivateRoute;