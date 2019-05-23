import React from "react";
import { Select, Form } from "antd";
import Factoid from "../Modules/Factoid";
import DIY from "../Modules/DIY";
import SlideShow from "../Modules/SlideShow";
import Video from "../Modules/Video";
import Anecdote from "../Modules/Anecdote";
import Joke from "../Modules/Joke";

const Option = Select.Option;

export default class ModuleForm extends React.Component {
  state = {
    type: this.props.mod ? this.props.mod.type : "factoid"
  };

  handleChange = value => {
    this.setState({
      type: value
    });
  };

  render() {
    const { type } = this.state;
    const { getFieldDecorator, mod } = this.props;
    let content;

    console.log(this.state);

    switch (type) {
      case "factoid":
        content = <Factoid getFieldDecorator={getFieldDecorator} {...mod} />;
        break;
      case "video":
        content = <Video getFieldDecorator={getFieldDecorator} />;
        break;
      case "trivia":
        content = null;
        break;
      case "slideshow":
        content = <SlideShow getFieldDecorator={getFieldDecorator} />;
        break;
      case "diy":
        content = <DIY getFieldDecorator={getFieldDecorator} />;
        break;
      case "anecdote":
        content = <Anecdote getFieldDecorator={getFieldDecorator} />;
        break;
      case "joke":
        content = <Joke getFieldDecorator={getFieldDecorator} />;
        break;
      default:
        content = null;
        break;
    }

    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 }
    };

    return (
      <Form {...formItemLayout}>
        <Form.Item label="Select Type">
          {getFieldDecorator("type", {
            initialValue: this.state.type,
            rules: [{ required: true, message: "Please select module type!" }]
          })(
            <Select style={{ width: 220 }} onChange={this.handleChange}>
              <Option value="factoid">Factoid</Option>
              <Option value="video">Video</Option>
              <Option value="trivia">Trivia</Option>
              <Option value="slideshow">Slideshow</Option>
              <Option value="diy">DIY</Option>
              <Option value="anecdote">Anecdote</Option>
              <Option value="joke">Joke</Option>
            </Select>
          )}
        </Form.Item>
        {content}
      </Form>
    );
  }
}
