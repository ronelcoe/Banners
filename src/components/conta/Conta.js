import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import './conta.css';
import coca from './coca.png';
import Sort from '../../images/Sort1.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

 
  return (
    <div style={{
      width: "100%",
      marginTop: "20px",
      backgroundColor: "#FFFFFF",
      padding: "0 17px"
    }}>
      <div style={{
        paddingTop:"11px",
        height: "42px"
      }}>
      <Grid conatiner style={{display: "flex"}}>
        <Grid item xs={1} sm={1} md={1}>
        <div className="checks">
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      
    </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <div className="id">
            ID <img src={Sort} alt="sort" />
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="status" >
            Status <img src={Sort} alt="sort" />
          </div> 
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className="ban">
            Banner <img src={Sort} alt="sort" />
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="cron">
            Created On <img src={Sort} alt="sort" />
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className="combo">
            Combo Name <img src={Sort} alt="sort" />
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="crby">
            Created By
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className="tick">
            Approve or Reject
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="Rej">
            Reject Type
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="Resone">
            Reject Resone
          </div>
        </Grid>
      </Grid>
      <div>

      </div>
      </div>
      <div  style={{height: "116px", backgroundColor: "#F5F5F9", marginTop: "2.5px"}}>
      <Grid conatiner style={{display: "flex"}} alignItems="center">
        <Grid item xs={1} sm={1} md={1}>
        <div className="checks">
  
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      
    </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="id1">

          
            72738445
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="status1">
            Completed
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
          <div className ="coke">
          
            <img src={ coca } alt ="img " />
            </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <div className ="dates">
            12/03/2020
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className ="food">
            Darjeeling Biryani with
            pepsi(500ml)
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className ="name">
            Karan
          </div> 
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className ="tog">
        <div
            style={{
              marginTop: "16px",
              color: "#000",
              font: "Regular 14px/19px Roboto",
              float: "left",
              lineHeight: "25px",
            
              letterSpacing: "0em",
              width: "100%",
              
            }}
          >
            <span style={{ float: "left" }}>
              <label className="toggle-label">
                <input type="checkbox" onClick={this.handleChange} />
                <span className="back">
                  <span className="toggle"></span>
                  <span className="label on">Approve</span>
                  <span className="label off">Reject</span>
                </span>
              </label>
            </span>
          </div>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className >
        <br/>
            -
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className >
        <br/>
            -
          </div>
        </Grid>
      </Grid>
      </div>
      <div  style={{height: "116px", backgroundColor: "#F5F5F9", marginTop: "2.5px"}}>
      <Grid conatiner style={{display: "flex"}} alignItems="center">
        <Grid item xs={1} sm={1} md={1}>
        <div className="checks">
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      
    </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="id1">
            72738445
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="status1">
            Completed
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
          <div className ="coke">
          
            <img src={ coca } alt ="img " />
            </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <div className ="dates">
            12/03/2020
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className ="food">
            Darjeeling Biryani with<br/>
            pepsi(500ml)
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className ="name">
            Pankaj
          </div> 
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className ="tog">
        <div
            style={{
              marginTop: "16px",
              color: "#000",
              fontSize: "12px",
              float: "left",
              lineHeight: "25px",
              fontFamily: ' "Roboto" ,"Helvetica" ,"Arial",sans-serif',
              fontWeight: "600",
              letterSpacing: "0.00938em",
              width: "100%",
              float: "left"
            }}
          >
            <span style={{ float: "left" }}>
              <label className="toggle-label">
                <input type="checkbox" onClick={this.handleChange} />
                <span className="back">
                  <span className="toggle"></span>
                  <span className="label on">Approve</span>
                  <span className="label off">Reject</span>
                </span>
              </label>
            </span>
          </div>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className >
            -
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className >
            -
          </div>
        </Grid>
      </Grid>
      </div>
      <div  style={{height: "116px", backgroundColor: "#F5F5F9", marginTop: "2.5px"}}>
      <Grid conatiner style={{display: "flex"}} alignItems="center">
        <Grid item xs={1} sm={1} md={1}>
        <div className="checks">
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      
    </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="id1">
            72738445
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="status1">
            Completed
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
          <div className ="coke">
            <img src={ coca } alt ="img " />
            </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <div className ="dates">
            12/03/2020
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className ="food">
            Darjeeling Biryani with<br/>
            pepsi(500ml)
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className ="name">
            Amit
          </div> 
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className ="tog">
        <div
            style={{
              marginTop: "16px",
              color: "#000",
              fontSize: "12px",
              float: "left",
              lineHeight: "25px",
              fontFamily: ' "Roboto" ,"Helvetica" ,"Arial",sans-serif',
              fontWeight: "600",
              letterSpacing: "0.00938em",
              width: "100%",
              float: "left"
            }}
          >
            <span style={{ float: "left" }}>
              <label className="toggle-label">
                <input type="checkbox" onClick={this.handleChange} />
                <span className="back">
                  <span className="toggle"></span>
                  <span className="label on">Approve</span>
                  <span className="label off">Reject</span>
                </span>
              </label>
            </span>
          </div>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className >
            -
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className >
            -
          </div>
        </Grid>
      </Grid>
      </div>
      <div  style={{height: "116px", backgroundColor: "#F5F5F9", marginTop: "2.5px"}}>
      <Grid conatiner style={{display: "flex"}} alignItems="center">
        <Grid item xs={1} sm={1} md={1}>
        <div className="checks">
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      
    </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="id1">
            72738445
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className="status1">
            Completed
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
          <div className ="coke">
            <img src={ coca } alt ="img " />
            </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <div className ="dates">
            12/03/2020
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className ="food">
            Darjeeling Biryani with<br/>
            pepsi(500ml)
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className ="name">
            Amit
          </div> 
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
        <div className ="tog">
        <div
            style={{
              marginTop: "16px",
              color: "#000",
              fontSize: "12px",
              float: "left",
              lineHeight: "25px",
              fontFamily: ' "Roboto" ,"Helvetica" ,"Arial",sans-serif',
              fontWeight: "600",
              letterSpacing: "0.00938em",
              width: "100%",
              float: "left"
            }}
          >
            <span style={{ float: "left" }}>
              <label className="toggle-label">
                <input type="checkbox" onClick={this.handleChange} />
                <span className="back">
                  <span className="toggle"></span>
                  <span className="label on">Approve</span>
                  <span className="label off">Reject</span>
                </span>
              </label>
            </span>
          </div>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className >
            -
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
        <div className >
            -
          </div>
        </Grid>
      </Grid>
      </div>
      <div className="foot">
      <div className="result" style={{ display:"flex",alignItems: "center", float: "left"}}>
        Showing Results 10/100 
        <ArrowDropDownIcon style={{fill:"#8782D9", marginTop: "5px", marginBottom: "6px"}}/>
</div>
<div className="last" style={{display: "flex",flexDirection:"row",float:"right", alignItems: "center"}}>
<KeyboardArrowLeftIcon/>
<div className="a1">1</div>
<div className="a2">2</div>
<KeyboardArrowRightIcon/>

  </div>
      </div>
    </div>
  );
}
