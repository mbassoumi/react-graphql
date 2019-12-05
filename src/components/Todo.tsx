import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const TOGGLE_TODO = gql`
    mutation ToggleTodo($id: Int!) {
        toggleTodo(id: $id) @client
    }
`;

interface TodoProps {
    id: number,
    completed: boolean,
    text: string,
}

const Todo = ({id, completed, text}: TodoProps) => {
    const [toggleTodo] = useMutation(TOGGLE_TODO, {variables: {id}});
    return (
        <li
            onClick={() => toggleTodo()}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
            }}
        >
            {text}
        </li>
    );
};

export default Todo;