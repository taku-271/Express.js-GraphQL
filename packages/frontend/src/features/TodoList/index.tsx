import { Box, Checkbox, Heading, Text } from "@yamada-ui/react";
import { useGetTodos } from "./hook";
import { useUpdateTodoMutation } from "./mutation";
import React from "react";
import { Todo } from "../../../graphql/graphql";

const TodoList = () => {
  const { todos, isGetTodosLoading } = useGetTodos();
  const { mutate: updateTodo } = useUpdateTodoMutation();

  const onChangeIsCompleted = (
    e: React.ChangeEvent<HTMLInputElement>,
    todo: Todo
  ) => {
    updateTodo({
      id: todo.id,
      isCompleted: e.target.checked,
    });
  };

  // Todo: loadingをサーキュラーで表現する
  return isGetTodosLoading ? (
    <Text>Loading...</Text>
  ) : (
    <Box m="xl">
      <Heading as="h1" size="2xl">
        Todos
      </Heading>
      {todos?.map((todo) => (
        <Box key={todo?.id} my="xl">
          <Heading as="h2" size="md">
            {todo?.title}
          </Heading>
          <Text>{todo?.description}</Text>
          <Checkbox
            isChecked={todo?.isCompleted}
            onChange={(e) => onChangeIsCompleted(e, todo as Todo)}
          >
            済
          </Checkbox>
        </Box>
      ))}
    </Box>
  );
};

export default TodoList;
