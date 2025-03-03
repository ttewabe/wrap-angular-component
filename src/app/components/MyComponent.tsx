import React from 'react';


export interface IMyComponentProps {
  propName: string;
  onEventName: () => void;
}

export const MyComponent = ({propName, onEventName}:IMyComponentProps) => {
  return (
    <div>
      <h1>Hello {propName}</h1>
      <button onClick={onEventName}>Click Here!</button>
    </div>
  );
  
};