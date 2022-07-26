import React from 'react';
import { TextField, Button } from '@mui/material';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'Redux/thunk';
import { emailSelector } from 'Redux/selectors';

export function UserMenu() {
  const email = useSelector(emailSelector);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  return (
    <div className={s.container}>
      <TextField
        value={email}
        className={s.input}
        id="outlined-email"
        label="Email"
        type="email"
        name="email"
      />
      <Button
        type="button"
        className={s.button}
        variant="contained"
        onClick={handleLogout}
        sx={{ marginTop: 2 }}
      >
        Logout
      </Button>
    </div>
  );
}
