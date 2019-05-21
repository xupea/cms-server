import React from "react";
import { Form, Input, Icon, Upload, Button } from "antd";

class RegistrationForm extends React.Component {
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
    const { getFieldDecorator, topic } = this.props;

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

    return (
      <Form {...formItemLayout}>
        <Form.Item label="Topic Name">
          {getFieldDecorator("name", {
            initialValue: topic ? topic.name : "",
            rules: [
              {
                required: true,
                message: "Please input topic name"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Topic Image">
          {getFieldDecorator("image", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: topic ? topic.image : null
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
        <Form.Item label="Topic Intro Audio">
          {getFieldDecorator("introAudio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: topic ? topic.introAudio : null
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

        <Form.Item label="Celebration Audio">
          {getFieldDecorator("celebrationAudio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: topic ? topic.celebrationAudio : null
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
        <Form.Item label="Badge">
          {getFieldDecorator("badges", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: topic ? topic.badges : null
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

export const PlaylistForm = Form.create({ name: "register" })(RegistrationForm);
