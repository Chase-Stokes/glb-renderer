import styled, { css } from 'styled-components'
import CSS from 'csstype'

interface FileUploadContainerProps {
  width?: CSS.Property.Width
  height?: CSS.Property.Height
  background?: string
  dropping?: boolean
}

export const FileDropContainer = styled.div<FileUploadContainerProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${(p) => p.width || '300px'};
  height: ${(p) => p.height || '300px'};
  background-color: ${(p) => p.background || 'white'};
  border: 1px solid #eaecf0;
  border-radius: 8px;
  overflow: hidden;
  ${(p) =>
    p.dropping &&
    css`
      opacity: 0.7;
    `};
`

interface FlexBoxProps {
  col?: boolean
  justifyContent?: 'center' | 'start' | 'end'
  alignItems?: 'center' | 'start' | 'end'
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${(p) => (p.col ? 'column' : 'row')};
  ${(p) =>
    p.justifyContent &&
    css`
      justify-content: ${p.justifyContent};
    `};
  ${(p) =>
    p.alignItems &&
    css`
      align-items: ${p.alignItems};
    `};
  cursor: pointer;
`

export const DropZone = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
