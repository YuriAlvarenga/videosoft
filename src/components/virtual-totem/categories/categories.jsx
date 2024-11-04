import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Box, Divider, Typography, TextField } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'


export default function Categories() {

  const [activeItem, setActiveItem] = useState(null)

  const [newCategory, setNewCategory] = useState('')
  const [showInput, setShowInput] = useState(false)

  // Lista de Categories no front
  const [categories, setCategories] = useState([
    {
      children: [
        { id: 101, name: 'BEBIDAS' },
      ],
    },
  ])

  //Habilita entrada de input para adicionar nova categoria
  const handleAddCategory = () => {
    if (newCategory.trim().toUpperCase) {
      setCategories(prevCategories => [
        ...prevCategories,
        { children: [{ id: Date.now(), name: newCategory }] },
      ])
      setNewCategory('')
      setShowInput(false)
    }
  }

  //Desabilita entrada de input para adição de nova categoria
  const handleCloseCategory = () =>{
    setNewCategory('')
    setShowInput(false)
  }

  //Deixa ativo categoria que foi clicada em categories
  const handleCategoryItemClick = (id) => {
    setActiveItem(id)
  }

  return (
    <Box sx={{ background: '#000000', width: 120, color: '#fff', height: '100vh' }}>
      <List disablePadding>
        {categories.map(({ children }, index) => (
          <Box key={index} >
            {children.map(({ id, name }) => (
              <ListItem disablePadding key={id}>
                <ListItemButton  sx={{  backgroundColor: activeItem === id ? '#fdb913' : '#000000' }}  onClick={() => handleCategoryItemClick(id)}>
                  <ListItemText>
                    <Typography sx={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.7)'  }}>{name}</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider style={{ background: 'rgba(255, 255, 255, 0.7)' }} />
          </Box>
        ))}
      </List>
      <List disablePadding>
        <Box sx={{ bgcolor: '#000000' }}>
          {showInput ? (
            <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField value={newCategory} autoFocus onChange={(e) => setNewCategory(e.target.value)} placeholder="Nome da Categoria" variant="standard"  sx={{ color: 'white', fontSize: 12, width: '100%', padding: '4px 8px' }}
                InputProps={{
                  disableUnderline: true,
                  sx: { color: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }
                }}
              />
              <Box sx={{ display: 'flex', justifyContent:'flex-end', width:'100%'}}>
                <Tooltip title="Adicionar Categoria">
                  <IconButton color='inherit' onClick={handleAddCategory}>
                    <CheckCircleOutlineIcon style={{ fontSize: 18 }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Adicionar Categoria">
                  <IconButton color='inherit' onClick={handleCloseCategory}>
                    <HighlightOffIcon style={{ fontSize: 18 }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          ) : (
            <ListItem disablePadding>
              <ListItemButton sx={{ color: 'rgba(255, 255, 255, 0.7)' }} onClick={() => setShowInput(true)}>
                <ListItemText>
                  <Typography sx={{ fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}><AddCircleOutlineIcon style={{ fontSize: 18 }} />Categoria</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          )}
        </Box>
      </List>
    </Box>
  )
}
