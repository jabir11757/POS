import React from 'react';
import {Card ,Box, Grid, Button, Typography} from '@material-ui/core';
import { blue, grey, pink, yellow } from '@material-ui/core/colors';



const Commerce = () => {
    return ( 
        <Box>   

            <Typography variant="h6">WooCommerce</Typography>
            
             <Grid  container justify="flex-end"  style={{marginTop:20}} xs={12}>

                <Card style={{height:220,width:320,marginRight:10,backgroundColor:grey[300]}}>
                    <Card style={{height:"20%",backgroundColor:blue[400]}}>
                        <Typography variant="h6" style={{padding:5}}>Sync Products Categories</Typography>
                    </Card>

                    <Card style={{height:"80%",backgroundColor:grey[200]}}>
                        <Button style={{width:300,marginTop:10,backgroundColor:pink[400]}}>Some Categories Not Synced</Button>
                        <Grid display="flex">
                            <Button style={{width:300,marginTop:10,backgroundColor:pink[200]}}>Sync</Button>
                            <Button style={{backgroundColor:yellow[100],marginTop:10,marginRight:90}}>Reset Sync Categories</Button>
                        </Grid>
                    </Card>
                </Card>



                <Card style={{height:220,width:320,marginRight:10,backgroundColor:grey[300]}}>
                    <Card style={{height:"20%",backgroundColor:blue[400]}}>
                        <Typography variant="h6" style={{padding:5}}>Sync Products</Typography>
                    </Card>

                    <Card style={{height:"80%",backgroundColor:grey[200]}}>
                        <Button style={{width:300,marginTop:10,backgroundColor:pink[400]}}>Some Categories Not Synced</Button>
                        <Grid display="flex">
                           
                                <Button style={{width:140,marginTop:10,marginRight:10,backgroundColor:pink[200]}}>Sync Only New</Button>
                                <Button style={{width:140,marginTop:10,backgroundColor:pink[200]}}>Sync All</Button>
                         
                            <Button style={{backgroundColor:yellow[100],marginTop:10,marginRight:90}}>Reset Sync Categories</Button>
                        </Grid>
                    </Card>
                </Card>
             
             
                </Grid>
        </Box>
     );
}
 
export default Commerce;
