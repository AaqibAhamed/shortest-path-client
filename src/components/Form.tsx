import React from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
  onSubmit: (data: { fromNode: string; toNode: string }) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<{ fromNode: string; toNode: string }>();

  const submitHandler = (data: { fromNode: string; toNode: string }) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>From Node:</label>
        <input {...register('fromNode')} required />
      </div>
      <div>
        <label>To Node:</label>
        <input {...register('toNode')} required />
      </div>
      <button type="submit">Calculate Shortest Path</button>
    </form>
  );
};

export default Form;
