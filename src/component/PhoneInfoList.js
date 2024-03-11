import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
  };
  render() {
    const { data, onRemove, onUpdate } = this.props;
    console.log("rendering List");

    // key를 설정해 주지 않으면 배열의 Index 값으로 설정됨
    // key는 리액트가 어떤 항목을 변경, 추가, 삭제할지 식별하기 위해 넣는 값
    // 엘리먼트의 고유성을 부여하기 위함
    const list = data.map((info) => (
      <PhoneInfo
        onRemove={onRemove}
        onUpdate={onUpdate}
        info={info}
        key={info.id}
      />
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
