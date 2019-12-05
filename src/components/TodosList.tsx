import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Todo from './Todo';

const GET_TODOS = gql`
    query getTodos{
        todos @client {
            id
            text
            completed
        }
    }
`;

interface Todo {
    id: number,
    text: string,
    completed: boolean,
}

interface MyMapProps {
    todo: Todo,
    index: number
}

const TodosList = () => {
    const {data, loading, error} = useQuery(GET_TODOS);
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>error ... {error.message}</p>;

    console.log(data);
    return (
        <ul>
            {
                data.todos.map((todo: Todo, index: number) => {
                        return (
                            <li key={index}>
                                <Todo id={todo.id} completed={todo.completed} text={todo.text}/>
                            </li>
                        );
                    }
                )
            };
        </ul>
    );
};


export default TodosList;
