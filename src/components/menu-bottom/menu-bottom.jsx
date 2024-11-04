import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import AddIcon from '@mui/icons-material/Add'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import AddCardIcon from '@mui/icons-material/AddCard'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import SchoolIcon from '@mui/icons-material/School'
import { styled } from '@mui/system'




const RootBottomNavigation = styled(BottomNavigation)({ width: '100%', position: 'fixed', bottom: 0, background: '#19647e', margin: 0, padding: 0 })


export default function MenuBottomNavigation() {
    const [value, setValue] = useState(null)

    const location = useLocation()
    const navigate = useNavigate()

    const itemsMenu = [
        { id: 1, label: "Totem", value: '/', icon: <PersonalVideoIcon /> },
        { id: 2, label: "Sitef", value:'/sitef', icon: <AddCardIcon /> },
        { id: 3, label: "Manual", value:'/handbook', icon: <MenuBookIcon /> },
        { id: 4, label: "Treinamentos", value:'/videos-tutorials', icon: <SchoolIcon /> },
        { id: 4, label: "Acessos", value:'/access-controls', icon: <LockOpenIcon /> },
    ]

    //verifica a rota atual e atribui o novo valor a value, faz com que o item do menu clicado fique ativo
    useEffect(() => {
        setValue(location.pathname)
    }, [location.pathname])

    const handleItemClick = (newValue) => {
        setValue(newValue)
        navigate(newValue)
    }

    return (
        <RootBottomNavigation value={value}>
            {itemsMenu.map((item) => (
                <BottomNavigationAction
                    key={item.id}
                    label={item.label}
                    value={item.value}
                    icon={item.icon}
                    showLabel
                    onClick={() => handleItemClick(item.value)}
                    sx={{
                        background: '#131313',
                        color: 'rgba(255, 255, 255, 0.7)',
                        "&.Mui-selected": {
                            color: '#fdb913',
                        },
                    }}
                />
            ))}
        </RootBottomNavigation>
    )
}
