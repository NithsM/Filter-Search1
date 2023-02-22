import { Typography, Box, ListItem, ListItemText, Stack, Card } from '@mui/material'
import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import { TextField, InputAdornment } from '@mui/material';

function FilterSearch() {

    const stream = [
        { id: 1, title: 'Engineering' },
        { id: 2, title: 'Management' },
        { id: 3, title: 'Science' },
        { id: 4, title: 'Arts' },
        { id: 5, title: 'Commerce' },
        { id: 6, title: 'Computer Application' },
        { id: 7, title: 'Medical' },
        { id: 8, title: 'Pharmacy' },
        { id: 9, title: 'Law' },
        { id: 10, title: 'Design' },

    ]

    const subs = [
        { id: 1, title1: 'Computer Science' },
        { id: 2, title1: 'Mechanical Engineering' },
        { id: 3, title1: 'Electronics & Communication' },
        { id: 4, title1: 'Civil' },
        { id: 5, title1: 'Electrical & Electronics' },
        { id: 6, title1: 'Information Technology' },
        { id: 7, title1: 'Electrical' },
        { id: 8, title1: 'Electronics' },
        { id: 9, title1: 'General' },
        { id: 10, title1: 'Biotechnology' },

    ]

    const state1 = [
        { id: 1, title2: 'TamilNadu' },
        { id: 2, title2: 'Maharashtra' },
        { id: 3, title2: 'Uttar Pradesh' },
        { id: 4, title2: 'Bihar' },
        { id: 5, title2: 'Delhi' },
        { id: 6, title2: 'Andra Pradesh' },
        { id: 7, title2: 'Karnataka' },
        { id: 8, title2: 'Telangana' },
        { id: 9, title2: 'Gujarat' },
        { id: 10, title2: 'Kerala' },

    ]

    const city1 = [
        { id: 1, title3: 'New Delhi' },
        { id: 2, title3: 'Mumbai' },
        { id: 3, title3: 'Chennai' },
        { id: 4, title3: 'Kolkata' },
        { id: 5, title3: 'Hyderabad' },
        { id: 6, title3: 'Bangalore' },
        { id: 7, title3: 'Pune' },
        { id: 8, title3: 'Ahmedabad' },
        { id: 9, title3: 'Noida' },
        { id: 10, title3: 'Lucknow' },

    ]

    const course1 = [
        { id: 1, title4: 'BE/B.Tech' },
        { id: 2, title4: 'ME/M.Tech' },
        { id: 3, title4: 'Polytechnic' },
        { id: 4, title4: 'M.Phil/Ph.D in Engineering' },
        { id: 5, title4: 'Diploma in Engineering' },
        { id: 6, title4: 'Traning Programs' },

    ]

    const [streams, setStreams] = useState(stream)
    const [substream, setSubstream] = useState(subs)
    const [states, setStates] = useState(state1)
    const [cities, setCities] = useState(city1)
    const [courses, setCourses] = useState(course1)



    const filterNames = e => {
        const search = e.target.value.toLowerCase()
        const filteredNames = stream.filter(stream => stream.title.toLowerCase().includes(search))
        setStreams(filteredNames)
    }

    const filterNames1 = e => {
        const search = e.target.value.toLowerCase()
        const filteredNames1 = subs.filter(subs => subs.title1.toLowerCase().includes(search))
        setSubstream(filteredNames1)
    }

    const filterNames2 = e => {
        const search = e.target.value.toLowerCase()
        const filteredNames2 = state1.filter(state => state.title2.toLowerCase().includes(search))
        setStates(filteredNames2)
    }

    const filterNames3 = e => {
        const search = e.target.value.toLowerCase()
        const filteredNames3 = city1.filter(city => city.title3.toLowerCase().includes(search))
        setCities(filteredNames3)
    }

    const filterNames4 = e => {
        const search = e.target.value.toLowerCase()
        const filteredNames4 = course1.filter(course => course.title4.toLowerCase().includes(search))
        setCourses(filteredNames4)
    }


    return (
        <Stack m={10} position="static " >


            <Card >

                <TextField
                    variant='outlined'
                    sx={{ width: '200px' }}
                    placeholder='Search Stream'
                    type='text' onChange={(e) => filterNames(e)} />
                  <List sx={{ width: '200px', height: "300px", overflowY: "auto" }}>
                    {streams.map((e) => {
                        return (
                            <ListItem >
                                <Checkbox />
                                <ListItemText>
                                    <Typography >{e.title}</Typography>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
             </Card>
            <Card >

                <TextField
                    variant='outlined'
                    sx={{ width: '200px' }}
                    placeholder='Search SubStream'
                    type='text' onChange={(e) => filterNames1(e)} />
                  <List sx={{ width: '200px', height: "300px", overflowY: "auto" }}>
                    {substream.map((e) => {
                        return (
                            <ListItem >
                                <Checkbox />
                                <ListItemText>
                                    <Typography >{e.title1}</Typography>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
             </Card>
            <Card >

                <TextField
                    variant='outlined'
                    sx={{ width: '200px' }}
                    placeholder='Search State'
                    type='text' onChange={(e) => filterNames2(e)} />
                  <List sx={{ width: '200px', height: "300px", overflowY: "auto" }}>
                    {states.map((e) => {
                        return (
                            <ListItem >
                                <Checkbox />
                                <ListItemText>
                                    <Typography >{e.title2}</Typography>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
             </Card>
            <Card >

                <TextField
                    variant='outlined'
                    sx={{ width: '200px' }}
                    placeholder='Search City'
                    type='text' onChange={(e) => filterNames3(e)} />
                  <List sx={{ width: '200px', height: "300px", overflowY: "auto" }}>
                    {cities.map((e) => {
                        return (
                            <ListItem >
                                <Checkbox />
                                <ListItemText>
                                    <Typography >{e.title3}</Typography>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
             </Card>

             <Card >

                <TextField
                    variant='outlined'
                    sx={{ width: '200px' }}
                    placeholder='Search Courses'
                    type='text' onChange={(e) => filterNames4(e)} />
                  <List sx={{ width: '200px', height: "300px", overflowY: "auto" }}>
                    {courses.map((e) => {
                        return (
                            <ListItem >
                                <Checkbox />
                                <ListItemText>
                                    <Typography >{e.title4}</Typography>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
             </Card>

        

        </Stack>
    )

}
export default FilterSearch