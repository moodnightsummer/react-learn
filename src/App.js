import PhoneForm from "./component/PhoneForm";
import React, { Component } from "react";
import PhoneInfoList from "./component/PhoneInfoList";

class App extends Component {
  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: "홍길동",
        phone: "010-0000-0000",
      },
      {
        id: 1,
        name: "김아무개",
        phone: "010-1000-0000",
      },
      {
        id: 2,
        name: "정정호",
        phone: "010-0002-0000",
      },
    ],
    keyword: "",
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleCreate = (data) => {
    const { information } = this.state;
    // 값을 수정할 때 항상 setState를 사용
    // 기존의 값을 수정하지 않고 새로운 객체 혹은 배열을 만들어 주입해 주어야 함
    this.setState({
      information: information.concat(
        // Object.assign: 비어 있는 객체에 data를 넣고 id를 넣겠다는 의미
        Object.assign({}, data, { id: this.id++ })
      ),
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색"
        ></input>
        <PhoneInfoList
          data={this.state.information.filter(
            (info) => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
