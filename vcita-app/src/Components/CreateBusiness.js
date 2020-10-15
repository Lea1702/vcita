import React,  { useState }  from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublicIcon from '@material-ui/icons/Public';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const CreateBusiness = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = async (e) => {
        const body = { "business":
                { "business_name": name,
                    "email": email,
                    "password": password,
                    "country_name": country,
                    "phone_info": phone,
                    "meeting_location": address}
        };
        await props.createBusiness(body);
        setName("");
        setEmail("");
        setPassword("");
        setCountry("");
        setPhone("");
        setAddress("");
    };

    const validateForm = () => {
        return name.length>0 && email.length>0 && password.length>0 && country.length>0 && phone.length>0 && address.length>0 ;
    };

    const classes = useStyles();
    return (
        <div className="new-business">
        <div className={classes.margin}>
        <Grid container  spacing={1} alignItems="flex-end">
            <Grid item >
                <AccountCircle />
            </Grid>
            <Grid item >
                <TextField id="input-with-icon-grid" label="Name" value={name}
                           onChange={e => setName(e.target.value)}/>
            </Grid>
        </Grid>
    </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <MailIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Email" value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <LockIcon />
                    </Grid>
                    <Grid item>
                        <TextField type="password" id="input-with-icon-grid" label="Password" value={password}
                                   onChange={e => setPassword(e.target.value)}/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <PublicIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Country" value={country}
                                   onChange={e => setCountry(e.target.value)}/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <PhoneIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Phone" value={phone}
                                   onChange={e => setPhone(e.target.value)}/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <LocationOnIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Address" value={address}
                                   onChange={e => setAddress(e.target.value)}/>
                    </Grid>
                </Grid>
            </div>
            {!props.createPending ?
            <Button disabled={!validateForm()} variant="contained" color="primary" className="create-account" onClick={(e) => handleClick(e)}>
                CREATE ACCOUNT
            </Button>:
                <i className="fas fa-circle-notch fa-spin loading"></i>
            }
                <ToastContainer />
        </div>);
};

export default class Create extends React.Component {
    render(){
        return (
            <div>
                <h2 className="sansserif create">Create new business</h2>
                <CreateBusiness createPending={this.props.createPending}  createBusiness={this.props.createBusiness}
                            getBusinesses={this.props.getBusinesses}  />
            </div>)
    }
}