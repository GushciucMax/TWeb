import React, { useEffect } from 'react'
import { Input, Button, Space, Form } from 'antd';
import { useRootStore } from '../../mobx/ProviderRootStore/ProviderRootStore';
import { observer } from 'mobx-react-lite'

export const FormDocs = observer(() => {

    const { addContent, addContent$, setAddContentInitial } = useRootStore()

    useEffect(() => {
        setAddContentInitial()
    }, [])

    if (!addContent$) return ''

    const { title, description, img, updateField } = addContent$

    return (
        <div style ={{
            width: '80%',
            margin: 'auto',
            padding: '0 20%',
        }}>
            
                <Form name='form'>
                <Space direction="vertical" style = {{display:'revert'}}>
                <Input placeholder='Title' value = { title } onChange = {(e) => updateField('title', e.target.value)} />
                <Input.TextArea placeholder='Description' value = { description } onChange = {(e) => updateField('description', e.target.value)}/>
                <Input placeholder='Image' value = { img } onChange = {(e) => updateField('img', e.target.value)}/>
                <Button onClick = {() => addContent( addContent$ ) } type="primary" htmlType="submit">
                    Add
                </Button>
            </Space>
            </Form>
        </div>
    )
})
