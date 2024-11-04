import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Box, Divider, Typography, AppBar, Toolbar } from '@mui/material'
import MenuBottomNavigation from '../../components/menu-bottom/menu-bottom'


export default function VideoTutorials() {

    const [activeItem, setActiveItem] = useState(null)


    // Lista de Categories no front
    const [categories, setCategories] = useState([
        {
            children: [
                { id: 101, name: 'Criar Produto' },
                { id: 102, name: 'Remover Produto' },
                { id: 103, name: 'Visibilidade' },
                { id: 104, name: 'Ativar Cardápio' },
                { id: 105, name: 'Etc' },
            ],
        },
    ])

    //Deixa ativo categoria que foi clicada em categories
    const handleCategoryItemClick = (id) => {
        setActiveItem(id)
    }

    return (
        <React.Fragment>
            <AppBar sx={{display:'flex', alignItems:'center', background:'#000000'}}><Typography>Treinamentos</Typography></AppBar>
            <Box sx={{ background: '#000000', width: 120, color: '#fff', height: '100vh', pt:3, position:'fixed'}}>
                <List disablePadding>
                    {categories.map(({ children }, index) => (
                        <Box key={index} >
                            {children.map(({ id, name }) => (
                                <ListItem disablePadding key={id}>
                                    <ListItemButton sx={{ backgroundColor: activeItem === id ? '#fdb913' : '#000000' }} onClick={() => handleCategoryItemClick(id)}>
                                        <ListItemText>
                                            <Typography sx={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.7)' }}>{name}</Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                    <Divider style={{ background: 'rgba(255, 255, 255, 0.7)' }} />
                                </ListItem>
                            ))}
                        </Box>
                    ))}
                </List>
            </Box>
            <MenuBottomNavigation/>
        </React.Fragment>
    )
}