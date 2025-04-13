import PropTypes from "prop-types";

function Sidebar(props) {

  const {handleToggelModal, data} = props;

  function OnClick(){
    handleToggelModal();
  }

  return (
    <div className="sidebar" >
      <div onClick={OnClick} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer" >
          <p className="descriptionTitle" >{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={OnClick} >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  handleToggelModal: PropTypes.func,
  data: PropTypes.object
};

export default Sidebar