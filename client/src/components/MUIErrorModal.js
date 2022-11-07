import AuthContext from "../auth";
import { useContext } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorModal() {
    const { auth } = useContext(AuthContext);

    function handleClose() {
        auth.clearError();
    }

    return (
        <Modal
            open={auth.error !== null}
        >
            <Box sx={style} display="flex" flexDirection="column">
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {auth.error}
                </Alert>
                <Button variant="contained" sx={{ marginTop: "10px" }} onClick={handleClose}>CLOSE</Button>
            </Box>
        </Modal>
    );
}