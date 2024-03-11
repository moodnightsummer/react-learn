import React, { Component } from "react";

class PhoneForm extends Component {
  input = null;
  // 컴포넌트의 상태 초기화
  state = {
    name: "",
    phone: "",
  };

  // 이벤트 핸들러
  // input에서 발생하는 입력 값 변경 이벤트 처리 -> input에 입력하는 값을 div 안의 값을 동적으로 업데이트
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    // 원래 해야 하는 행위를 하지 않게 해 줌.
    // 현재 상황에서는 등록 시 새로고침 안 되게 함.
    e.preventDefault();
    this.props.onCreate({
      name: this.state.name,
      phone: this.state.phone,
    });
    this.setState({
      name: "",
      phone: "",
    });
    this.input.focus();
  };

  // render 메서드를 호출하면서 인스턴스를 사용하여 jsx를 생성하고 랜더링
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          ref={(ref) => (this.input = ref)}
        />
        <input
          placeholder="전화번호"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <button type="submit">등록</button>
        <div>
          {/* 리액트가 컴포넌트의 상태를 관리하고 있기 때문에 this가 현재 컴포넌트의 인스턴스를 가리킴 */}
          {this.state.name} {this.state.phone}
        </div>
      </form>
    );
  }
}

export default PhoneForm;
