import React from "react"
import MenuBottomNavigation from "../../components/menu-bottom/menu-bottom"
import { Box } from "@mui/material"
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Acquirer from "./acquirer"





export default function SitefForm() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <React.Fragment>
            <Box sx={{ width: 500 }}>
                <AppBar  sx={{ background: '#000000'}}> 
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor= 'rgba(255, 255, 255, 0.7)'
                        variant='fullWidth'
                        aria-label='full width tabs'
                        sx={{
                            "& .MuiTabs-indicator": {
                                backgroundColor: "#fdb913" 
                            }
                        }}
                    >
                        <Tab label="Adquirente" />
                        <Tab label="Pix" />
                    </Tabs>
                </AppBar>
            </Box>
            <Box>
                {value === 0 && <Acquirer/>}
            </Box>
            <Box>
                <MenuBottomNavigation/>
            </Box>
        </React.Fragment>
    )
}
