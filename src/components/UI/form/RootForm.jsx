
import {useSelector} from "react-redux";
const RootForm = () => {
    const form = useSelector(state => state.formReducer.form)
    return (
        <div>
            {form}
        </div>
    );
};

export default RootForm;