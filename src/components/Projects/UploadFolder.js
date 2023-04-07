import React from "react";
import JSZip from "jszip";

function UploadFolder({ setzipFile, setzipFilename }) {
  const handleFolderSelect = (event) => {
    const folderPath = event.target.files[0].webkitRelativePath;
    const folderName = folderPath.split("/")[0];
    setzipFilename(folderName);

    console.log("Folder", folderName);
    const files = event.target.files;
    const reader = new FileReader();
    const zip = new JSZip(); // Create a new zip object
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileArrayBuffer = fileReader.result;
        zip.file(file.webkitRelativePath, fileArrayBuffer); // Add each file to the zip object
        if (i === files.length - 1) {
          zip.generateAsync({ type: "blob" }).then((content) => {
            console.log("Zipped file", content); // Log the zip file to the console

            const reader = new FileReader();
            reader.onloadend = () => {
              const base64data = reader.result;
              console.log(base64data);
            };
            reader.readAsDataURL(content);
            setzipFile(content);
            for (let j = 0; j < files.length; j++) {
              console.log(files[j].webkitRelativePath);
            }
          });
        }
      };
      fileReader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" webkitdirectory="true" onChange={handleFolderSelect} />
    </div>
  );
}

export default UploadFolder;
