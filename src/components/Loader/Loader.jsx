import { ScaleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
      }}
    >
      <ScaleLoader loading={true} size={15} color="#FFFFFF" />
    </div>
  );
};

export default Loader;
