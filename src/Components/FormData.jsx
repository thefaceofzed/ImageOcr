// FormData.jsx
const FormData = ({ extractedData }) => {
  return (
    <form className="p-4 border rounded shadow-md">
      {extractedData.documents && extractedData.documents.length > 0 && (
        <div>
          {Object.entries(extractedData.documents[0].data).map(([key, value]) => (
            <div key={key} className="mb-4">
              <label className="block font-bold mb-1">{key}</label>
              {key === 'picture' && value[0].value !== undefined ? (
                <img
                  src={`data:image/jpeg;base64,${value[0].value}`}
                  alt="Picture"
                  className="w-full rounded"
                />
              ) : key === 'signature' && value[0].value !== undefined ? (
                <img  
                  src={`data:image/jpeg;base64,${value[0].value}`}
                  alt="Signature"
                  className="w-full rounded"
                />
              ) : (
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-black"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};


export default FormData;