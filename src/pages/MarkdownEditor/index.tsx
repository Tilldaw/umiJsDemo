import { PageContainer } from '@ant-design/pro-components';
import MarkdownEditor from '@uiw/react-markdown-editor';
import * as React from 'react';
// const { useRef, useState, useEffect, useMemo } = React;

const MarkdownEditorc: React.FC = (props) => {
  const {} = props;
  // const [markdown, setMarkdown] = useState("")
  const code = `import * as React from 'react';
  import MarkdownEditor from '@uiw/react-markdown-editor';
  import { PageContainer } from '@ant-design/pro-components';
  const { useRef, useState, useEffect, useMemo } = React;
  
  const MarkdownEditorc: React.FC = (props) => {
    const { } = props;
    const [markdown, setMarkdown] = useState("")
    return (
      <PageContainer
      header={{
        title: '267kb',
      }}
      >
      <MarkdownEditor 
      value="# This is a H1  \n## This is a H2  \n###### This is a H6" 
      onChange={(editor, data, value) => {
        // console.log('%c [ value ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', value)
        // console.log('%c [ data ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', data)
        console.log(editor)
        setMarkdown(value)
      }}
      />
       </PageContainer>
    );
  };
  
  export default MarkdownEditorc;
  `;
  return (
    <PageContainer
      header={{
        title: '267kb',
      }}
    >
      <MarkdownEditor
        value={code}
        onChange={(editor, data, value) => {
          console.log(
            '%c [ value ]-16',
            'font-size:13px; background:pink; color:#bf2c9f;',
            value,
          );
          console.log(
            '%c [ data ]-16',
            'font-size:13px; background:pink; color:#bf2c9f;',
            data,
          );
          console.log(editor);
          // setMarkdown(value)
        }}
      />
    </PageContainer>
  );
};

export default MarkdownEditorc;
