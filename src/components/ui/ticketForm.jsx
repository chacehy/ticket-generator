import React from "react";
import {
    FileUploadDropzone,
    FileUploadList,
    FileUploadRoot,
  } from "./file-upload"
  
  const Form = () => {
    return (
      <>
      <h1>Upload Photo :</h1>
      <FileUploadRoot maxW="xl" maxFileSize='5242880' alignItems="stretch" maxFiles={1} mt='30px' rounded='xl' border='dashed' borderColor='gray.300/20' borderRadius='10px'>
        <FileUploadDropzone
          bgColor ='gray.300/10'
          backdropFilter = 'blur(5px)'
          label="Drag and drop here to upload"
          description=".png, .jpg up to 5MB"
        />
        <FileUploadList />
      </FileUploadRoot>
      </>
    )
  }

export default Form