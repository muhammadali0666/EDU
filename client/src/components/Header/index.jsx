import { BiShare, BiBell } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GoCalendar } from "react-icons/go"
import { HeaderBackBtn, HeaderLogo, HeaderRightBtn, HeaderSelect, HeaderSide, HeaderTag } from './index.style';
import { branches, langs, settings } from "./constants";
import { useState } from "react";
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import CustomSelect from "subcomponents/CustomSelect";
import { Link } from "react-router-dom"

export default function Header() {
  const [anchorElUser, setAnchorElUser] = useState(0);

  return (
    <HeaderTag>
      <HeaderSide>
        <Link to="/">
          <HeaderLogo src="/assets/images/logo.png" alt="Logo" />
        </Link>
        <HeaderBackBtn>
          <BiShare />
          Back
        </HeaderBackBtn>
        <HeaderSelect>
          <CustomSelect
            options={branches}
            defaultValue={branches[0].value}
          />
        </HeaderSelect>
      </HeaderSide>
      <HeaderSide>
        <HeaderRightBtn>
          <AiOutlinePlusCircle />
        </HeaderRightBtn>
        <HeaderRightBtn>
          <BiBell />
        </HeaderRightBtn>
        <HeaderRightBtn>
          <GoCalendar />
        </HeaderRightBtn>
        <CustomSelect
          options={langs}
          defaultValue={langs[0].value}
        />
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={e => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/5.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </HeaderSide>
    </HeaderTag>
  )
}


