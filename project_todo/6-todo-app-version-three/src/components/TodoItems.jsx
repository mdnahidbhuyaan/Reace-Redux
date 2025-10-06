import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todoItemsStore";

const TodoItems = ({  onDeleteClick }) => {
  const todoItems = useContext(TodoItemsContext);
   // Just to show the usage of
 
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name}
          todoDate={item.deoDate}
          todoname={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
