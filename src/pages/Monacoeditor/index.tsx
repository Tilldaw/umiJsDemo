import { PageContainer } from '@ant-design/pro-components';
import MonacoEditor from '@uiw/react-monacoeditor';
import { Button } from 'antd';
import * as React from 'react';

const { useState } = React;

const Monacoeditor: React.FC = (props) => {
  const {} = props;
  const [first, setfirst] = useState(true);
  const code = `
  import MonacoEditor from '@uiw/react-monacoeditor';
  import * as React from 'react';
  import { Button } from "antd";
  import { PageContainer } from '@ant-design/pro-components';

  const { useRef, useState, useEffect, useMemo } = React;
  
  const Monacoeditor: React.FC = (props) => {
    const { } = props;
    const [first, setfirst] = useState(true)
    const code = 'console.log('测试')
    console.log('测试')
    console.log('测试')
    console.log('测试')
    console.log('测试')
    console.log('测试')
    console.log('测试')
    console.log('测试')
    console.log('测试')
    console.log('测试')
    '
    return (
      <PageContainer
      header={{
        title: '51.8kb',
      }}
      >
        <Button onClick={() => {
          setfirst(!first)
        }}>
          编辑
        </Button>
      <MonacoEditor
        language="javascript"
        value={code}
        height="500px"
        width='800px'
        options={{
          readOnly: first,
          selectOnLineNumbers: true,
          roundedSelection: false,
          cursorStyle: 'line',
          automaticLayout: false,
          theme: 'vs-dark',
        }}
      />
      </PageContainer>
    );
  };
  
  export default Monacoeditor;
  `;
  const onChange = (newval: any) => {
    console.log(newval);
  };
  return (
    <PageContainer
      header={{
        title: '51.8kb',
      }}
    >
      <Button
        onClick={() => {
          setfirst(!first);
        }}
      >
        编辑
      </Button>
      <MonacoEditor
        onChange={onChange}
        language="javascript"
        value={code}
        height="200px"
        width="1200px"
        options={{
          readOnly: first,
          selectOnLineNumbers: false,
          roundedSelection: false,
          cursorStyle: 'line',
          automaticLayout: false,
          theme: 'vs-light',
          // 右上角预览窗口
          minimap: {
            enabled: false,
          },
          scrollbar: {
            // Subtle shadows to the left & top. Defaults to true.
            useShadows: false,
            // Render vertical arrows. Defaults to false.
            verticalHasArrows: true,
            // Render horizontal arrows. Defaults to false.
            horizontalHasArrows: true,
            // Render vertical scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // Defaults to 'auto'
            vertical: 'visible',
            // Render horizontal scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // Defaults to 'auto'
            horizontal: 'visible',
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10,
            arrowSize: 30,
          },
        }}
      />
    </PageContainer>
  );
};

export default Monacoeditor;
