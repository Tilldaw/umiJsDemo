import { PageContainer } from '@ant-design/pro-components';
import CodeMirror from '@uiw/react-codemirror';
import { Button } from 'antd';
import * as React from 'react';
// import { StreamLanguage } from '@codemirror/language'
import { javascript } from '@codemirror/lang-javascript';
// interface CodeProps {

// }

const Code: React.FC = (props) => {
  const {} = props;
  const [edit, setEdit] = React.useState(false);
  const scr = `  import * as React from 'react';
  import { PageContainer } from '@ant-design/pro-components';
  import { Button } from "antd";
  import CodeMirror from '@uiw/react-codemirror'
  // import { StreamLanguage } from '@codemirror/language'
  import { javascript } from '@codemirror/lang-javascript';
  // interface CodeProps {
  
  // }
  
  
  const Code: React.FC = (props) => {
    const { } = props;
    const [edit, setEdit] = React.useState(false)
    const scr = '11'
    const onChange = React.useCallback((value: any, viewUpdate: any) => {
      console.log('value:', value);
    }, []);
    const read = () => {
      setEdit(!edit)
    }
    return (
      <PageContainer
      header={{
        title: '694kb',
      }}
      >
        <Button type='primary' onClick={read}>{edit ? '提交' : '编辑'}</Button>
        <br /> 
        <CodeMirror value={scr}  width='800px' extensions={[javascript({ jsx: true })]} onChange={onChange} editable={edit}/>
      </PageContainer>
    );
  };
  
  export default Code;
  `;
  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log(
      '%c [ viewUpdate ]-18',
      'font-size:13px; background:pink; color:#bf2c9f;',
      viewUpdate,
    );
    console.log('value:', value);
  }, []);
  const read = () => {
    setEdit(!edit);
  };
  return (
    <PageContainer
      header={{
        title: '694kb',
      }}
    >
      <Button type="primary" onClick={read}>
        {edit ? '提交' : '编辑'}
      </Button>
      <br />
      <CodeMirror
        value={scr}
        width="1200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        editable={edit}
      />
      <Button type="primary" onClick={read}>
        {edit ? '提交' : '编辑'}
      </Button>
    </PageContainer>
  );
};

export default Code;
