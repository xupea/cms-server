import React from "react";
import { Form, Icon, Upload, Button, Select, Input, Radio } from "antd";
import { unzipSingleData } from "../../utils";

const uploadURL = "http://localhost:8000/upload";

const Option = Select.Option;

export default class Trivia extends React.Component {
  state = {
    type: this.props.question ? this.props.question.type : "choice"
  };

  normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  handleChange = value =>
    this.setState({
      type: value
    });

  render() {
    const { getFieldDecorator, question } = this.props;

    const newQuestion = question
      ? {
          type: question.type,
          introAudio: unzipSingleData(question.introAudio)
        }
      : null;

    let content;

    if (this.state.type === "choice") {
      content = (
        <ChoiceQustion
          normFile={this.normFile}
          getFieldDecorator={getFieldDecorator}
          question={question}
        />
      );
    }

    if (this.state.type === "trueorfalse") {
      content = (
        <TrueFalseQuestion
          normFile={this.normFile}
          getFieldDecorator={getFieldDecorator}
          question={question}
        />
      );
    }

    return (
      <React.Fragment>
        <Form.Item label="Qustion Type">
          {getFieldDecorator("type", {
            initialValue: newQuestion ? newQuestion.type : "choice",
            rules: [{ required: true, message: "Please select module type!" }]
          })(
            <Select style={{ width: 220 }} onChange={this.handleChange}>
              <Option value="choice">Choice</Option>
              <Option value="trueorfalse">True or False</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Intro Audio">
          {getFieldDecorator("introAudio", {
            initialValue: newQuestion ? newQuestion.introAudio : null,
            valuePropName: "fileList",
            getValueFromEvent: this.normFile,
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
        {content}
      </React.Fragment>
    );
  }
}

class ChoiceQustion extends React.Component {
  render() {
    const { getFieldDecorator, normFile, question } = this.props;
    return (
      <React.Fragment>
        <Form.Item label="Qustion Audio">
          {getFieldDecorator("questionAudio", {
            initialValue: question ? question.questionAudio : null,
            valuePropName: "fileList",
            getValueFromEvent: normFile,
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
        <Form.Item label="Question Text">
          {getFieldDecorator("questionText", {
            initialValue: question ? question.questionText : "",
            rules: [{ required: true, message: "please input question text" }]
          })(<Input placeholder="question text" />)}
        </Form.Item>
        <Form.Item label="Option Audios">
          {getFieldDecorator("optionAudios", {
            initialValue: question ? question.optionAudios : null,
            valuePropName: "fileList",
            getValueFromEvent: normFile,
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
        <Form.Item label="Option Texts">
          {getFieldDecorator("optionAText", {
            initialValue: question ? question.optionAText : "",
            rules: [{ required: true, message: "please input option A text" }]
          })(<Input placeholder="option A" />)}
          {getFieldDecorator("optionBText", {
            initialValue: question ? question.optionBText : "",
            rules: [{ required: true, message: "please input option B text" }]
          })(<Input placeholder="option B" />)}
          {getFieldDecorator("optionCText", {
            initialValue: question ? question.optionCText : "",
            rules: [{ required: true, message: "please input option C text" }]
          })(<Input placeholder="option C" />)}
        </Form.Item>
        <Form.Item label="Answer">
          {getFieldDecorator("answer", {
            initialValue: question ? question.answer : "",
            rules: [
              {
                required: true,
                message: "Please choose anwser!"
              }
            ]
          })(
            <Radio.Group>
              <Radio value="a">A</Radio>
              <Radio value="b">B</Radio>
              <Radio value="c">C</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Right Answer Audios">
          {getFieldDecorator("correctAudios", {
            initialValue: question ? question.correctAudios : null,
            valuePropName: "fileList",
            getValueFromEvent: normFile,
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
        <Form.Item label="Wrong Answer Audios">
          {getFieldDecorator("incorrectAudios", {
            initialValue: question ? question.incorrectAudios : null,
            valuePropName: "fileList",
            getValueFromEvent: normFile,
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
        <Form.Item label="Answer analysis">
          {getFieldDecorator("answerAnalysis", {
            initialValue: question ? question.answerAnalysis : null,
            valuePropName: "fileList",
            getValueFromEvent: normFile,
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
      </React.Fragment>
    );
  }
}

class TrueFalseQuestion extends React.Component {
  render() {
    const { getFieldDecorator, normFile, question } = this.props;

    return (
      <React.Fragment>
        <Form.Item label="Qustion Audio">
          {getFieldDecorator("questionAudio", {
            initialValue: question ? question.questionAudio : null,
            valuePropName: "fileList",
            getValueFromEvent: normFile,
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
        <Form.Item label="Question Text">
          {getFieldDecorator("questionText", {
            initialValue: question ? question.questionText : "",
            rules: [{ required: true, message: "please input question text" }]
          })(<Input placeholder="question text" />)}
        </Form.Item>
        <Form.Item label="Answer">
          {getFieldDecorator("answer", {
            initialValue: question ? question.answer : "",
            rules: [
              {
                required: true,
                message: "Please choose anwser!"
              }
            ]
          })(
            <Radio.Group>
              <Radio value="true">True</Radio>
              <Radio value="false">False</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Right Answer Audios">
          {getFieldDecorator("correctAudios", {
            initialValue: question ? question.correctAudios : null,
            valuePropName: "fileList",
            getValueFromEvent: normFile,
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
        <Form.Item label="Wrong Answer Audios">
          {getFieldDecorator("incorrectAudios", {
            initialValue: question ? question.incorrectAudios : null,
            valuePropName: "fileList",
            getValueFromEvent: normFile,
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
        <Form.Item label="Answer analysis">
          {getFieldDecorator("answerAnalysis", {
            initialValue: question ? question.answerAnalysis : null,
            valuePropName: "fileList",
            getValueFromEvent: normFile,
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
      </React.Fragment>
    );
  }
}
