import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import {changeFilter} from '../../../redux/filter/slice';



const SearchBox = () => {

    const dispath = useDispatch();

    return(
        <div className= {css.searchBox}>
            <h3>Find contacts</h3>
            <input 
            className= {css.searchBoxInput}
            placeholder='Enter contact name or number' 
            type='text' 
            onChange={(evet) => dispath(changeFilter(evet.target.value))} />
        </div>
    )
}

export default SearchBox