import { Component } from "react";

import addNotification from "react-push-notification";

interface states {
  inputData: any;
  dataArray: any;
  toggleSubmit: boolean;
  isEditItem: any;
}
type Props = {};
export class TodoController extends Component<Props, states> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputData: "",
      dataArray: this.getLocalItems(),
      toggleSubmit: true,
      isEditItem: null,
    };
  }
  //   set data on localStorage
  componentDidUpdate(): void {
    localStorage.setItem("lists", JSON.stringify(this.state.dataArray));
  }
  //   get data form localStorage
  getLocalItems = (): any[] => {
    let list = localStorage.getItem("lists");
    console.log(list);
    if (list) {
      return JSON.parse(localStorage.getItem("lists") || "");
    } else {
      return [];
    }
  };
  //add task functionality
  addItem = () => {
    if (this.state.inputData === "") {
      this.warningNotification();
    } else if (this.state.inputData && !this.state.toggleSubmit) {
      this.setState((prevStates) => ({
        dataArray: prevStates.dataArray.map((elem: any) => {
          if (elem.id === this.state.isEditItem) {
            return { ...elem, data:this.state.inputData };
          }
          return elem;
        }),
        toggleSubmit:true,
        inputData:"",
        isEditItem:null,
      }));
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        data: this.state.inputData,
      };
      this.state.dataArray.push(allInputData);
      this.successFullNotification();
      this.setState({ dataArray: this.state.dataArray }, () => {
        console.log("@@@@==", this.state.dataArray);
      });
    }
  };
  warningNotification = () => {
    addNotification({
      title: "Warning",
      subtitle: "Please fill it",
      message: "You have to enter something",
      theme: "light",
      duration: 7000,
      closeButton: "X",
      backgroundTop: "orange",
    });
  };
  successFullNotification = () => {
    addNotification({
      title: "Success",
      subtitle: "Task Added",
      message: "You have successfully Added your task.",
      theme: "light",
      duration: 7000,
      closeButton: "X",
      backgroundTop: "green",
    });
  };
  //Delete functionality
  deleteItem = (id: any) => {
    let updatedItem = this.state.dataArray.filter((elem: any) => {
      return id !== elem.id;
    });
    this.setState({ dataArray: updatedItem });
  };
  //Edit functionality
  editItem = (id: any) => {
  
    let newItem = this.state.dataArray.find((elem: any) => {
      return id === elem.id;
    });
    this.setState({ toggleSubmit: false });
    this.setState({ inputData: newItem.data });
    this.setState({ isEditItem: id });
  };
  //Remove functionality
  removeAll = () => {
    this.setState({ dataArray: [] });
  };
}

export default TodoController;
