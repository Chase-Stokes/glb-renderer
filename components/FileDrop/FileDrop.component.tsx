import React, { FC, useEffect, useState, DragEvent, ChangeEvent, useRef } from 'react'
import { DropZone, FlexBox, FileDropContainer } from './FileDrop.style'
 

interface FileDropProps {
  onDrop: (files: FileList) => void
}

const FileDrop: React.FC<FileDropProps> = ({ onDrop }) => {
  const [dropping, setDropping] = useState(false)

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDropping(true)
  }

  const handleDragLeave = () => {
    setDropping(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDropping(false)
    const files = event.dataTransfer.files
    onDrop(files)
  }

  return (
    <FileDropContainer
      dropping={dropping}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <FlexBox col justifyContent="center" alignItems="center">
        <span>Drag and drop files here</span>
        <span>or</span>
        <label htmlFor="file-input">
          <span>select files</span>
          <input id="file-input" type="file" style={{ display: 'none' }} onChange={(e) => onDrop(e.target.files)} />
        </label>
      </FlexBox>
      {dropping && <DropZone />}
    </FileDropContainer>
  )
}

export default FileDrop