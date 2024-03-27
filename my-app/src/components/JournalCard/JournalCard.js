import * as React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardActions, Button } from '@mui/material';
import { styled } from '@mui/system';
import './JournalCard.css';

const CardContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
    justifyContent: 'center',
});

const StyledCard = styled(Card)({
    height: '200px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 5px #000000',
});

const StyledCardHeader = styled(CardActionArea)({
    '&:hover': {
        backgroundColor: 'transparent',
    },
    padding: '5px',
    borderBottom: '1px solid #ccc',
});

const StyledCardBody = styled(CardActionArea)({
    '&:hover': {
        backgroundColor: 'transparent',
    },
    padding: '5px',
    flexGrow: 1,
});

const CardFooter = styled(CardActions)({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '5px',
    borderTop: '1px solid #ccc',
    borderRadius: '0 0 10px 10px',
});

const StyledCardContent = styled(CardContent)({});

const StyledButtons = styled(Button)({
    '&:hover': {
        backgroundColor: '#3b5729',
    },
    backgroundColor: '#58825a',
});

const StyledTypography = styled(Typography)({
    color: '#000000',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
});

function JournalCard({ entries, deleteEntry }) {
    return (
        <CardContainer>
            {entries.map((entry, index) => (
                <StyledCard key={index}>
                    <StyledCardHeader>
                        <StyledTypography gutterBottom variant="body1" component="div">
                            {entry.title}
                        </StyledTypography>
                    </StyledCardHeader>

                    <StyledCardBody>
                        <StyledCardContent>
                            <StyledTypography variant="body3">{entry.date}</StyledTypography>
                            <StyledTypography variant="body1">{entry.content}</StyledTypography>
                        </StyledCardContent>
                    </StyledCardBody>

                    <CardFooter>
                        <StyledButtons>
                            <Button onClick={() => deleteEntry(index)}>Delete</Button>
                        </StyledButtons>
                    </CardFooter>
                </StyledCard>
            ))}
        </CardContainer>
    );
}

export default JournalCard;
