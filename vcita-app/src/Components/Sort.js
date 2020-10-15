import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {fields} from './consts';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    const [chosen_field, setField] = React.useState('');
    const handleChange = (event) => {
        setField(event.target.value);
        if (chosen_field === "oldest") {
            props.getBusinesses("created_at", "desc");
        }
        if (chosen_field === "newest") {
            props.getBusinesses("created_at", "asc");
        }
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={chosen_field}
                    onChange={handleChange}
                >
                    {
                        fields.map((field) =>
                            <MenuItem key={field} value={field}>{field}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>
    );
}
