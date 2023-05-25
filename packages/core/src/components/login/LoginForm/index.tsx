import { Form, Input, Button } from 'antd';
import styles from './index.module.scss'
const LoginForm = () => {
  return (
    <Form name='basic' className={styles.formBox}>
      <Form.Item name="username">
        <Input placeholder="请输入账户名"/>
      </Form.Item>
      <Form.Item name="password">
        <Input placeholder="请输入密码" type="password"/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" className={styles.loginBtn}>登录</Button>
      </Form.Item>
    </Form>
  )
}
export default LoginForm;