import { useState } from "react";
import {
  Window,
  WindowHeader,
  Button,
  Toolbar,
  WindowContent,
  Panel,
  Avatar,

} from "react95";
import "./Window.css";
import Draggable from "react-draggable";

export default function AboutWindow() {
  // const [closeAboutWindow, setCloseAboutWindow] = useState(true);

  return (
    <Draggable>
    {/* {closeAboutWindow && ( */}
        <Window resizable className="window">
          <WindowHeader className="window-header">
            <div>AboutMikko.exe</div>
            <Button
              className="close-icon"
              // onClick={() => setCloseAboutWindow(closeAboutWindow)}
            >
              <div>✕</div>
            </Button>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              Edit
            </Button>
            <Button variant="menu" size="sm" disabled>
              Save
            </Button>
          </Toolbar>
          <WindowContent>
          <Panel className="panel" variant="well" >
            <Avatar size={200} src="https://media-exp1.licdn.com/dms/image/C5603AQEvo2V79HxuYg/profile-displayphoto-shrink_800_800/0/1516988791135?e=1653523200&v=beta&t=GH0_i2baraQXXaaKs4ir0Z3mE95QVwucortcKvPNSAM"/>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin, ante vel porttitor posuere, tellus nisi interdum ipsum, non bibendum ante risus ut purus. Curabitur vel posuere odio. Vivamus rutrum, nunc et ullamcorper sagittis, tellus ligula maximus quam, id dapibus sapien metus lobortis diam. Proin luctus, dolor in finibus feugiat, lacus enim gravida sem, quis aliquet tellus leo nec enim. Morbi varius bibendum augue quis venenatis. Curabitur ut elit augue. Pellentesque posuere enim a mattis interdum. Donec sodales convallis turpis, a vulputate elit. Suspendisse potenti.
            </div>

          </Panel>
          </WindowContent>
        </Window>
         {/* )} */}
        </Draggable>
  );
}
