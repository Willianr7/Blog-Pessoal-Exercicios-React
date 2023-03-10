import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "yellow" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 60, color: "black" }} />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 60, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 60, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "black", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "yellow" }} >© 2022 Copyright: Willian</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "yellow" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default