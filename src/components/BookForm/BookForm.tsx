import React from 'react';
import { useDispatch , useSelector, useStore} from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseAuthor, chooseISBN, chooseEdition } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api'


interface BookFormProps {
    id?: string;
    data?: {}
};

interface BookState {
    title: string;
    author: string;
    ISBN: string;
    edition: string;
};



export const BookForm = (props:BookFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<BookState>(state => state.title);
    const {register, handleSubmit} = useForm({ })
    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id){
            server_calls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
        } else {
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(chooseISBN(data.ISBN));
            dispatch(chooseEdition(data.edition));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='title'>Book Title</label>
                <Input {...register('title')} name = 'title' placeholder='Title' />
            </div>
            <div>
                <label htmlFor='author'>Book Author</label>
                <Input {...register('author')} name = 'author' placeholder='Author' />
            </div>
            <div>
                <label htmlFor='ISBN'>Book ISBN</label>
                <Input {...register('ISBN')} name = 'ISBN' placeholder='ISBN' />
            </div>
            <div>
                <label htmlFor='edition'>Book Edition</label>
                <Input {...register('edition')} name = 'edition' placeholder='Edition' />
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}