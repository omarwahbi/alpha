import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import storage from "../firebaseConfig";
export default function OurClints() {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    async function getFileList() {
      const storageRef = ref(storage, "/Clints-logos/");
      const listResult = await listAll(storageRef);

      const filePromises = listResult.items.map(async (fileRef) => {
        const url = await getDownloadURL(fileRef);
        const metadata = await getMetadata(fileRef);
        const fileName = metadata.name;
        return { fileName, url };
      });

      const files = await Promise.all(filePromises);
      setFileList(files);
      console.log(files);
    }

    getFileList();
  }, []);

  return (
    <div className="clients-logos">
      <div className="row g-1">
        {fileList.map((file) => {
          return (
            <div className="col-sm-3 col-6 d-flex align-items-center justify-content-center">
              <img src={file.url} className="clints-logo" alt={file.fileName} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
