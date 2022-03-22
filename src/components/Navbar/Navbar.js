import { useState } from 'react'
import { AppBar, Toolbar, Button, List, ListItem } from 'react95'
import logoIMG from '../../logo/logoIMG.png';
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
      <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={logoIMG}
              alt='react95 logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Contact Me
          </Button>

          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                top: '100%'
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <span role='img' aria-label='✉️'>
                ✉️
                </span>
                 Email Me
              </ListItem>
              <ListItem>
                <span role='img' aria-label='📞'>
                📞
                </span>
                 Call Me
              </ListItem>
              <ListItem>
                <span role='img' aria-label=''>
                🔗
                </span>
                LinkedIn
              </ListItem>
            </List>
          )}
          Hello World

      </Toolbar>
    </AppBar>

  )
}
