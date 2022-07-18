// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate

import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
 
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = ({
  // initialState,
}: {
  // 类型自定义，由 `initialState` 插件提供
  // initialState: { settings?: LayoutSettings; currentUser?: API.CurrentUser };
}): BasicLayoutProps => {
  return {
    // 常用属性
    title: 'Ant Design1',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
 
    // 默认布局调整
    // rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />,
    // menuHeaderRender: undefined,
    // fixSiderbar: true,
    // bcontentWidth: 'Fixed',
    breakpoint: 'xs',
    // defaultCollapsed: false
    // siderWidth: 255,
 
    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
  };
};
