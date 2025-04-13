import PropTypes from "prop-types";

function Footer(props) {
    
    const {handleToggelModal, data} = props;

    function OnClick(){
        handleToggelModal();
    }
    return (
        <footer>
            <div className="bgGradiant"></div>
            <div>
                <h1>{data?.copyright}</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick = {OnClick}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

Footer.propTypes = {
    handleToggelModal: PropTypes.func,
    data: PropTypes.object
};

export default Footer