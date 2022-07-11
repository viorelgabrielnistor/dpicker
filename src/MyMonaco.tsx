import React, {FC, useEffect, useRef} from "react";

import Editor, { useMonaco } from "@monaco-editor/react";

import './myMonaco.css';

export const MyMonaco: FC = (): any => {
  const editorRef = useRef<any>(null);
  // const monaco = useMonaco();

  //   function getCode(){
  //   return ` a few words ... ssss myObj ...ababab`;
  // }
  const abc = ` a few words ... ssss myObj ...ababab`;

const handleEditorDidMount = (editor: any, monaco: any): void => {
    
    monaco.languages.register({id:'myLang'})
    monaco.languages.setMonarchTokensProvider('myLang',{
      tokenizer: {
          root: [
              [/myObj/,"myObj"]
          ]
      }
    })
    monaco.editor.defineTheme('myTheme', {
      base: 'vs',
      inherit: true,
      rules: [
            { background: 'EDF9FA' },
            { token: 'myObj', foreground: '#3d34eb' }
            ],
      colors: {
        'editor.foreground': '#c0eb34',
      }
    });
    monaco.editor.setTheme('myTheme');
    // monaco.editor.create(document.getElementById('container'), {
    //   value: abc,
    //   language: 'myLang',
    //   fontFamily: 'Arial',
    //   fontSize: 20,
    //   theme: 'myTheme'
    // });
    
    editorRef.current = editor; 
  }
  
  const showValue = (): any => {
    editorRef?.current && console.log(editorRef.current.getValue());
  }

  const handleEditorChange = (value: any, event: any): void => {
    console.log("current value:", value);
    console.log("current event: ", event.changes[0].text);
  }


  return (
        <div id='container'>
        
      <Editor
          height="10vh"
          defaultLanguage="myLang"
          // defaultValue={abc}
          theme= 'myTheme'
          value={abc}
          onMount={ handleEditorDidMount }
          onChange={ handleEditorChange }
      />
        </div>
        );
}

// export default MyMonaco;