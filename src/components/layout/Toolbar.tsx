import React, { ReactNode } from 'react';
import { AppBar } from "@mui/material";


const Toolbar = ({children}: {children?: ReactNode}) => {
  return (
    <AppBar variant={"elevation"}
            elevation={1}
            position={"relative"}
            sx={{
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              backgroundColor: "rgba(179,205,224,0.7)"
            }}>
        {children}
    </AppBar>
  );
};

export default Toolbar;