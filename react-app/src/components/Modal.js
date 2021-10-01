function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHander() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHander}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
