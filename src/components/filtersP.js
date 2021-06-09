import React from 'react';
import {Grid, Box, Typography, Card} from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import { AdminFilter } from './data';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';






const FiltersP = () => {


  


    return ( 
        <Box>
                      <Grid 
                            container
                            direction="row"
                            justify="center"
                            alignItems="center">
                                
                                {AdminFilter.map((item,index)=>
                                <Box style={{marginRight:70}}>
                                   <Typography>{item.title}</Typography>

                                    <NativeSelect style={{
                                                border:"2px solid skyblue",
                                                marginTop:5, 
                                                marginRight:20,
                                                height:30,
                                                width:100}} >
                                                    
                                        <option>{item.number}</option>
                                        
                                    </NativeSelect>

                                  
                                </Box>
                                
                                )}

                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="WooCommerce Enabled"
                                labelPlacement="WooCommerce Enabled"
                            />
                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="Not For Selling"
                                labelPlacement="Not For Selling"
                            />

                 
                 
          </Grid>
        
          
        </Box>
     );
}
 
export default FiltersP;