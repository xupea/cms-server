import React from "react";
import { Form, Input, Icon, Upload, Button, Row, Col } from "antd";
import { revertTopic } from "../../utils";

const uploadURL = "http://localhost:8000/upload";

class RegistrationForm extends React.Component {
  normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator, topic } = this.props;

    const newTopic = topic ? revertTopic(topic) : null;

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
            initialValue: newTopic ? newTopic.name : "",
            rules: [
              {
                required: true,
                message: "Please input newTopic name"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Topic Image">
          {getFieldDecorator("image", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: newTopic ? newTopic.image : null,
            rules: [
              {
                required: true,
                message: "Please upload image"
              }
            ]
          })(
            <Upload
              name="sampleFile"
              action={uploadURL}
              listType="picture"
              accept="image/*"
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
            initialValue: newTopic ? newTopic.introAudio : null,
            rules: [
              {
                required: true,
                message: "Please upload audio"
              }
            ]
          })(
            <Upload
              name="sampleFile"
              action={uploadURL}
              listType="picture"
              accept="audio/mp3"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Celebration Audio">
          {getFieldDecorator("celebrationAudios", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: newTopic ? newTopic.celebrationAudios : null,
            rules: [
              {
                required: true,
                message: "Please upload audio!"
              }
            ]
          })(
            <Upload
              name="sampleFile"
              action={uploadURL}
              listType="picture"
              accept="audio/mp3"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Gift">
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Gift before">
                {getFieldDecorator("giftBeforeAudios", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newTopic ? newTopic.giftBeforeAudios : null,
                  rules: [
                    {
                      required: true,
                      message: "Please upload images!"
                    }
                  ]
                })(
                  <Upload
                    name="sampleFile"
                    action={uploadURL}
                    listType="picture"
                    accept="image/*"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Gift after">
                {getFieldDecorator("giftAfterAudios", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newTopic ? newTopic.giftAfterAudios : null,
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
                    action={uploadURL}
                    listType="picture"
                    accept="audio/mp3"
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
        <Form.Item label="Badge Image">
          {getFieldDecorator("badgeImage", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: newTopic ? newTopic.image : null,
            rules: [
              {
                required: true,
                message: "Please upload image"
              }
            ]
          })(
            <Upload
              name="sampleFile"
              action={uploadURL}
              listType="picture"
              accept="image/*"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Badge Audio">
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Audio before">
                {getFieldDecorator("badgeBeforeAudios", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newTopic ? newTopic.badgeBeforeAudios : null,
                  rules: [
                    {
                      required: true,
                      message: "Please upload images!"
                    }
                  ]
                })(
                  <Upload
                    name="sampleFile"
                    action={uploadURL}
                    listType="picture"
                    accept="audio/mp3"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Audio after">
                {getFieldDecorator("badgeAfterAudios", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  initialValue: newTopic ? newTopic.badgeAfterAudios : null,
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
                    action={uploadURL}
                    listType="picture"
                    accept="audio/mp3"
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
