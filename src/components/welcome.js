import { Box, Button, Card, Grid, Typography } from '@material-ui/core';
import { blue, grey, yellow } from '@material-ui/core/colors';
import React from 'react';
import { AdminData, AdminPayment } from './data';

const Welcome = () => {
    return ( 
        <Box display="flex" flexDirection="column">

            <Box style={{marginTop:64.47,height:350,backgroundColor:blue[400]}}>
            <Typography variant="h3" style={{marginLeft:-320,marginTop:15,color:"white"}}>Welcome Admin...</Typography>
                    
                    
                    <Grid container justify="flex-end">
                        <Button style={{backgroundColor:"white",marginRight:10}}>Today</Button>
                        <Button style={{backgroundColor:"white",marginRight:10}}>This Week</Button>
                        <Button style={{backgroundColor:"white",marginRight:10}}>This Month</Button>
                        <Button style={{backgroundColor:"white",marginRight:10}}>This Financial</Button>
                    </Grid>

                    
                    
                    <Grid container justify="flex-end"  style={{marginTop:20}} xs={12} >
                    {AdminData.map((item,index)=>
                        <Card style={{width:150,height:100,marginRight:10,marginTop:25}}>
                            <Card style={{ height:"40%", backgroundColor:yellow[600]}}>
                                <Typography style={{padding:10}}>{item.title}</Typography>
                            </Card>
                            <Card style={{ height:"60%",}}>
                            <Typography style={{padding:10}}>{item.amount}</Typography>
                            </Card>
                        </Card>
                        )}
                    </Grid>


            </Box>


            <Box display="flex" style={{padding:20}}>

               <Grid  container justify="flex-end"  style={{marginTop:20}} xs={12}>

                   {AdminPayment.map((item,index)=>

                    <Card style={{height:220,width:320,marginRight:10,backgroundColor:grey[300]}}>
                        <Card style={{height:"25%",backgroundColor:blue[400]}}>
                            <Typography variant="h5" style={{padding:10}}>{item.title}</Typography>
                        </Card>

                        <Card style={{height:"75%",backgroundColor:grey[200]}}>
                            <Typography variant="h4" style={{padding:30}}>{item.description}</Typography>
                        </Card>
                    </Card>
            )}
               </Grid>
               
            </Box>



 
        </Box>
     );
}
 
export default Welcome;