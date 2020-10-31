import React, { useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null); // error handler hook

    const types =['image/png', 'image/jpeg'];

const changeHandler = (e) => {
   // show that the form is working console.log("changed"); then remove this line and add the following
   let selected = e.target.files[0];
   if (selected && types.includes(selected.type)) {
       setFile(selected);
       setError(''); // reset error flag
       console.log(selected); // this will display the metadata for the selected file
   } else {
       setFile(null); // if they don't choose a png or jpeg we set the state to null
       setError('Please select an image file (png or jpeg)');
   }
}

    return (
        <form>
            <label>
        <input type="file" onChange={ changeHandler} />
        <span>+</span>
        </label>
        <div className="output">
    { error && <div className="error">{ error }</div> }
    { file && <div>{ file.name }</div> }
    { file && <ProgressBar file={ file } setFile={setFile}  /> }
    </div>
        </form>
    )
}

export default UploadForm;