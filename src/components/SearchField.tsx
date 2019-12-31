import React from 'react';
import { TextField } from '@material-ui/core';

export interface SearchFieldProps {
    onSearchChange:(value: string)=> void;
    value: string;
}
export const SearchField = ({onSearchChange, value}: SearchFieldProps) => {
    return (
        <TextField
          onChange={event => onSearchChange(event.target.value)}
          id="outlined-secondary"
          placeholder="Enter Movie Title"
          type="search"
          margin="dense"
          variant="outlined"
          color="secondary"
          value={value}
        />
    )
}