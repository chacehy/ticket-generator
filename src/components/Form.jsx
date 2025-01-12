import React from "react"
import {FileUploadDropzone, FileUploadList, FileUploadRoot,} from "./components/ui/file-upload.jsx"
const Form = () => {
    return (
        <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={10}>
        <FileUploadDropzone
          label="Drag and drop here to upload"
          description=".png, .jpg up to 5MB"
        />
        <FileUploadList />
      </FileUploadRoot>
    )
}

export default Form 