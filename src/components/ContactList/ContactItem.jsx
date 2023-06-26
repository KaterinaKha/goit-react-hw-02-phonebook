import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <div key={id}>
        <span>{name}</span>: <span> {number}</span>
      </div>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
