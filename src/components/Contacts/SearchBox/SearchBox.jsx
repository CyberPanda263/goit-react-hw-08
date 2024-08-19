import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {changeFilter} from '../../../redux/filter/slice';
import { selectFilter } from '../../../redux/filter/selectors';



const SearchBox = () => {

    const dispath = useDispatch();
    const currentFilter = useSelector(selectFilter);

    return(
        <div className= {css.searchBox}>
            <h3>Find contacts</h3>
            <input 
            className= {css.searchBoxInput}
            placeholder='Enter contact name or number' 
            type='text' 
            value={currentFilter || ''}
            onChange={(evet) => dispath(changeFilter(evet.target.value))} />
        </div>
    )
}

export default SearchBox