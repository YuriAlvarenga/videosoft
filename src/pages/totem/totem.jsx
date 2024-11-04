import React from 'react'
import BannerSuperior from  '../../components/virtual-totem/banners/banner-superior'
import Categories from '../../components/virtual-totem/categories/categories'
import Grid from '@mui/material/Grid2'
import { Typography, Box } from '@mui/material'
import MenuBottomNavigation from '../../components/menu-bottom/menu-bottom'

export default function Totem() {
  return (
    <Grid container direction="column">
        {/* BannerSuperior */}
        <Grid item>
        <BannerSuperior />
        </Grid>

        {/* Categories */}
        <Grid item>
        <Box sx={{display:'flex'}}>
            <Categories />
            <Typography> </Typography>
            </Box>
        </Grid>
        <MenuBottomNavigation/>
   </Grid>
  )
}
