// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate

import { BasicLayoutProps } from '@ant-design/pro-layout';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = (): BasicLayoutProps => {
  return {
    // 常用属性
    title: 'Ant Design1',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    // 默认布局调整
    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
    // rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />,
    // menuHeaderRender: undefined,
    breakpoint: 'xs',
    disableMobile: true, // 禁用响应式移动端
    collapsedButtonRender: false, // 不渲染收起菜单按钮
  };
};
