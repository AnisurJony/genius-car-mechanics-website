import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log('data', data);
        axios.post('https://cryptic-citadel-10405.herokuapp.com/servcies', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully post data to the database');
                    reset();

                }
            })
    }
    return (
        <div className="add-service">
            <h2>Please add service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;