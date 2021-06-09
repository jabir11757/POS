import React from 'react';
import {Box, Card, Grid} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import NativeSelect from '@material-ui/core/NativeSelect';




const Last = () => {

    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        style: { width: '5rem', height: '5rem' },
      };
    return ( 
        <Box display="flex">
            <Box flexGrow={1}>
                <Card style={{backgroundColor:grey[400],height:400,width:"100%"}}>   
                dffhg
                </Card>
            </Box>



            <Box flexGrow={1} style={{marginTop:10}}>


                <NativeSelect style={{
                            border:"2px solid skyblue",
                            marginTop:5, 
                            marginRight:20,
                            height:30,
                            width:150}} >
                                
                    <option>All Categories</option>
                    
                </NativeSelect>

                <NativeSelect style={{
                            border:"2px solid skyblue",
                            marginTop:5, 
                            marginRight:20,
                            height:30,
                            width:130}} >
                                
                    <option>All Brands</option>
                    
                </NativeSelect>

 
        
                <Grid container
                      direction="row"
                      alignItems="center">

                    <Box justifyContent="center">
                    <Box borderColor="grey.500" {...defaultProps}/>
                    </Box>
                    <Box justifyContent="center">
                    <Box borderColor="grey.500" {...defaultProps}/>
                    </Box>
                    <Box justifyContent="center">
                    <Box borderColor="grey.500" {...defaultProps}/>
                    </Box>
                    
                
                </Grid>
    
            </Box>
        </Box>
     );
}
 
export default Last;