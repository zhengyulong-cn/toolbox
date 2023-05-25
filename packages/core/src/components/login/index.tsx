import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import styles from './index.module.scss';
import { Tabs } from 'antd';

type FormTypeT = 'login' | 'registry'
const LoginHome = () => {
  const [formType, setFormType] = useState<FormTypeT>('login');
  const switchType = (activeKey: FormTypeT) => {
    setFormType(activeKey)
  }
  return (
    <div className={styles.homeBox}>
      <div className={styles.homeBody}>
        <div className={styles.header}>Toolbox</div>
        <div className={styles.formBox}>
          <Tabs accessKey={formType} onChange={(activeKey) => switchType(activeKey as FormTypeT)}>
            <Tabs.TabPane tab="登录" key="login">
              <LoginForm />
            </Tabs.TabPane>
            <Tabs.TabPane tab="注册" key="registry">
              <RegisterForm />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>You can contact me at zhengyulong.cn@outlook.com</p>
        <p>Copyright © 2022-present Zhengyu Long</p>
      </footer>
    </div>
  )
}
export default LoginHome;