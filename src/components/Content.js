import { People } from '../data/People';
import { StyledContent } from './styles/Content.styled';

export const Content = ({ darkMode }) =>{
    return(
        <StyledContent darkMode={ darkMode }>
            < People />
        </StyledContent>
    );
}