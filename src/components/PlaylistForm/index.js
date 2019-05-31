import React from "react";
import { Form, Input, Icon, Upload, Button, Row, Col } from "antd";

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
            initialValue: topic ? topic.image : null,
            rules: [
              {
                required: true,
                message: "Please upload topic image"
              }
            ]
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
            initialValue: topic ? topic.introAudio : null,
            rules: [
              {
                required: true,
                message: "Please upload audio"
              }
            ]
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
            initialValue: topic ? topic.celebrationAudio : null,
            rules: [
              {
                required: true,
                message: "Please upload audio!"
              }
            ]
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
        <Form.Item label="Badges">
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Images">
                {getFieldDecorator("transitionImages", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: topic ? topic.transitionImages : null,
                  rules: [
                    {
                      required: true,
                      message: "Please upload images!"
                    }
                  ]
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
            </Col>
            <Col span={12}>
              <Form.Item label="Audios">
                {getFieldDecorator("transitionAudios", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: topic ? topic.transitionAudios : null,
                  rules: [
                    {
                      required: true,
                      message: "Please upload audios!"
                    }
                  ]
                })(
                  <Upload
                    onPreview={this.onPreview}
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
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

export const PlaylistForm = Form.create({ name: "register" })(RegistrationForm);
