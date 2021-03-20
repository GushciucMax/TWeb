import React, { useState } from 'react'

import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  }
};

const FormDocs = () => {

	const [name, setName ] = useState('')
	const [email, setEmail ] = useState('')
	const [desc, setDesc ] = useState('')

  	const onFinish = (values) => {
	    console.log(name)
		console.log(email)
		console.log(desc)
  	};

  return (
	  <div style ={{
		  minWidth:' 600px',
		  padding:' 0 20px'
	}}>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
	  <Input value={ name } placeholder='Name' onChange= {(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input value={ email } placeholder='Email' onChange= {(e) => setEmail(e.target.value)}/>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea value={ desc } placeholder='Description' onChange= {(e) => setDesc(e.target.value)}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
	</div>
  );
};

export default FormDocs;
