import React,{FC, useState, useEffect} from 'react';
import { render } from 'react-dom';
import MonacoEditor, { monaco } from 'react-monaco-editor';

export const MonacoReactEditor: FC = () =>  {

  const [code, setCode] = useState('// type your code...');
  
   const editorDidMount = (editor:any, monaco:any): void => {
    console.log('editorDidMount', editor);
    editor.focus();
    }
    
  const onChange = (newValue:any, e:any): any =>{
    console.log('onChange', newValue, e);
    }
    
  
    const options = {
      selectOnLineNumbers: true
    };

    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    );
}
