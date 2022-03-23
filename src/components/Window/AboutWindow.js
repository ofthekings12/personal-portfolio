import React from 'react'
import { Window, WindowHeader, Button, Toolbar, WindowContent, Panel } from 'react95'
import './Window.css'
import Draggable from "react-draggable";


export default function AboutWindow() {
  return (
    <Draggable>
    <div>
      <Window resizable className='window'>
      <WindowHeader className='window-header'>
      <div>
          AboutMikko.exe
          </div>
        <Button className='close-icon'>
          <div>✕
          </div>
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button variant='menu' size='sm'>
          File
        </Button>
        <Button variant='menu' size='sm'>
          Edit
        </Button>
        <Button variant='menu' size='sm' disabled>
          Save
        </Button>
      </Toolbar>
      <WindowContent>
        <p>
          When you set &quot;resizable&quot; prop, there will be drag handle in
          the bottom right corner (but resizing itself must be handled by you
          tho!)
        </p>
      </WindowContent>
      <Panel variant='well' className='footer'>
        Put some useful informations here
      </Panel>
    </Window>
    </div>
    </Draggable>
  )
}
