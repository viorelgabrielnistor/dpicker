import React, {FC, useRef} from "react";

import Editor from "@monaco-editor/react";

import './myMonaco.css';

export const MyMonaco: FC = () => {
  const editorRef = useRef<any>(null);

  function getCode(){
    return ` a few words ... ssss myObj ...ababab`;
  }

  const handleEditorDidMount = (editor: any, monaco: any): void => {
    
monaco.languages.register({ id: 'mySpecialLanguage' });

// Register a tokens provider for the language
monaco.languages.setMonarchTokensProvider('mySpecialLanguage', {
	tokenizer: {
		root: [
			[/\[error.*/, 'custom-error'],
			[/\[notice.*/, 'custom-notice'],
			[/\[info.*/, 'custom-info'],
			[/\[[a-zA-Z 0-9:]+\]/, 'custom-date']
		]
	}
});

// Define a new theme that contains only rules that match this language
monaco.editor.defineTheme('myCoolTheme', {
	base: 'vs',
	inherit: false,
	rules: [
		{ token: 'custom-info', foreground: '808080' },
		{ token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold' },
		{ token: 'custom-notice', foreground: 'FFA500' },
		{ token: 'custom-date', foreground: '008800' }
	],
	colors: {
		'editor.foreground': '#000000'
	}
});

// Register a completion item provider for the new language
monaco.languages.registerCompletionItemProvider('mySpecialLanguage', {
	// provideCompletionItems: () => {
	// 	var suggestions = [
	// 		{
	// 			label: 'simpleText',
	// 			kind: monaco.languages.CompletionItemKind.Text,
	// 			insertText: 'simpleText'
	// 		},
	// 		{
	// 			label: 'testing',
	// 			kind: monaco.languages.CompletionItemKind.Keyword,
	// 			insertText: 'testing(${1:condition})',
	// 			insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
	// 		},
	// 		{
	// 			label: 'ifelse',
	// 			kind: monaco.languages.CompletionItemKind.Snippet,
	// 			insertText: ['if (${1:condition}) {', '\t$0', '} else {', '\t', '}'].join('\n'),
	// 			insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
	// 			documentation: 'If-Else Statement'
	// 		}
	// 	];
	// 	return { suggestions: suggestions };
	// }
});

monaco.editor.create(document.getElementById('container'), {
	theme: 'myCoolTheme',
	value: getCode(),
	language: 'myLang'
});

function getCode() {
	return [
		'[Sun Mar 7 16:02:00 2004] [notice] Apache/1.3.29 (Unix) configured -- resuming normal operations',
		
	].join('\n');
}

    
    editorRef.current = editor; 
  }
  
  const showValue = (): any => {
    editorRef?.current && console.log(editorRef.current.getValue());
  }

  const handleEditorChange = (value: any, event: any): void => {
    console.log("here is the current model value:", value);
  }


  return (
        <div id='container'>
        
      <Editor
          height="10vh"
          defaultLanguage="myLang"
          // defaultValue="  some comment"
          onMount={ handleEditorDidMount }
        onChange={ handleEditorChange }
      />
        </div>
        );
}

// export default MyMonaco;