import { useEffect } from 'react';

export default function ThemeSwitcherWrapper() {
  useEffect(() => {
    // 动态导入Lit组件
    import('../theme-switcher/theme-switcher.ts');
  }, []);

  return (
    <div>
      <theme-switcher></theme-switcher>
    </div>
  );
}
