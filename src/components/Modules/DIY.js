import React from "react";
import { Form, Icon, Upload, Button } from "antd";

const uploadURL = "http://localhost:8000/upload";

export default class DIY extends React.Component {
  render() {
    const { getFieldDecorator, introAudio, audio, image } = this.props;

    return (
      <React.Fragment>
        <Form.Item label="Intro Audio">
          {getFieldDecorator("introAudio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: introAudio,
            rules: [
              {
                required: true,
                message: "Please upload audios!"
              }
            ]
          })(
            <Upload
              name="sampleFile"
              action={uploadURL}
              listType="picture"
              accept="audio/*"
            >
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item label="Step Audio">
          {getFieldDecorator("audio", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: audio,
            rules: [
              {
                required: true,
                message: "Please upload audios!"
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
        <Form.Item label="Step Image">
          {getFieldDecorator("image", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
            initialValue: image,
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
      </React.Fragment>
    );
  }
}
