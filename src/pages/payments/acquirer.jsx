import * as React from 'react'
import Box from '@mui/material/Box'
import { Card, CardContent, Grid, Toolbar, Typography, Checkbox, FormControlLabel, Button, TextField } from '@mui/material'

const acquirers = ['Cielo', 'Rede', 'Stone', 'GetNet']

export default function Acquirer() {
  const [selectedAcquirer, setSelectedAcquirer] = React.useState(null)
  const [showInput, setShowInput] = React.useState(false)

  const handleAcquirerChange = (acquirer) => {
    setSelectedAcquirer(acquirer === selectedAcquirer ? null : acquirer)
    setShowInput(false)
  }

  const handleOkClick = () => {
    setShowInput(true)
  }

  return (
    <Box sx={{ margin: 1 }}>
      <Toolbar />
      <Typography variant="h6" sx={{ ml: 2 }}>Cadastro de Adquirente</Typography>

      <Grid container spacing={2} sx={{ padding: 1 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                {acquirers.map((acquirer, index) => (
                  <Grid item xs={6} key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedAcquirer === acquirer}
                          onChange={() => handleAcquirerChange(acquirer)}
                        />
                      }
                      label={acquirer}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Card de aviso sobre a adquirente selecionada */}
        {selectedAcquirer && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  <span style={{ color: 'red' }}>Atenção:</span> Você deve entrar em contato com a sua adquirente {selectedAcquirer} e solicitar os <strong>Números Lógicos</strong> para ativar seu TEF.
                </Typography>
                <Box sx={{display:'flex', flexDirection:'row-reverse'}}>
                  <Button variant="contained" color="primary" onClick={handleOkClick} sx={{ mt: 4 }}>
                    OK
                  </Button>
                </Box>

              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
        {/* Exibe o input após clicar em OK */}
        {showInput && (
          <Box sx={{m:1}}>
            <TextField
              fullWidth
              label="Números Lógicos"
              variant="outlined"
              sx={{ mt: 2 }}
            />

            <Button fullWidth variant="contained" color="primary" onClick={handleOkClick} sx={{ mt: 4, mb: 0 }}>
              salvar
            </Button>
          </Box>

        )}
    </Box>
  )
}
