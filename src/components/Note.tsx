import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {DataType} from "../App";

export type NotePropsType = {
    data: DataType[]
}

export const Note = (props: NotePropsType) => {

    const allNote = props.data.map(el => {
        return (
            <Accordion id={el.id}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        {el.title} {el.date = new Date().toLocaleDateString()}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {el.body}
                    </Typography>
                    <Typography>
                        {el.tags}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    })

    return (
        <div style={{width:'700px'}}>
            {allNote}
        </div>
    );
}
