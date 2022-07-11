import React, {FC, useRef, useState} from "react";

import Editor from "@monaco-editor/react";

import './myMonaco.css';

export const MyMonaco: FC = (): any => {
  const editorRef = useRef<any>(null);

  const [myText, setMyText] = useState(`before ...  [insert: ] ...after`)

  const handleEditorDidMount = (editor: any, monaco: any): void => {
    editorRef.current = editor; 
    
    monaco.languages.register({id:'myLang'});
    monaco.languages.setMonarchTokensProvider('myLang',{
      tokenizer: {
          root: [
              // [/\[insert: \]/, "myObj"]
              [/\[insert.*\]/, "myObj"]
          ]
      }
    })
    monaco.editor.defineTheme('myTheme', {
      base: 'vs',
      inherit: true,
      rules: [
            // { background: 'EDF9FA' },
            { token: 'myObj', foreground: '#ff0000' }
            ],
      colors: {
        'editor.foreground': '#080706',
      }
    });
    monaco.editor.setTheme('myTheme');
  }
  
  const handleEditorChange = (value: any ): void => {
    console.log("current value:", value);
    setMyText(value)
  }

  return (
        <Editor
            height= "10vh"
            defaultLanguage= "myLang"
            theme= 'myTheme'
            value= {myText}
            onMount= { handleEditorDidMount }
            onChange= { handleEditorChange }
        />
      );
  }
