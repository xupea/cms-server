import React from "react";
import { Form, Input, Icon, Upload, Button, InputNumber } from "antd";

export default class WorldForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const fileList = [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      }
    ];

    return (
      <Form {...formItemLayout}>
        <Form.Item label="World Name">
          {getFieldDecorator("name", {
            initialValue: "Google",
            rules: [
              {
                required: true,
                message: "Please input World Name!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Background Image">
          {getFieldDecorator("backgroundImage", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: fileList
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Background Story">
          {getFieldDecorator("bgImage", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
          {getFieldDecorator("bgAudio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Unlock rules">
          {getFieldDecorator("unlockRules", {
            rules: [
              {
                type: "number"
              },
              {
                required: true,
                message: "Please input Unlock rules!"
              }
            ]
          })(<InputNumber min={1} max={10} />)}
        </Form.Item>
        <Form.Item label="User Story">
          {getFieldDecorator("upload", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
          {getFieldDecorator("userStory", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Levelup Audio">
          {getFieldDecorator("levelupAudio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
          })(
            <Upload
              name="sampleFile"
              action="http://localhost:8000/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
      </Form>
    );
  }
}
