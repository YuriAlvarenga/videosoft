import React from 'react'
import { Box, Card, CardMedia } from '@mui/material'

export default function BannerSuperior() {

  return (
    <Box sx={{width:'100%' }}>
          <Box sx={{ position: 'relative', textAlign: 'center', margin: 0, padding: 0, background:'#000000' }}>
            <Card sx={{ margin: 0, padding: 0, background:'#000000'  }}>
              <CardMedia
                component="img"
                alt='banner superior'
                // image="/videosoft_cover.jpg" 
                image="/logo.png" 
                sx={{ height: 200, objectFit:'contain', margin: 0, padding: 0 }}
              />
            </Card>
          </Box>
    </Box>
  )
}