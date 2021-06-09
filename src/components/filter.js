import {Card ,Box, Grid, Button, Typography} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const Filter = () => {



    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Gingerbread', 356, 16.0, 49, 3.9),


      ];
      
      const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });

    const classes = useStyles();

           


    return ( 
       <Box style={{padding:10}}>

            <Card style={{width:"100%",backgroundColor:blue[400]}}>

                <Card style={{height:"100%",marginTop:5}}>
   
                        <Box display="flex" style={{height:50,backgroundColor:grey[400]}}>
                            <Typography style={{marginLeft:30,marginTop:10}}>All Users</Typography>
                            <Button style={{height:35, backgroundColor:blue[400],marginTop:8,marginLeft:1162}}>+ ADD</Button>
                        </Box>

              
                        <Grid container
                            direction="row"
                            justify="flex-end"
                            alignItems="center">
                            <NativeSelect style={{border:"2px solid skyblue", marginTop:5, marginRight:20}} >
                                <option  />
                                <option >1</option>
                                <option >2</option>
                                <option >3</option> 
                            </NativeSelect>
                            <InputBase style={{border:"2px solid skyblue",marginRight:5,marginTop:5}} placeholder="Search"/>
                            <Button style={{backgroundColor:blue[400],marginRight:5,marginTop:5}}>Export To Excel</Button>
                            <Button style={{backgroundColor:blue[400],marginRight:5}}>Export To CSV</Button>
                            <Button style={{backgroundColor:blue[400],marginRight:5}}>Export To  PDF</Button>
                            <Button style={{backgroundColor:blue[400],marginRight:5}}>Column Visibility</Button>
                            <Button style={{backgroundColor:blue[400],marginRight:5}}>Print</Button>
                        </Grid>



                        <TableContainer component={Paper} style={{padding:10,backgroundColor:grey[400],marginTop:5}} >
                            <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                <StyledTableCell>Username</StyledTableCell>
                                <StyledTableCell align="right">Name</StyledTableCell>
                                <StyledTableCell align="right">Role</StyledTableCell>
                                <StyledTableCell align="right">Email</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                    {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                                ))}
                            </TableBody>
                            </Table>

                            <Button style={{backgroundColor:blue[400],marginLeft:1200,marginTop:10}}>NEXT</Button>
                        </TableContainer>
                        
    
                      </Card>

                    </Card>

           
       </Box>
     );
}
 
export default Filter;