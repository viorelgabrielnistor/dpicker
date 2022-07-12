import React, {FC, useEffect, useRef, useState} from "react";

import Editor, { useMonaco } from "@monaco-editor/react";

import './myMonaco.css';

export const MyMonaco: FC = (): any => {
  // const editorRef = useRef<any>(null);

  const [myText, setMyText] = useState(`before ...  [insert:   ] ...after`);

  const handleEditorDidMount = (editor: any, monaco: any): void => {
    // editorRef.current = editor;
    
    monaco.languages.register({id:'myLang'});
    monaco.languages.setMonarchTokensProvider('myLang', {
      tokenizer: {
        root: [
          [/\[insert.*\]/, "myObj"]
        ]
      }
    });

    monaco.editor.defineTheme('myTheme', {
      base: 'vs',
      inherit: true,
      rules: [
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
    <div style={ { border: '1px solid brown', height: '100px', width: '1000px', margin: '10px auto' } }>
      <Editor
        height= "10vh"
        defaultLanguage= "myLang"
        theme= 'myTheme'
        value= {myText}
        onMount= { handleEditorDidMount }
        onChange= { handleEditorChange }
      />
    </div>
    );
  }
