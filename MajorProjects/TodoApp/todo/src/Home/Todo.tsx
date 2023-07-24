
import "./Todo.css";
import TodoController from "./TodoController";
import todo from "../Images/pngwing.com (25).png";
import { Notifications } from "react-push-notification";
export class Todo extends TodoController {
  date= new Date();
  render() {
    return (
      <>
        <div className="main-div">
          <Notifications position={"top-right"} />
          <div className="child-div">
            <figure>
              <img src={todo} alt="todologo" />
              <figcaption>Add Your List Here ✌</figcaption>
            </figure>
            <p className="date-text">Date : {this.date.toDateString()}</p>
            <div className="addItems">
              <input
                type="text"
                placeholder="✍ Add Items..."
                value={this.state.inputData}
                onChange={(e) => {
                  this.setState({ inputData: e.target.value });
                }}
              />
              {this.state.toggleSubmit ? (
                <i
                  className="fa fa-plus add-btn"
                  title="Add Item"
                  onClick={this.addItem}
                ></i>
              ) : (
                <i
                  className="far fa-edit add-btn"
                  title="Update Item"
                  onClick={this.addItem}
                ></i>
              )}
            </div>

            <div className="showItems">
              {this.state.dataArray.map((elem: any, index: any) => {
                return (
                  <div className="eachItem" key={elem.id}>
                    <h3>{elem.data}</h3>
                    <div className="todo-btn">
                      <i
                        className="far fa-edit add-btn"
                        title="Edit Item"
                        onClick={() => this.editItem(elem.id)}
                      ></i>
                      <i
                        className="far fa-trash-alt add-btn"
                        title="Delete Item"
                        onClick={() => this.deleteItem(elem.id)}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="showItems">
              <button
                className="btn effect04"
                data-sm-link-text="Remove All"
                onClick={() => this.removeAll()}
              >
                <span> CHECK LIST </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
