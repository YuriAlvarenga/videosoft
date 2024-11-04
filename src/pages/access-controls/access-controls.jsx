import React, { useState } from 'react'
import { Grid, Typography, IconButton, Snackbar, Box, Button, AppBar } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import HttpsIcon from '@mui/icons-material/Https'
import PersonIcon from '@mui/icons-material/Person';
import MenuBottomNavigation from '../../components/menu-bottom/menu-bottom'

export default function AccessControls() {
    const [copied, setCopied] = useState(false)
    const [copiedNetwork, setCopiedNetwork] = useState('')

    // Dados das redes
    const networks = [
        { networkName: 'VsFood', username: 'admin@videosoft.com.br', password: '12345678' },
        { networkName: 'VsPedidos', username: 'admin@videosoft.com.br', password: '12345678' },
        { networkName: 'Sitef', username: 'admin@sitef.com', password: '12345678' },
    ]

    // Função para copiar a senha e exibir a mensagem
    const copyToClipboard = (text, network) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setCopiedNetwork(network)
        setTimeout(() => {
            setCopied(false)
            setCopiedNetwork('')
        }, 3000)
    }

    return (
        <React.Fragment>
            <AppBar sx={{display:'flex', alignItems:'center', background:'#000000'}}><Typography>Meus Acessos</Typography></AppBar>
            <Grid container spacing={2} style={{ padding: 15, paddingBottom: 0, marginTop: 1 }}>
                {networks.map((network, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography variant="h6" sx={{ mb: 1 }}>{network.networkName}</Typography>
                        <Box sx={{ marginBottom: '10px', background: '#FFF', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 2, p: 1 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PersonIcon sx={{ fontSize: 16, color: '#fdb913', mr: 1 }} />
                                        <Typography sx={{ fontSize: 16 }}>Usuário:</Typography>
                                        <Typography sx={{ fontSize: 16, ml: 1 }} color="text.secondary">{network.username}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <HttpsIcon sx={{ fontSize: 16, color: '#fdb913', mr: 1 }} />
                                        <Typography sx={{ fontSize: 16 }}>Senha: </Typography>
                                        <Typography sx={{ fontSize: 16 }} color="text.secondary">{network.password}</Typography>
                                        <IconButton
                                            aria-label="Copiar Senha"
                                            onClick={() => copyToClipboard(network.password, network.networkName)}
                                            sx={{ ml: 1 }}
                                        >
                                            <FileCopyIcon sx={{ color: '#fdb913' }} />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                <Button color="primary" sx={{ mt: 4 }}>
                                    Acessar
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Snackbar
                open={copied}
                autoHideDuration={3000}
                onClose={() => setCopied(false)}
                message={`Senha de ${copiedNetwork} copiada para a área de transferência!`}
            />
            <MenuBottomNavigation />
        </React.Fragment>
    )
}
