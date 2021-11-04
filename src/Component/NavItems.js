import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Text,
  Button,
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import styles from './component.module.css'

export const NavItem = (props) => {
  const subLInks = props.links.filter((link) => {
    return link.dropdownLinks.length !== 0
  })
  return (
    <Menu>
      {({ isOpen }) => {
        return (
          <>
            <MenuButton
              as={Button}
              color='white'
              rightIcon='chevron-down'
              _focus='#060812'
              onMouseOver={() => (isOpen = true)}
              variant='white'
            >
              {props.title}
            </MenuButton>
            <MenuList>
              <MenuGroup title={props.title}>
                {props.links.map((link) => {
                  return (
                    <Link
                      to={`/${link.path}`}
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                      }}
                    >
                      <MenuItem
                        style={{
                          textDecoration: 'none',
                          backgroundColor: 'seagreen',
                        }}
                      >
                        <Text>{link.title}</Text>
                      </MenuItem>
                    </Link>
                  )
                })}
              </MenuGroup>
            </MenuList>
          </>
        )
      }}
    </Menu>
  )
}
